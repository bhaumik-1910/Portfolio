import { useRef, memo, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const skillCategories = [
    {
        id: 'backend',
        title: 'Backend',
        skills: [
            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
            { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            { name: 'ASP.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
            { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
            { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
            // { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
            // { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            // { name: '.NET Core', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
        ],
    },
    {
        id: 'web',
        title: 'Web',
        skills: [
            { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
            { name: 'Vite.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
            { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
            // { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'Tailwind', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
            { name: 'Shadcn/UI', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/shadcnui.svg' },
            { name: 'Motion UI', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/framer.svg' },
            { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
            { name: 'Sass', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
            { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        ],
    },
    {
        id: 'mobile',
        title: 'Mobile',
        skills: [
            { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
            { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            // { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
            // { name: 'iOS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
        ],
    },
    {
        id: 'devops',
        title: 'DevOps',
        skills: [
            // { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
            // { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        ],
    },
    {
        id: 'others',
        title: 'Others',
        skills: [
            { name: 'PayPal', icon: 'https://www.vectorlogo.zone/logos/paypal/paypal-icon.svg' },
            { name: 'Stripe', icon: 'https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg' },
            { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
            { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
            { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' }
            // { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
            // { name: 'Socket.io', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },
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
    const contentRef = useRef(null);
    const [activeTab, setActiveTab] = useState('backend');

    const activeSkills = skillCategories.find(cat => cat.id === activeTab)?.skills || [];

    useGSAP(() => {
        // Header Reveal
        gsap.from('.skills__header > *', {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.1,
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

        // Main Layout Reveal
        gsap.from('.skills__layout', {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.skills__layout',
                start: 'top 80%',
            }
        });
    }, { scope: sectionRef });

    // Handle tab change with animation
    const handleTabChange = (id) => {
        if (id === activeTab) return;

        gsap.to(contentRef.current, {
            opacity: 0,
            x: -20,
            duration: 0.3,
            onComplete: () => {
                setActiveTab(id);
                gsap.fromTo(contentRef.current,
                    { opacity: 0, x: 20 },
                    { opacity: 1, x: 0, duration: 0.4, ease: 'power2.out' }
                );
            }
        });
    };

    return (
        <section className="section skills" id="skills" ref={sectionRef}>
            <div className="section-inner">
                <div className="skills__header">
                    <span className="section-label">Expertise Deck</span>
                    <h2 className="section-title">
                        My Technical <span className="gradient-text">Stack</span>
                    </h2>
                    <p className="section-subtitle">
                        A curated selection of technologies and tools I use to build industrial-grade applications.
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

                <div className="skills__layout glass-card">
                    {/* Sidebar Tabs */}
                    <div className="skills__sidebar">
                        {skillCategories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`skills__tab ${activeTab === cat.id ? 'active' : ''}`}
                                onClick={() => handleTabChange(cat.id)}
                            >
                                <div className="skills__tab-indicator">
                                    {activeTab === cat.id ? (
                                        <svg viewBox="0 0 24 24" fill="none" className="check-icon">
                                            <circle cx="12" cy="12" r="12" fill="#f59e0b" />
                                            <path d="M7 12l3 3 7-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    ) : (
                                        <div className="circle-outline" />
                                    )}
                                </div>
                                <span className="skills__tab-label">{cat.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Skill Logos Grid */}
                    <div className="skills__content" ref={contentRef}>
                        <div className="skills__logo-grid">
                            {/* Force minimum 8 slots (4x2 grid) for every category to look consistent like Backend */}
                            {[...Array(Math.max(8, Math.ceil(activeSkills.length / 4) * 4))].map((_, idx) => {
                                const skill = activeSkills[idx];
                                return (
                                    <div key={skill?.name || `empty-${idx}`} className="skills__logo-item">
                                        {skill && (
                                            <div className="skills__logo-wrapper">
                                                <img src={skill.icon} alt={skill.name} className="skills__logo-img" />
                                                <span className="skills__logo-name">{skill.name}</span>
                                            </div>
                                        )}
                                        <div className="grid-line horizontal" />
                                        <div className="grid-line vertical" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Skills);
