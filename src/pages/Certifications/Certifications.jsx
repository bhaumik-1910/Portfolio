import { useEffect, useRef, memo } from 'react';
import './Certifications.css';

const certificationsData = [
    {
        id: 1,
        title: "Internship Completion Certificate",
        issuer: "Vasant Software Solutions - Rajkot",
        date: "2024",
        link: "/Internship.pdf",
        color: "#3b82f6",
        icon: "🎓"
    },
    {
        id: 2,
        title: "Version Control: Git & GitHub",
        issuer: "LJ University - Coursera",
        date: "2025",
        link: "/Git&Github.pdf",
        color: "#4285f4",
        icon: "🛠️"
    },
    {
        id: 3,
        title: "Introduction to Generative AI",
        issuer: "LJ University - Coursera",
        date: "2026",
        link: "/Generative AI.pdf",
        color: "#0056D2",
        icon: "🤖"
    },
];

const Certifications = () => {
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
        <section className="section certifications" id="certifications" ref={sectionRef}>
            <div className="section-inner">
                {/* Header */}
                <div className="certifications__header animate-on-scroll">
                    <span className="section-label">Achievements</span>
                    <h2 className="section-title">
                        Certifications & <span className="gradient-text">Awards</span>
                    </h2>
                    <p className="section-subtitle">
                        A collection of professional certifications and academic honors that validate my expertise.
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="certifications__grid">
                    {certificationsData.map((cert, idx) => (
                        <div
                            key={cert.id}
                            className={`certification__card glass-card animate-on-scroll animate-delay-${idx + 1}`}
                        >
                            <div className="certification__icon-wrapper">
                                <div
                                    className="certification__icon"
                                    style={{
                                        background: `${cert.color}20`,
                                        color: cert.color,
                                        borderColor: `${cert.color}40`
                                    }}
                                >
                                    {cert.icon}
                                </div>
                                <div className="certification__badge">Official</div>
                            </div>

                            <div className="certification__content">
                                <h3 className="certification__title">{cert.title}</h3>
                                <p className="certification__issuer">{cert.issuer}</p>
                                <div className="certification__footer">
                                    <span className="certification__date">{cert.date}</span>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="certification__link"
                                        style={{ color: cert.color }}
                                    >
                                        View Credential
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                            <polyline points="15 3 21 3 21 9" />
                                            <line x1="10" y1="14" x2="21" y2="3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Accent Background */}
                            <div
                                className="certification__accent"
                                style={{ background: `radial-gradient(circle at top right, ${cert.color}15, transparent)` }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default memo(Certifications);
