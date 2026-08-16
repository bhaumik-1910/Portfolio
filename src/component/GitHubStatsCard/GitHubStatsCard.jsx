import { memo } from 'react';
import './GitHubStatsCard.css';

const GITHUB_USERNAME = 'bhaumik-1910';

// Exact data matching the reference design
const statsData = {
    username: GITHUB_USERNAME,
    totalContributions: '1513',
    contributionsSince: 'Aug 22, 2023',
    currentStreak: 35,
    currentStreakLabel: 'consecutive days',
    currentStreakStart: 'Jul 11',
    currentStreakEnd: 'Aug 14',
    longestStreak: 35,
    longestStreakLabel: 'personal best',
    longestStreakStart: 'Jul 11',
    longestStreakEnd: 'Aug 14',
    peakDay: 'Dec 30, 2025',
    peakDayCount: 57,
    topMonth: 'Mar 2026',
    topMonthCount: 320,
    firstActivity: 'Aug 22, 2023',
};

const timelineNodes = [
    { year: 2023, left: '3%', type: 'dash' },
    { year: 2024, left: '27%', type: 'dash' },
    { year: 2025, left: '51%', type: 'dash' },
    { year: 2026, left: '75%', type: 'bar' },
];

const GitHubStatsCard = () => {
    return (
        <div className="gh-stats-card">
            {/* Top shine line */}
            <div className="gh-stats-card__shine" />

            {/* Header */}
            <div className="gh-stats-card__header">
                <div className="gh-stats-card__header-left">
                    <h3 className="gh-stats-card__username">{statsData.username}</h3>
                    <span className="gh-stats-card__subtitle">Developer Timeline</span>
                </div>
                <span className="gh-stats-card__badge">github-readme-stats-card</span>
            </div>

            {/* Divider */}
            <div className="gh-stats-card__divider" />

            {/* Timeline Path matching reference screenshot */}
            <div className="gh-stats-card__timeline">
                <div className="gh-stats-card__timeline-track">
                    <div className="gh-stats-card__timeline-line" />
                    {timelineNodes.map((item) => (
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
                        {statsData.totalContributions}
                    </span>
                    <span className="gh-stats-card__stat-label">CONTRIBUTIONS</span>
                    <span className="gh-stats-card__stat-sub">Since {statsData.contributionsSince}</span>
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
                        <span className="gh-stats-card__streak-count">{statsData.currentStreak}</span>
                        <span className="gh-stats-card__streak-fire">🔥</span>
                    </div>
                    <span className="gh-stats-card__stat-label">CURRENT STREAK</span>
                    <span className="gh-stats-card__stat-sub">{statsData.currentStreakLabel}</span>
                    <span className="gh-stats-card__stat-range gh-stats-card__stat-range--green">
                        {statsData.currentStreakStart} – {statsData.currentStreakEnd}
                    </span>
                </div>

                <div className="gh-stats-card__stat-divider" />

                {/* 3. Longest Streak */}
                <div className="gh-stats-card__stat">
                    <span className="gh-stats-card__stat-number gh-stats-card__stat-number--longest">
                        {statsData.longestStreak}
                    </span>
                    <span className="gh-stats-card__stat-label">LONGEST STREAK</span>
                    <span className="gh-stats-card__stat-sub">{statsData.longestStreakLabel}</span>
                    <span className="gh-stats-card__stat-range gh-stats-card__stat-range--purple">
                        {statsData.longestStreakStart} – {statsData.longestStreakEnd}
                    </span>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="gh-stats-card__bottom">
                <div className="gh-stats-card__meta">
                    <span className="gh-stats-card__meta-label">PEAK DAY</span>
                    <span className="gh-stats-card__meta-value">
                        {statsData.peakDay} · <span className="gh-stats-card__meta-purple">{statsData.peakDayCount}</span>
                    </span>
                </div>
                <div className="gh-stats-card__meta">
                    <span className="gh-stats-card__meta-label">TOP MONTH</span>
                    <span className="gh-stats-card__meta-value">
                        <span className="gh-stats-card__meta-bold">{statsData.topMonth}</span> · <span className="gh-stats-card__meta-purple">{statsData.topMonthCount}</span>
                    </span>
                </div>
                <div className="gh-stats-card__meta">
                    <span className="gh-stats-card__meta-label">FIRST ACTIVITY</span>
                    <span className="gh-stats-card__meta-value">{statsData.firstActivity}</span>
                </div>
            </div>
        </div>
    );
};

export default memo(GitHubStatsCard);
