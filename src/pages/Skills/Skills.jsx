import { useRef, memo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const skillCategories = [
    // ... items as they are
    {
        id: 'frontend',
        title: 'Frontend',
        icon: '🎨',
        color: '#3b82f6',
        skills: [
            { name: 'HTML5', level: 90, icon: '📄' },
            { name: 'CSS3 / Sass', level: 90, icon: '🎨' },
            { name: 'JavaScript', level: 95, icon: 'JS' },
            { name: 'React.js', level: 95, icon: '⚛️' },
            { name: 'Next.js', level: 90, icon: '▲' },
            { name: 'Tailwind CSS', level: 92, icon: '🌊' },
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

const marqueeIcons = [...techIcons, ...techIcons];

const Skills = () => {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    useGSAP(() => {
        // Header Reveal
        gsap.from('.skills__header > *', {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.skills__header',
                start: 'top 85%',
            }
        });

        // Marquee Reveal
        gsap.from('.skills__marquee', {
            opacity: 0,
            scale: 0.95,
            duration: 1.2,
            ease: 'expo.out',
            scrollTrigger: {
                trigger: '.skills__marquee',
                start: 'top 90%',
            }
        });

        // Category Cards Reveal
        gsap.from('.skills__category', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: gridRef.current,
                start: 'top 80%',
            }
        });

        // Progress Bar Fill Animation
        const bars = gsap.utils.toArray('.skills__bar-fill');
        bars.forEach((bar) => {
            const level = bar.getAttribute('data-level');
            gsap.to(bar, {
                width: `${level}%`,
                duration: 1.5,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: bar,
                    start: 'top 95%',
                }
            });
        });

    }, { scope: sectionRef });

    return (
        <section className="section skills" id="skills" ref={sectionRef}>
            <div className="section-inner">
                <div className="skills__header">
                    <span className="section-label">My Expertise</span>
                    <h2 className="section-title">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="section-subtitle">
                        A comprehensive toolkit built over years of hands-on development experience
                        across the full stack.
                    </p>
                </div>

                <div className="skills__marquee">
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

                <div className="skills__grid" ref={gridRef}>
                    {skillCategories.map((cat) => (
                        <div
                            key={cat.id}
                            className="skills__category glass-card"
                        >
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
};

export default memo(Skills);
