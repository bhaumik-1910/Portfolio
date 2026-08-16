import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GitHubStatsCard from '../../component/GitHubStatsCard/GitHubStatsCard';
import './Skills.css';

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
        ],
    },
    {
        id: 'devops',
        title: 'DevOps',
        skills: [
            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
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
        ],
    },
];

const techIcons = [
    { name: 'HTML5', color: '#e34c26', symbol: '5' },
    { name: 'CSS3', color: '#264de4', symbol: 'CSS' },
    { name: 'Sass', color: '#cc6699', symbol: 'S' },
    { name: 'JavaScript', color: '#f7df1e', symbol: 'JS' },
    { name: 'React', color: '#61dafb', symbol: '⚛' },
    { name: 'Next.js', color: '#0f172a', symbol: '▲' },
    { name: 'TypeScript', color: '#3178c6', symbol: 'TS' },
    { name: 'Tailwind CSS', color: '#06b6d4', symbol: '💨' },
    { name: 'Bootstrap', color: '#7952b3', symbol: 'B' },
    { name: 'MUI', color: '#007fff', symbol: 'M' },
    { name: 'Shadcn/UI', color: '#0f172a', symbol: 'S' },
    { name: 'Motion UI', color: '#ff0055', symbol: 'M' },
    { name: 'Node.js', color: '#68a063', symbol: '⬡' },
    { name: 'MongoDB', color: '#4db33d', symbol: '◉' },
];

const marqueeIcons = [...techIcons, ...techIcons];

const Skills = () => {
    const [activeTab, setActiveTab] = useState('backend');
    const activeSkills = skillCategories.find(cat => cat.id === activeTab)?.skills || [];

    return (
        <section className="section skills" id="skills">
            <div className="section-inner">
                {/* Header */}
                <motion.div
                    className="skills__header"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
                >
                    <span className="section-label">Expertise Deck</span>
                    <h2 className="section-title">
                        My Technical <span className="gradient-text">Stack</span>
                    </h2>
                    <p className="section-subtitle">
                        A curated selection of technologies and tools I use to build industrial-grade applications.
                    </p>
                </motion.div>

                {/* Marquee */}
                <motion.div
                    className="skills__marquee"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                >
                    <div className="skills__marquee-track">
                        {marqueeIcons.map((tech, idx) => (
                            <motion.div
                                key={`${tech.name}-${idx}`}
                                className="skills__tech-icon glass-card"
                                title={tech.name}
                                whileHover={{ y: -4, scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 400 }}
                            >
                                <span className="skills__tech-symbol" style={{ color: tech.color }}>
                                    {tech.symbol}
                                </span>
                                <span className="skills__tech-name">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Main Layout */}
                <motion.div
                    className="skills__layout glass-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                >
                    {/* Sidebar Tabs */}
                    <div className="skills__sidebar">
                        {skillCategories.map((cat) => (
                            <motion.button
                                key={cat.id}
                                className={`skills__tab ${activeTab === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(cat.id)}
                                whileHover={{ x: 3 }}
                                whileTap={{ scale: 0.98 }}
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
                            </motion.button>
                        ))}
                    </div>

                    {/* Skill Logos Grid with AnimatePresence */}
                    <div className="skills__content">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                className="skills__logo-grid"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                            >
                                {[...Array(Math.max(8, Math.ceil(activeSkills.length / 4) * 4))].map((_, idx) => {
                                    const skill = activeSkills[idx];
                                    return (
                                        <motion.div
                                            key={skill?.name || `empty-${idx}`}
                                            className="skills__logo-item"
                                            whileHover={{ scale: 1.04 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                        >
                                            {skill && (
                                                <div className="skills__logo-wrapper">
                                                    <img src={skill.icon} alt={skill.name} className="skills__logo-img" />
                                                    <span className="skills__logo-name">{skill.name}</span>
                                                </div>
                                            )}
                                            <div className="grid-line horizontal" />
                                            <div className="grid-line vertical" />
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>

                {/* GitHub Stats Card */}
                <motion.div
                    className="skills__github-stats"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                >
                    <GitHubStatsCard />
                </motion.div>
            </div>
        </section>
    );
};

export default memo(Skills);
