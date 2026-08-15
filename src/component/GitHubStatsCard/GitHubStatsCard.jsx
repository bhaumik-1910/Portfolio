import { memo } from 'react';
import './GitHubStatsCard.css';

const GITHUB_USERNAME = 'bhaumik-1910';

// Static data matching the reference design exactly
// GitHub's public API doesn't expose total contributions, so we use known values
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
    createdYear: 2023,
};

const GitHubStatsCard = () => {
    const currentYear = new Date().getFullYear();
    const timelineYears = [];
    for (let y = statsData.createdYear; y <= currentYear; y++) {
        timelineYears.push(y);
    }

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

            {/* Timeline */}
            <div className="gh-stats-card__timeline">
                <div className="gh-stats-card__timeline-track">
                    <div className="gh-stats-card__timeline-line" />
                    {timelineYears.map((year, idx) => {
                        const total = timelineYears.length;
                        const leftPercent = total <= 1 ? 5 : 5 + (idx / total) * 70;
                        // Activity intensity based on year
                        const intensityMap = {
                            2023: 'low',
                            2024: 'low',
                            2025: 'medium',
                            2026: 'high',
                        };
                        const intensity = intensityMap[year] || 'low';
                        return (
                            <div
                                key={year}
                                className={`gh-stats-card__timeline-node gh-stats-card__timeline-node--${intensity}`}
                                style={{ left: `${leftPercent}%` }}
                            >
                                <div className="gh-stats-card__timeline-marker">
                                    {intensity === 'high' ? (
                                        <div className="gh-stats-card__timeline-bar" />
                                    ) : intensity === 'medium' ? (
                                        <div className="gh-stats-card__timeline-dots">
                                            <span /><span />
                                        </div>
                                    ) : (
                                        <div className="gh-stats-card__timeline-dash" />
                                    )}
                                </div>
                                <div className="gh-stats-card__timeline-dot" />
                                <span className="gh-stats-card__timeline-label">{year}</span>
                            </div>
                        );
                    })}
                    {/* NOW marker */}
                    <div className="gh-stats-card__timeline-node gh-stats-card__timeline-node--now" style={{ left: '92%' }}>
                        <div className="gh-stats-card__timeline-dot gh-stats-card__timeline-dot--now" />
                        <span className="gh-stats-card__timeline-label gh-stats-card__timeline-label--now">NOW</span>
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="gh-stats-card__stats">
                <div className="gh-stats-card__stat">
                    <span className="gh-stats-card__stat-number gh-stats-card__stat-number--contributions">
                        {statsData.totalContributions}
                    </span>
                    <span className="gh-stats-card__stat-label">CONTRIBUTIONS</span>
                    <span className="gh-stats-card__stat-sub">Since {statsData.contributionsSince}</span>
                </div>

                <div className="gh-stats-card__stat-divider" />

                <div className="gh-stats-card__stat gh-stats-card__stat--streak">
                    <div className="gh-stats-card__streak-ring">
                        <svg viewBox="0 0 60 60" className="gh-stats-card__streak-svg">
                            <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
                            <circle
                                cx="30" cy="30" r="26"
                                fill="none"
                                stroke="url(#streakGradient)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeDasharray={`${Math.min(statsData.currentStreak / 365 * 163, 163)} 163`}
                                transform="rotate(-90 30 30)"
                            />
                            <defs>
                                <linearGradient id="streakGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#10b981" />
                                    <stop offset="100%" stopColor="#06d6a0" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <span className="gh-stats-card__streak-count">{statsData.currentStreak}</span>
                        {/* Fire icon at top */}
                        <span className="gh-stats-card__streak-fire">🔥</span>
                    </div>
                    <span className="gh-stats-card__stat-label">CURRENT STREAK</span>
                    <span className="gh-stats-card__stat-sub">{statsData.currentStreakLabel}</span>
                    <span className="gh-stats-card__stat-range">
                        {statsData.currentStreakStart} – {statsData.currentStreakEnd}
                    </span>
                </div>

                <div className="gh-stats-card__stat-divider" />

                <div className="gh-stats-card__stat">
                    <span className="gh-stats-card__stat-number gh-stats-card__stat-number--longest">
                        {statsData.longestStreak}
                    </span>
                    <span className="gh-stats-card__stat-label">LONGEST STREAK</span>
                    <span className="gh-stats-card__stat-sub">{statsData.longestStreakLabel}</span>
                    <span className="gh-stats-card__stat-range">
                        {statsData.longestStreakStart} – {statsData.longestStreakEnd}
                    </span>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="gh-stats-card__bottom">
                <div className="gh-stats-card__meta">
                    <span className="gh-stats-card__meta-label">PEAK DAY</span>
                    <span className="gh-stats-card__meta-value">
                        {statsData.peakDay} · <span className="gh-stats-card__meta-highlight">{statsData.peakDayCount}</span>
                    </span>
                </div>
                <div className="gh-stats-card__meta">
                    <span className="gh-stats-card__meta-label">TOP MONTH</span>
                    <span className="gh-stats-card__meta-value">
                        <span className="gh-stats-card__meta-bold">{statsData.topMonth}</span> · <span className="gh-stats-card__meta-highlight">{statsData.topMonthCount}</span>
                    </span>
                </div>
                <div className="gh-stats-card__meta">
                    <span className="gh-stats-card__meta-label">FIRST ACTIVITY</span>
                    <span className="gh-stats-card__meta-value">{statsData.firstActivity}</span>
                </div>
            </div>

            {/* Footer credit */}
            <div className="gh-stats-card__footer">
                <span>github-readme-stats-card</span>
                <span>·</span>
                <span>by Vatsalladani</span>
            </div>
        </div>
    );
};

export default memo(GitHubStatsCard);
