import { useEffect, useRef, memo } from 'react';
import './Education.css';

const educationData = [
    {
        id: 1,
        degree: "Master of Science in Information Technology",
        institution: "LJ University",
        location: "Ahmedabad, Gujarat",
        year: "2025 – 2027",
        status: "Pursuing",
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
        year: "2022 – 2025",
        status: "Completed",
        description: "Specialized in full-stack development and database management, with a final year project focused on scalable web applications.",
        highlights: [
            "8.5 CGPA (Overall)",
            "Web Technologies",
            "Database Systems",
            "Software Engineering"
        ],
        color: '#3b82f6',
        icon: '🎓'
    },
    {
        id: 3,
        degree: "Higher Secondary Education (HSC)",
        institution: "Shree Vidhya Aarambh",
        location: "Panchvada, Gujarat",
        year: "2020 – 2022",
        status: "Completed",
        stream: "Commerce Stream",
        description: "Academic focus on business logic, accountancy, and computer applications, building a strong analytical foundation.",
        highlights: [
            "79.14%",
            "Business Mathematics",
            "Accountancy",
            "Computer Applications"
        ],
        color: '#8b5cf6',
        icon: '🏫'
    },
    {
        id: 4,
        degree: "Secondary School Education (SSC)",
        institution: "Shree M.K.M Vasoya Patel Vidhya Mandir",
        location: "Dhoraji, Gujarat",
        year: "2019 – 2020",
        status: "Completed",
        description: "Foundational education with a focus on Mathematics and Science, achieving strong academic performance in core subjects.",
        highlights: [
            "69.00%",
            "Mathematics",
            "Science",
            "Language Studies"
        ],
        color: '#10b981',
        icon: '📖'
    }
];

const Education = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => {
                            el.classList.add('visible');
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
        <section className="section education" id="education" ref={sectionRef}>
            <div className="section-inner">
                {/* Header */}
                <div className="education__header animate-on-scroll">
                    <span className="section-label">Academic Background</span>
                    <h2 className="section-title">
                        My <span className="gradient-text">Education</span>
                    </h2>
                    <p className="section-subtitle">
                        A journey of continuous learning and academic excellence.
                    </p>
                </div>

                {/* Education Grid */}
                <div className="education__grid">
                    {educationData.map((edu, idx) => (
                        <div
                            key={edu.id}
                            className={`education__card glass-card animate-on-scroll animate-delay-${idx + 1}`}
                        >
                            <div className="education__card-header">
                                <div
                                    className="education__icon"
                                    style={{
                                        background: `${edu.color}20`,
                                        color: edu.color,
                                        borderColor: `${edu.color}40`
                                    }}
                                >
                                    {edu.icon}
                                </div>
                                <div className="education__meta">
                                    <span className="education__year">{edu.year}</span>
                                    <span
                                        className="education__status"
                                        style={{
                                            background: `${edu.color}15`,
                                            color: edu.color,
                                            borderColor: `${edu.color}30`
                                        }}
                                    >
                                        {edu.status}
                                    </span>
                                </div>
                            </div>

                            <div className="education__content">
                                <h3 className="education__degree">{edu.degree}</h3>
                                <div className="education__info">
                                    <p className="education__institution">{edu.institution}</p>
                                    <span className="education__location-tag">
                                        📍 {edu.location}
                                    </span>
                                </div>
                                {edu.stream && <p className="education__stream">{edu.stream}</p>}
                                <p className="education__desc">{edu.description}</p>

                                <div className="education__highlights">
                                    {edu.highlights.map((h, i) => (
                                        <span key={i} className="education__highlight-tag">
                                            {h}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative line */}
                            <div
                                className="education__accent-line"
                                style={{ background: `linear-gradient(90deg, ${edu.color}, transparent)` }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default memo(Education);
