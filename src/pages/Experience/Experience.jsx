import { useEffect, useRef, memo } from 'react';
import './Experience.css';

const experiencesData = [
    {
        id: 1,
        role: 'Full Stack Developer (React & MERN Stack)',
        company: 'Vasant Software Solutions',
        period: 'June 2023 - December 2024',
        type: 'Part-time',
        location: 'Rajkot, India',
        description: 'Developed and maintained scalable enterprise-grade web applications using React.js, Node.js, Express.js, and MongoDB. Designed RESTful APIs and optimized database queries to enhance application performance and user experience. Collaborated with cross-functional teams to deliver high-quality software solutions.',
        achievements: [
            'Developed dynamic and responsive UI components using React.js, Redux, and Material UI',
            'Built secure REST APIs with Node.js & Express and integrated MongoDB for efficient data management',
            'Implemented JWT-based authentication and role-based access control',
            'Optimized application performance reducing load time by 50%',
            'Deployed applications on Vercel and Render with CI/CD automation',
        ],
        color: '#3b82f6',
        icon: '💼',
    },
    {
        id: 2,
        role: 'Freelance Web Developer (React & MERN Stack)',
        company: 'Self-Employed',
        period: 'Aug 2025 – Present',
        type: 'Freelance',
        location: 'Ahmedabad, India',
        description: 'Providing end-to-end web development services using React.js and the MERN stack. Handling complete project lifecycle including requirement analysis, UI/UX development, backend architecture, deployment, and post-launch support for clients and institutions.',
        achievements: [
            'Successfully delivered a full-stack business website for a client with custom admin dashboard and secure authentication system',
            'Currently developing NAAC Documentation Management System for LJ University with role-based access and document workflow automation',
            'Integrated REST APIs, JWT authentication, and MongoDB database optimization for scalable performance',
            'Ensured 99.9% uptime through deployment on Vercel & Render with CI/CD configuration',
        ],
        color: '#10b981',
        icon: '🌐',
    }

];

const Experience = () => {
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
            { threshold: 0.05 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="section experience" id="experience" ref={sectionRef}>
            <div className="section-inner">
                <div className="experience__header animate-on-scroll">
                    <span className="section-label">My Journey</span>
                    <h2 className="section-title">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="section-subtitle">
                        A timeline of my professional growth, from internships to leading full-stack projects.
                    </p>
                </div>

                <div className="timeline">
                    <div className="timeline__line" />

                    {experiencesData.map((exp, idx) => (
                        <div
                            key={exp.id}
                            className={`timeline__item animate-on-scroll animate-delay-${idx + 1}`}
                            id={`experience-${exp.id}`}
                        >
                            <div
                                className="timeline__dot"
                                style={{ background: exp.color, boxShadow: `0 0 20px ${exp.color}60` }}
                            >
                                <span>{exp.icon}</span>
                            </div>

                            <div className="timeline__card glass-card">
                                <div className="timeline__card-header">
                                    <div>
                                        <h3 className="timeline__role">{exp.role}</h3>
                                        <div className="timeline__company" style={{ color: exp.color }}>
                                            {exp.company}
                                        </div>
                                    </div>
                                    <div className="timeline__meta">
                                        <span
                                            className="timeline__type"
                                            style={{
                                                color: exp.color,
                                                background: `${exp.color}15`,
                                                borderColor: `${exp.color}30`,
                                            }}
                                        >
                                            {exp.type}
                                        </span>
                                        <div className="timeline__period">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                <line x1="16" y1="2" x2="16" y2="6" />
                                                <line x1="8" y1="2" x2="8" y2="6" />
                                                <line x1="3" y1="10" x2="21" y2="10" />
                                            </svg>
                                            {exp.period}
                                        </div>
                                        <div className="timeline__location">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>

                                <p className="timeline__desc">{exp.description}</p>

                                <ul className="timeline__achievements">
                                    {exp.achievements.map((ach, i) => (
                                        <li key={i} className="timeline__achievement">
                                            <span
                                                className="timeline__achievement-dot"
                                                style={{ background: exp.color }}
                                            />
                                            {ach}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default memo(Experience);
