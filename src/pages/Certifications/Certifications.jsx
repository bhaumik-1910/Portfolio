import { memo } from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const certificationsData = [
    {
        id: 1,
        title: "Internship Completion Certificate",
        issuer: "Vasant Software Solutions - Rajkot",
        date: "2024",
        link: "/Internship.pdf",
        color: "#2563eb",
        icon: "🎓"
    },
    {
        id: 2,
        title: "Version Control: Git & GitHub",
        issuer: "LJ University - Coursera",
        date: "2025",
        link: "/Git&Github.pdf",
        color: "#0891b2",
        icon: "🛠️"
    },
    {
        id: 3,
        title: "Introduction to Generative AI",
        issuer: "LJ University - Coursera",
        date: "2026",
        link: "/Generative AI.pdf",
        color: "#7c3aed",
        icon: "🤖"
    },
    {
        id: 4,
        title: "LJ Innovation Village 2026 – Certificate of Participation",
        issuer: "LJ University",
        date: "2026",
        link: "/Innovation.pdf",
        color: "#f59e0b",
        icon: "🏆"
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1.0],
        },
    },
};

const Certifications = () => {
    return (
        <section className="section certifications" id="certifications">
            <div className="section-inner">
                {/* Header */}
                <motion.div
                    className="certifications__header"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
                >
                    <span className="section-label">Achievements</span>
                    <h2 className="section-title">
                        Certifications & <span className="gradient-text">Awards</span>
                    </h2>
                    <p className="section-subtitle">
                        A collection of professional certifications and academic honors that validate my expertise.
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <motion.div
                    className="certifications__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {certificationsData.map((cert) => (
                        <motion.div
                            key={cert.id}
                            className="certification__card glass-card"
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.25 } }}
                        >
                            <div className="certification__icon-wrapper">
                                <motion.div
                                    className="certification__icon"
                                    style={{
                                        background: `${cert.color}15`,
                                        color: cert.color,
                                        borderColor: `${cert.color}30`
                                    }}
                                    whileHover={{ rotateY: 180 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {cert.icon}
                                </motion.div>
                                <div className="certification__badge">Official</div>
                            </div>

                            <div className="certification__content">
                                <h3 className="certification__title">{cert.title}</h3>
                                <p className="certification__issuer">{cert.issuer}</p>
                                <div className="certification__footer">
                                    <span className="certification__date">{cert.date}</span>
                                    <motion.a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="certification__link"
                                        style={{ color: cert.color }}
                                        whileHover={{ x: 4 }}
                                    >
                                        View Credential
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                    </motion.a>
                                </div>
                            </div>

                            {/* Accent Background */}
                            <div
                                className="certification__accent"
                                style={{ background: `radial-gradient(circle at top right, ${cert.color}15, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default memo(Certifications);
