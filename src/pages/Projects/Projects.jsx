import { memo } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

// Projects data array with enhanced styling properties
const projectsData = [
    {
        id: 1,
        title: 'NAAC Documentation Portal [LJKU]',
        description: 'An enterprise-grade academic document management ecosystem. Features role-based access, AI-powered document querying via MCP & Gemini AI, and Cloudinary-backed storage for high availability.',
        image: null,
        gradient: 'linear-gradient(135deg, #1e1b4b, #312e81)',
        accentColor: '#818cf8',
        tags: ['React', 'Node.js', 'MongoDB', 'AI (MCP)', 'Cloudinary'],
        liveUrl: 'https://production-lj-documentation.vercel.app/',
        githubUrl: '#',
        emoji: '🏫',
        isPrivate: true,
    },
    {
        id: 2,
        title: 'NEXTPOST',
        description: 'A comprehensive social media automation platform with multi-platform publishing (LinkedIn, Instagram, Reddit). Integrated with Stripe for subscriptions and Auth0 for secure enterprise authentication.',
        image: null,
        gradient: 'linear-gradient(135deg, #0f172a, #1e293b)',
        accentColor: '#3b82f6',
        tags: ['React', 'Redux', 'Stripe', 'Auth0', 'React Query'],
        liveUrl: 'https://nexpost-three.vercel.app/',
        githubUrl: '#',
        emoji: '🚀',
        isPrivate: true,
    },
    {
        id: 3,
        title: 'Odoo x KSV Hackathon 2026',
        description: 'A modern Procurement & Vendor Management ERP web application built for the Odoo x KSV Hackathon virtual round. Streamlines vendor onboarding, RFQ lifecycle tracking, smart quotation comparison matrix, and multi-level approval workflows.',
        image: null,
        gradient: 'linear-gradient(135deg, #581c87, #714b67)',
        accentColor: '#d946ef',
        tags: ['React', 'Vite', 'Node.js', 'Express', 'Tailwind CSS'],
        liveUrl: 'https://vendor-bridge-peach.vercel.app',
        githubUrl: 'https://github.com/bhaumik-1910/VendorBridge',
        emoji: '🏆',
        isVirtualRound: true,
        isQualified: true,
    },
    {
        id: 4,
        title: 'Odoo Hackathon 2026',
        description: 'EcoSphere: A state-of-the-art enterprise sustainability management platform designed to help organizations plan, monitor, and report their ESG footprints with a high-contrast glassmorphism interface, carbon emission loggers, and gamified CSR tracking.',
        image: null,
        gradient: 'linear-gradient(135deg, #14532d, #16a34a)',
        accentColor: '#22c55e',
        tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
        liveUrl: 'https://eco-sphere-esg-management-platform-brown.vercel.app',
        githubUrl: 'https://github.com/bhaumik-1910/EcoSphere-ESG-Management-Platform',
        emoji: '💻',
        isVirtualRound: true,
    },
    {
        id: 5,
        title: 'Land Measurement System',
        description: 'A smart web-based land measurement system that helps users calculate land area accurately using map-based inputs and real-time data visualization.',
        image: null,
        gradient: 'linear-gradient(135deg, #1e3a8a, #2563eb)',
        accentColor: '#3b82f6',
        tags: ['React', 'Node.js', 'MongoDB', 'Maps API', 'GeoLocation'],
        liveUrl: 'https://land-measurement-system-97nl.vercel.app/',
        githubUrl: 'https://github.com/bhaumik-1910/Land-Measurement-System',
        emoji: '📍',
    },
    {
        id: 6,
        title: 'Neurovia AI',
        description: "Users can generate and use their own AI API keys, allowing them to easily integrate AI into their own projects and build customized solutions.",
        image: null,
        gradient: 'linear-gradient(135deg, #042f2e, #0d9488)',
        accentColor: '#14b8a6',
        tags: ['React', 'Node.js', 'MongoDB', 'AI (MCP)', 'NLP'],
        liveUrl: 'https://neurovia-ai-psi.vercel.app/',
        githubUrl: 'https://github.com/bhaumik-1910/Neurovia_AI',
        emoji: '🇮🇳',
    },
    // {
    //     id: 7,
    //     title: 'Real-time Editor',
    //     description: 'A collaborative document editing platform that allows multiple users to edit documents simultaneously with real-time cursor tracking and version history.',
    //     image: null,
    //     gradient: 'linear-gradient(135deg, #064e3b, #065f46)',
    //     accentColor: '#10b981',
    //     tags: ['Socket.io', 'React', 'Node.js', 'Redis'],
    //     liveUrl: 'https://github.com/bhaumik-1910/Realtime-collaborative-document-editing-app-master',
    //     githubUrl: 'https://github.com/bhaumik-1910/Realtime-collaborative-document-editing-app-master',
    //     emoji: '📄',
    // },
];

const Projects = () => {
    return (
        <section className="section projects" id="projects">
            <div className="section-inner">
                {/* Header */}
                <motion.div
                    className="projects__header"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
                >
                    <span className="section-label">Selected Works</span>
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        A showcase of my production-level applications and experimental projects.
                        Note: Some enterprise projects are marked as private due to licensing.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="projects__grid">
                    {projectsData.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            className="project-card glass-card"
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.55,
                                delay: (idx % 3) * 0.1,
                                ease: [0.25, 0.1, 0.25, 1.0],
                            }}
                            whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        >
                            {/* Preview Area with Gradient & Emoji */}
                            <div
                                className="project-card__preview"
                                style={{ background: project.gradient }}
                            >
                                <div className="project-card__preview-grid" />
                                <motion.span
                                    className="project-card__preview-emoji"
                                    whileHover={{ scale: 1.15, rotate: -4 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {project.emoji}
                                </motion.span>

                                {/* Window Chrome Dots */}
                                <div className="project-card__chrome">
                                    <span style={{ background: '#ff5f56' }} />
                                    <span style={{ background: '#ffbd2e' }} />
                                    <span style={{ background: '#27c93f' }} />
                                </div>

                                {/* Badges */}
                                <div className="project-card__badges">
                                    {project.isPrivate && (
                                        <span className="project-card__private-badge">
                                            Private Repo
                                        </span>
                                    )}
                                    {project.isVirtualRound && (
                                        <span className="project-card__virtual-badge">
                                            Virtual Round
                                        </span>
                                    )}
                                    {project.isQualified && (
                                        <span className="project-card__qualified-badge">
                                            Qualified
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="project-card__content">
                                <h3 className="project-card__title">{project.title}</h3>
                                <p className="project-card__desc">{project.description}</p>

                                {/* Tags */}
                                <div className="project-card__tags">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="project-card__tag"
                                            style={{
                                                color: project.accentColor,
                                                borderColor: `${project.accentColor}30`,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Links */}
                                <div className="project-card__links">
                                    {project.liveUrl !== '#' ? (
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-card__link project-card__link--primary"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                            View Project
                                        </motion.a>
                                    ) : (
                                        <motion.button
                                            className="project-card__link project-card__link--primary"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                            View Project
                                        </motion.button>
                                    )}

                                    {project.githubUrl !== '#' && (
                                        <motion.a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-card__link project-card__link--secondary"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            GitHub
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Link */}
                <motion.div
                    className="projects__footer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.a
                        href="https://github.com/bhaumik-1910"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View More on GitHub
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default memo(Projects);
