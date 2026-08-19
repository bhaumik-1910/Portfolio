import { memo, useState, useEffect } from 'react';
import './GitHubStatsCard.css';

const GITHUB_USERNAME = 'bhaumik-1910';
const CACHE_KEY = `gh_stats_${GITHUB_USERNAME}`;

const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const formatMonthDay = (dateStr) => {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    const month = MONTHS_SHORT[parseInt(parts[1], 10) - 1] || '';
    const day = parseInt(parts[2], 10);
    return `${month} ${day}`;
};

const formatFullDate = (dateStr) => {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    const year = parts[0];
    const month = MONTHS_SHORT[parseInt(parts[1], 10) - 1] || '';
    const day = parseInt(parts[2], 10);
    return `${month} ${day}, ${year}`;
};

const formatMonthYear = (monthStr) => {
    if (!monthStr) return '';
    const parts = monthStr.split('-');
    const year = parts[0];
    const month = MONTHS_SHORT[parseInt(parts[1], 10) - 1] || '';
    return `${month} ${year}`;
};

const parseGitHubData = (data) => {
    try {
        const totalContributions = Object.values(data.total || {}).reduce((a, b) => a + b, 0);
        const days = (data.contributions || []).slice().sort((a, b) => (a.date < b.date ? -1 : 1));

        // First active contribution date
        const firstActive = days.find(d => d.count > 0);
        const firstActivity = firstActive ? formatFullDate(firstActive.date) : '';

        // Peak day
        const peakDayItem = days.reduce((max, d) => (d.count > (max ? max.count : 0) ? d : max), null);
        const peakDay = peakDayItem ? formatFullDate(peakDayItem.date) : '';
        const peakDayCount = peakDayItem ? peakDayItem.count : 0;

        // Top month
        const monthCounts = {};
        days.forEach(d => {
            const month = d.date.substring(0, 7);
            monthCounts[month] = (monthCounts[month] || 0) + d.count;
        });

        const topMonthEntry = Object.entries(monthCounts).reduce(
            (max, [m, c]) => (c > (max ? max.count : 0) ? { month: m, count: c } : max),
            null
        );
        const topMonth = topMonthEntry ? formatMonthYear(topMonthEntry.month) : '';
        const topMonthCount = topMonthEntry ? topMonthEntry.count : 0;

        // Longest streak
        let longestStreak = 0;
        let longestStart = null;
        let longestEnd = null;

        let tempStreak = 0;
        let tempStart = null;

        for (let i = 0; i < days.length; i++) {
            const d = days[i];
            if (d.count > 0) {
                if (tempStreak === 0) tempStart = d.date;
                tempStreak++;
                if (tempStreak >= longestStreak) {
                    longestStreak = tempStreak;
                    longestStart = tempStart;
                    longestEnd = d.date;
                }
            } else {
                tempStreak = 0;
                tempStart = null;
            }
        }

        // Current streak (relative to today & timezone)
        const now = new Date();
        const todayStr = now.toISOString().split('T')[0];
        const yesterday = new Date(now);
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        let endIdx = days.length - 1;
        while (endIdx >= 0 && days[endIdx].date > todayStr) {
            endIdx--;
        }

        let currentStreak = 0;
        let currentStart = null;
        let currentEnd = null;

        if (endIdx >= 0) {
            const todayCount = days[endIdx]?.date === todayStr ? days[endIdx].count : 0;
            const yesterdayIdx = endIdx > 0 && days[endIdx - 1]?.date === yesterdayStr
                ? endIdx - 1
                : (days[endIdx]?.date === yesterdayStr ? endIdx : -1);
            const yesterdayCount = yesterdayIdx >= 0 ? days[yesterdayIdx].count : 0;

            let activeIdx = -1;
            if (todayCount > 0) {
                activeIdx = endIdx;
            } else if (yesterdayCount > 0) {
                activeIdx = yesterdayIdx;
            }

            if (activeIdx >= 0) {
                currentEnd = days[activeIdx].date;
                for (let i = activeIdx; i >= 0; i--) {
                    if (days[i].count > 0) {
                        currentStreak++;
                        currentStart = days[i].date;
                    } else {
                        break;
                    }
                }
            }
        }

        // Dynamic timeline nodes based on years
        const years = Object.keys(data.total || {}).map(Number).sort();
        const currentYear = new Date().getFullYear();
        const timelineNodes = years.map((yr, idx) => {
            const pct = Math.round(3 + (idx / Math.max(years.length - 1, 1)) * 72);
            return {
                year: yr,
                left: `${pct}%`,
                type: yr === currentYear ? 'bar' : 'dash',
            };
        });

        return {
            username: GITHUB_USERNAME,
            totalContributions: totalContributions.toLocaleString(),
            contributionsSince: firstActivity,
            currentStreak,
            currentStreakLabel: 'consecutive days',
            currentStreakStart: formatMonthDay(currentStart),
            currentStreakEnd: formatMonthDay(currentEnd),
            longestStreak,
            longestStreakLabel: 'personal best',
            longestStreakStart: formatMonthDay(longestStart),
            longestStreakEnd: formatMonthDay(longestEnd),
            peakDay,
            peakDayCount,
            topMonth,
            topMonthCount,
            firstActivity,
            timelineNodes,
        };
    } catch {
        return null;
    }
};

const GitHubStatsCard = () => {
    const [stats, setStats] = useState(() => {
        try {
            const cached = localStorage.getItem(CACHE_KEY);
            if (cached) {
                return JSON.parse(cached);
            }
        } catch {
            // ignore cache parse errors
        }
        return null;
    });

    const [loading, setLoading] = useState(!stats);

    useEffect(() => {
        let isMounted = true;

        const fetchLiveStats = async () => {
            try {
                const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=all`);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                const parsed = parseGitHubData(data);
                if (isMounted && parsed) {
                    setStats(parsed);
                    try {
                        localStorage.setItem(CACHE_KEY, JSON.stringify(parsed));
                    } catch {
                        // ignore storage errors
                    }
                }
            } catch (err) {
                console.warn('Live GitHub API fetch warning:', err);
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchLiveStats();

        return () => {
            isMounted = false;
        };
    }, []);

    // Timeline nodes
    const timeline = stats?.timelineNodes || [
        { year: 2023, left: '3%', type: 'dash' },
        { year: 2024, left: '27%', type: 'dash' },
        { year: 2025, left: '51%', type: 'dash' },
        { year: 2026, left: '75%', type: 'bar' },
    ];

    return (
        <div className="gh-stats-card">
            {/* Top shine line */}
            <div className="gh-stats-card__shine" />

            {/* Header */}
            <div className="gh-stats-card__header">
                <div className="gh-stats-card__header-left">
                    <h3 className="gh-stats-card__username">{GITHUB_USERNAME}</h3>
                    <span className="gh-stats-card__subtitle">Developer Timeline</span>
                </div>
                <span className="gh-stats-card__badge">github-readme-stats-card</span>
            </div>

            {/* Divider */}
            <div className="gh-stats-card__divider" />

            {/* Timeline Path matching reference design */}
            <div className="gh-stats-card__timeline">
                <div className="gh-stats-card__timeline-track">
                    <div className="gh-stats-card__timeline-line" />
                    {timeline.map((item) => (
                        <div
                            key={item.year}
                            className="gh-stats-card__timeline-node"
                            style={{ left: item.left }}
                        >
                            <div className="gh-stats-card__timeline-marker">
                                {item.type === 'bar' ? (
                                    <div className="gh-stats-card__timeline-bar" />
                                ) : (
                                    <div className="gh-stats-card__timeline-dash" />
                                )}
                            </div>
                            <div className="gh-stats-card__timeline-dot" />
                            <span className="gh-stats-card__timeline-label">{item.year}</span>
                        </div>
                    ))}
                    {/* NOW Node */}
                    <div className="gh-stats-card__timeline-node gh-stats-card__timeline-node--now" style={{ left: '97%' }}>
                        <div className="gh-stats-card__timeline-marker" />
                        <div className="gh-stats-card__timeline-dot gh-stats-card__timeline-dot--now" />
                        <span className="gh-stats-card__timeline-label gh-stats-card__timeline-label--now">NOW</span>
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="gh-stats-card__stats">
                {/* 1. Contributions */}
                <div className="gh-stats-card__stat">
                    <span className="gh-stats-card__stat-number gh-stats-card__stat-number--contributions">
                        {loading && !stats ? '...' : (stats?.totalContributions || '0')}
                    </span>
                    <span className="gh-stats-card__stat-label">CONTRIBUTIONS</span>
                    <span className="gh-stats-card__stat-sub">
                        {stats?.contributionsSince ? `Since ${stats.contributionsSince}` : 'All time'}
                    </span>
                </div>

                <div className="gh-stats-card__stat-divider" />

                {/* 2. Current Streak with Fire Icon */}
                <div className="gh-stats-card__stat gh-stats-card__stat--streak">
                    <div className="gh-stats-card__streak-ring">
                        <svg viewBox="0 0 60 60" className="gh-stats-card__streak-svg">
                            <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(15, 23, 42, 0.08)" strokeWidth="3" />
                            <circle
                                cx="30" cy="30" r="26"
                                fill="none"
                                stroke="#10b981"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeDasharray="163 163"
                                transform="rotate(-90 30 30)"
                            />
                        </svg>
                        <span className="gh-stats-card__streak-count">
                            {loading && !stats ? '...' : (stats?.currentStreak ?? 0)}
                        </span>
                        <span className="gh-stats-card__streak-fire">🔥</span>
                    </div>
                    <span className="gh-stats-card__stat-label">CURRENT STREAK</span>
                    <span className="gh-stats-card__stat-sub">consecutive days</span>
                    <span className="gh-stats-card__stat-range gh-stats-card__stat-range--green">
                        {stats?.currentStreakStart && stats?.currentStreakEnd
                            ? `${stats.currentStreakStart} – ${stats.currentStreakEnd}`
                            : 'Active'}
                    </span>
                </div>

                <div className="gh-stats-card__stat-divider" />

                {/* 3. Longest Streak */}
                <div className="gh-stats-card__stat">
                    <span className="gh-stats-card__stat-number gh-stats-card__stat-number--longest">
                        {loading && !stats ? '...' : (stats?.longestStreak ?? 0)}
                    </span>
                    <span className="gh-stats-card__stat-label">LONGEST STREAK</span>
                    <span className="gh-stats-card__stat-sub">personal best</span>
                    <span className="gh-stats-card__stat-range gh-stats-card__stat-range--purple">
                        {stats?.longestStreakStart && stats?.longestStreakEnd
                            ? `${stats.longestStreakStart} – ${stats.longestStreakEnd}`
                            : 'All time'}
                    </span>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="gh-stats-card__bottom">
                <div className="gh-stats-card__meta">
                    <span className="gh-stats-card__meta-label">PEAK DAY</span>
                    <span className="gh-stats-card__meta-value">
                        {stats?.peakDay ? (
                            <>{stats.peakDay} · <span className="gh-stats-card__meta-purple">{stats.peakDayCount}</span></>
                        ) : '...'}
                    </span>
                </div>
                <div className="gh-stats-card__meta">
                    <span className="gh-stats-card__meta-label">TOP MONTH</span>
                    <span className="gh-stats-card__meta-value">
                        {stats?.topMonth ? (
                            <><span className="gh-stats-card__meta-bold">{stats.topMonth}</span> · <span className="gh-stats-card__meta-purple">{stats.topMonthCount}</span></>
                        ) : '...'}
                    </span>
                </div>
                <div className="gh-stats-card__meta">
                    <span className="gh-stats-card__meta-label">FIRST ACTIVITY</span>
                    <span className="gh-stats-card__meta-value">{stats?.firstActivity || '...'}</span>
                </div>
            </div>
        </div>
    );
};

export default memo(GitHubStatsCard);
