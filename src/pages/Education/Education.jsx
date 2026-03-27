import { useRef, memo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Education.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

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
    const gridRef = useRef(null);

    useGSAP(() => {
        // Header Reveal
        gsap.from('.education__header > *', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.education__header',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });

        // Cards reveal - individual triggers for smoother scrolling connection
        const cardElements = gsap.utils.toArray('.education__card');
        cardElements.forEach((card, idx) => {
            gsap.fromTo(card,
                {
                    opacity: 0,
                    y: 80,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 92%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Hover effect for accent line
        const cards = gsap.utils.toArray('.education__card');
        cards.forEach((card) => {
            const line = card.querySelector('.education__accent-line');
            card.addEventListener('mouseenter', () => {
                gsap.to(line, { scaleX: 1.1, duration: 0.4, ease: 'power2.out', opacity: 1 });
                gsap.to(card, { y: -5, duration: 0.3, ease: 'power2.out' });
            });
            card.addEventListener('mouseleave', () => {
                gsap.to(line, { scaleX: 1, duration: 0.4, ease: 'power2.out', opacity: 0.5 });
                gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
            });
        });

    }, { scope: sectionRef });

    return (
        <section className="section education" id="education" ref={sectionRef}>
            <div className="section-inner">
                {/* Header */}
                <div className="education__header">
                    <span className="section-label">Academic Background</span>
                    <h2 className="section-title">
                        My <span className="gradient-text">Education</span>
                    </h2>
                    <p className="section-subtitle">
                        A journey of continuous learning and academic excellence.
                    </p>
                </div>

                {/* Education Grid */}
                <div className="education__grid" ref={gridRef}>
                    {educationData.map((edu) => (
                        <div
                            key={edu.id}
                            className="education__card glass-card"
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
