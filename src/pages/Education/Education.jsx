import { memo } from 'react';
import { motion } from 'framer-motion';
import './Education.css';

const educationData = [
    {
        id: 1,
        degree: "Master of Science in Information Technology",
        institution: "LJ University",
        location: "Ahmedabad, Gujarat",
        year: "2025 — 2027",
        status: "PURSUING",
        description: "Focusing on advanced computing paradigms, specializing in Cloud Architecture, AI systems, and Enterprise IT Strategy.",
        highlights: [
            "Cloud Computing",
            "Artificial Intelligence",
            "Software Architecture",
            "Strategic IT Design"
        ],
        color: '#f59e0b',
        icon: '🚀'
    },
    {
        id: 2,
        degree: "Bachelor of Science in Information Technology",
        institution: "Saurashtra University",
        location: "Rajkot, Gujarat",
        year: "2022 — 2025",
        status: "COMPLETED",
        description: "Specialized in full-stack development and database management, with a final year project focused on scalable web applications.",
        highlights: [
            "8.5 CGPA (Overall)",
            "Web Technologies",
            "Database Systems",
            "Software Engineering"
        ],
        color: '#2563eb',
        icon: '🎓'
    },
    {
        id: 3,
        degree: "Higher Secondary Education (HSC)",
        institution: "Shree Vidhya Aarambh",
        location: "Panchvada, Gujarat",
        year: "2020 — 2022",
        status: "COMPLETED",
        stream: "COMMERCE STREAM",
        description: "Academic focus on business logic, accountancy, and computer applications, building a strong analytical foundation.",
        highlights: [
            "79.14%",
            "Business Mathematics",
            "Accountancy",
            "Computer Applications"
        ],
        color: '#7c3aed',
        icon: '🏫'
    },
    {
        id: 4,
        degree: "Secondary School Education (SSC)",
        institution: "Shree M.K.M Vasoya Patel Vidhya Mandir",
        location: "Dhoraji, Gujarat",
        year: "2019 — 2020",
        status: "COMPLETED",
        description: "Foundational education with a focus on Mathematics and Science, achieving strong academic performance in core subjects.",
        highlights: [
            "69.00%",
            "Mathematics",
            "Science",
            "Language Studies"
        ],
        color: '#059669',
        icon: '📖'
    }
];

const Education = () => {
    return (
        <section className="section education" id="education">
            <div className="section-inner">
                {/* Header */}
                <motion.div
                    className="education__header"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
                >
                    <span className="section-label">Academic Background</span>
                    <h2 className="section-title">
                        Education & <span className="gradient-text">Qualifications</span>
                    </h2>
                    <p className="section-subtitle">
                        My formal academic background in Information Technology and Computer Science.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="education__grid">
                    {educationData.map((edu, idx) => (
                        <motion.div
                            key={edu.id}
                            className="education__card glass-card"
                            id={`education-${edu.id}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{
                                duration: 0.55,
                                delay: (idx % 2) * 0.1,
                                ease: [0.25, 0.1, 0.25, 1.0],
                            }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="education__card-header">
                                <div
                                    className="education__icon"
                                    style={{
                                        background: `${edu.color}15`,
                                        borderColor: `${edu.color}30`,
                                    }}
                                >
                                    <span>{edu.icon}</span>
                                </div>
                                <div className="education__meta">
                                    <span className="education__year">{edu.year}</span>
                                    <span
                                        className="education__status"
                                        style={{
                                            color: edu.color,
                                            background: `${edu.color}15`,
                                            borderColor: `${edu.color}30`,
                                        }}
                                    >
                                        {edu.status}
                                    </span>
                                </div>
                            </div>

                            <div className="education__content">
                                <h3 className="education__degree">{edu.degree}</h3>
                                <div className="education__info">
                                    <div className="education__institution">{edu.institution}</div>
                                    <div className="education__location-tag">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        {edu.location}
                                    </div>
                                </div>

                                {edu.stream && (
                                    <span className="education__stream">{edu.stream}</span>
                                )}

                                <p className="education__desc">{edu.description}</p>

                                <div className="education__highlights">
                                    {edu.highlights.map((h, i) => (
                                        <span
                                            key={i}
                                            className="education__highlight-tag"
                                        >
                                            {h}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div
                                className="education__accent-line"
                                style={{ background: edu.color }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default memo(Education);
