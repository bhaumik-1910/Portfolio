import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const TECH_STACK = ['React', 'Node.js', 'Next.js', 'MongoDB', 'JavaScript', 'AWS'];
const HERO_STATS = [
    { value: '1.5+', label: 'Years Experience' },
    { value: '2+', label: 'Projects Completed' },
    { value: '2', label: 'Happy Clients' },
    { value: '100%', label: 'Client Satisfaction' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1.0],
        },
    },
};

const Hero = () => {
    const handleScroll = useCallback((href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <section className="hero" id="home">
            {/* Ambient Background Gradient Orbs */}
            <div className="hero__orb hero__orb--1" aria-hidden="true" />
            <div className="hero__orb hero__orb--2" aria-hidden="true" />
            <div className="hero__orb hero__orb--3" aria-hidden="true" />
            <div className="hero__grid" aria-hidden="true" />

            <motion.div
                className="hero__content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="hero__badge">
                    <span className="hero__badge-dot" />
                    <span>Available for Freelance & Full-time Roles</span>
                </motion.div>

                <motion.h1 variants={itemVariants} className="hero__title">
                    Building{' '}
                    <span className="gradient-text">Scalable</span>
                    {' '}&amp;{' '}
                    <span className="gradient-text">Intelligent</span>
                    <br />
                    Web Applications
                </motion.h1>

                <motion.div variants={itemVariants} className="hero__subtitle-wrapper">
                    <p className="hero__subtitle">
                        Full Stack Developer crafting{' '}
                        <span className="hero__highlight">high-performance</span>,{' '}
                        <span className="hero__highlight">user-centric</span> digital experiences
                        with modern technologies and clean architecture.
                    </p>
                </motion.div>

                <motion.div variants={itemVariants} className="hero__tech-pills">
                    {TECH_STACK.map((tech) => (
                        <motion.span
                            key={tech}
                            className="hero__pill"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>

                <motion.div variants={itemVariants} className="hero__actions">
                    <motion.button
                        className="btn btn-primary hero__btn"
                        onClick={() => handleScroll('#projects')}
                        id="hero-view-projects-btn"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="7" height="7" rx="1" />
                            <rect x="14" y="3" width="7" height="7" rx="1" />
                            <rect x="14" y="14" width="7" height="7" rx="1" />
                            <rect x="3" y="14" width="7" height="7" rx="1" />
                        </svg>
                        View Projects
                    </motion.button>
                    <motion.button
                        className="btn btn-outline hero__btn"
                        onClick={() => handleScroll('#contact')}
                        id="hero-contact-btn"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        Contact Me
                    </motion.button>
                </motion.div>

                <motion.div variants={itemVariants} className="hero__stats">
                    {HERO_STATS.map((stat) => (
                        <motion.div
                            key={stat.label}
                            className="hero__stat"
                            whileHover={{ y: -4 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <span className="hero__stat-value gradient-text">{stat.value}</span>
                            <span className="hero__stat-label">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default memo(Hero);
