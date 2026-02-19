import { useEffect, useRef } from 'react';
import './Skills.css';

const skillCategories = [
    {
        id: 'frontend',
        title: 'Frontend',
        icon: '🎨',
        color: '#3b82f6',
        skills: [
            { name: 'HTML5', level: 98, icon: '📄' },
            { name: 'CSS3 / Sass', level: 96, icon: '🎨' },
            { name: 'JavaScript', level: 95, icon: 'JS' },
            { name: 'React.js', level: 95, icon: '⚛️' },
            { name: 'Next.js', level: 90, icon: '▲' },
            { name: 'Tailwind CSS', level: 92, icon: '�' },
            { name: 'Bootstrap', level: 88, icon: 'B' },
            { name: 'MUI / Shadcn', level: 90, icon: '🎨' },
            { name: 'Motion UI', level: 85, icon: '✨' },
        ],
    },
    {
        id: 'backend',
        title: 'Backend',
        icon: '⚙️',
        color: '#8b5cf6',
        skills: [
            { name: 'Node.js', level: 93, icon: '🟢' },
            { name: 'Express.js', level: 90, icon: '🚂' },
            { name: 'REST APIs', level: 95, icon: '🔗' },
            { name: 'Python', level: 75, icon: '🐍' },
            { name: 'GraphQL', level: 65, icon: '◈' },
        ],
    },
    {
        id: 'database',
        title: 'Database',
        icon: '🗄️',
        color: '#06b6d4',
        skills: [
            { name: 'MongoDB', level: 92, icon: '🍃' },
            { name: 'MySQL', level: 85, icon: '🐬' },
            { name: 'Firebase', level: 78, icon: '🔥' },
            { name: 'PostgreSQL', level: 60, icon: '🐘' },
            { name: 'Redis', level: 50, icon: '🔴' },
        ],
    },
    {
        id: 'devops',
        title: 'DevOps & Tools',
        icon: '🚀',
        color: '#10b981',
        skills: [
            { name: 'Git & GitHub', level: 95, icon: '🐙' },
            { name: 'Docker', level: 78, icon: '🐳' },
            { name: 'CI/CD', level: 75, icon: '♾️' },
            { name: 'AWS', level: 72, icon: '☁️' },
            { name: 'Linux', level: 50, icon: '🐧' },
        ],
    },
];

const techIcons = [
    { name: 'HTML5', color: '#e34c26', symbol: '5' },
    { name: 'CSS3', color: '#264de4', symbol: 'CSS' },
    { name: 'Sass', color: '#cc6699', symbol: 'S' },
    { name: 'JavaScript', color: '#f7df1e', symbol: 'JS' },
    { name: 'React', color: '#61dafb', symbol: '⚛' },
    { name: 'Next.js', color: '#ffffff', symbol: '▲' },
    { name: 'TypeScript', color: '#3178c6', symbol: 'TS' },
    { name: 'Tailwind CSS', color: '#06b6d4', symbol: '💨' },
    { name: 'Bootstrap', color: '#7952b3', symbol: 'B' },
    { name: 'MUI', color: '#007fff', symbol: 'M' },
    { name: 'Shadcn/UI', color: '#ffffff', symbol: 'S' },
    { name: 'Motion UI', color: '#ff0055', symbol: 'M' },
    { name: 'Node.js', color: '#68a063', symbol: '⬡' },
    { name: 'MongoDB', color: '#4db33d', symbol: '◉' },
];

export default function Skills() {
    const sectionRef = useRef(null);

    // Duplicate list for infinite marquee
    const marqueeIcons = [...techIcons, ...techIcons];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => {
                            el.classList.add('visible');
                        });
                        // Animate skill bars
                        entry.target.querySelectorAll('.skills__bar-fill').forEach((bar) => {
                            const level = bar.getAttribute('data-level');
                            setTimeout(() => {
                                bar.style.width = level + '%';
                            }, 300);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="section skills" id="skills" ref={sectionRef}>
            <div className="section-inner">
                {/* Header */}
                <div className="skills__header animate-on-scroll">
                    <span className="section-label">My Expertise</span>
                    <h2 className="section-title">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="section-subtitle">
                        A comprehensive toolkit built over years of hands-on development experience
                        across the full stack.
                    </p>
                </div>

                {/* Tech Icons Row - Marquee */}
                <div className="skills__marquee animate-on-scroll animate-delay-1">
                    <div className="skills__marquee-track">
                        {marqueeIcons.map((tech, idx) => (
                            <div key={`${tech.name}-${idx}`} className="skills__tech-icon glass-card" title={tech.name}>
                                <span className="skills__tech-symbol" style={{ color: tech.color }}>
                                    {tech.symbol}
                                </span>
                                <span className="skills__tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skill Categories Grid */}
                <div className="skills__grid">
                    {skillCategories.map((cat, catIdx) => (
                        <div
                            key={cat.id}
                            className={`skills__category glass-card animate-on-scroll animate-delay-${catIdx + 1}`}
                        >
                            {/* Category Header */}
                            <div className="skills__cat-header">
                                <div
                                    className="skills__cat-icon"
                                    style={{ background: `${cat.color}20`, border: `1px solid ${cat.color}40` }}
                                >
                                    <span>{cat.icon}</span>
                                </div>
                                <h3 className="skills__cat-title" style={{ color: cat.color }}>
                                    {cat.title}
                                </h3>
                            </div>

                            {/* Skills List */}
                            <div className="skills__list">
                                {cat.skills.map((skill) => (
                                    <div key={skill.name} className="skills__item">
                                        <div className="skills__item-header">
                                            <div className="skills__item-name">
                                                <span>{skill.icon}</span>
                                                <span>{skill.name}</span>
                                            </div>
                                            <span className="skills__item-level" style={{ color: cat.color }}>
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="skills__bar">
                                            <div
                                                className="skills__bar-fill"
                                                data-level={skill.level}
                                                style={{
                                                    background: `linear-gradient(90deg, ${cat.color}, ${cat.color}99)`,
                                                    width: '0%',
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
