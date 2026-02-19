import { useEffect, useRef, memo, useCallback } from 'react';
import './Hero.css';

// Static data moved outside to prevent re-creation
const TECH_STACK = ['React', 'Node.js', 'Next.js', 'MongoDB', 'JavaScript', 'AWS'];
const HERO_STATS = [
    { value: '1.5+', label: 'Years Experience' },
    { value: '2+', label: 'Projects Completed' },
    { value: '2', label: 'Happy Clients' },
    { value: '100%', label: 'Client Satisfaction' },
];

const Hero = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: false }); // Performance optimization
        let animationId;
        let particles = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Adaptive particle count for mobile
        const particleCount = window.innerWidth < 768 ? 40 : 80;

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.4 + 0.1,
                color: Math.random() > 0.5 ? '59, 130, 246' : '139, 92, 246',
            });
        }

        const draw = () => {
            // Faster clear
            ctx.fillStyle = '#050b18';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw connections (Limit connections on mobile)
            if (window.innerWidth >= 768) {
                particles.forEach((p, i) => {
                    particles.slice(i + 1).forEach((p2) => {
                        const dx = p.x - p2.x;
                        const dy = p.y - p2.y;
                        const dist = dx * dx + dy * dy; // Avoid sqrt for distance check
                        if (dist < 14400) { // 120 * 120
                            ctx.beginPath();
                            ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - Math.sqrt(dist) / 120)})`;
                            ctx.lineWidth = 0.5;
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(p2.x, p2.y);
                            ctx.stroke();
                        }
                    });
                });
            }

            // Draw particles
            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
                ctx.fill();

                // Move
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            });

            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    const handleScroll = useCallback((href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <section className="hero" id="home">
            <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />

            {/* Gradient Orbs with hardware acceleration */}
            <div className="hero__orb hero__orb--1" aria-hidden="true" />
            <div className="hero__orb hero__orb--2" aria-hidden="true" />
            <div className="hero__orb hero__orb--3" aria-hidden="true" />

            <div className="hero__grid" aria-hidden="true" />

            <div className="hero__content">
                <div className="hero__badge">
                    <span className="hero__badge-dot" />
                    <span>Available for Freelance & Full-time Roles</span>
                </div>

                <h1 className="hero__title">
                    Building{' '}
                    <span className="gradient-text">Scalable</span>
                    {' '}&amp;{' '}
                    <span className="gradient-text">Intelligent</span>
                    <br />
                    Web Applications
                </h1>

                <div className="hero__subtitle-wrapper">
                    <p className="hero__subtitle">
                        Full Stack Developer crafting{' '}
                        <span className="hero__highlight">high-performance</span>,{' '}
                        <span className="hero__highlight">user-centric</span> digital experiences
                        with modern technologies and clean architecture.
                    </p>
                </div>

                <div className="hero__tech-pills">
                    {TECH_STACK.map((tech) => (
                        <span key={tech} className="hero__pill">{tech}</span>
                    ))}
                </div>

                <div className="hero__actions">
                    <button
                        className="btn btn-primary hero__btn"
                        onClick={() => handleScroll('#projects')}
                        id="hero-view-projects-btn"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="7" height="7" rx="1" />
                            <rect x="14" y="3" width="7" height="7" rx="1" />
                            <rect x="14" y="14" width="7" height="7" rx="1" />
                            <rect x="3" y="14" width="7" height="7" rx="1" />
                        </svg>
                        View Projects
                    </button>
                    <button
                        className="btn btn-outline hero__btn"
                        onClick={() => handleScroll('#contact')}
                        id="hero-contact-btn"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        Contact Me
                    </button>
                </div>

                <div className="hero__stats">
                    {HERO_STATS.map((stat) => (
                        <div key={stat.label} className="hero__stat">
                            <span className="hero__stat-value gradient-text">{stat.value}</span>
                            <span className="hero__stat-label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="hero__scroll-indicator">
                <div className="hero__scroll-mouse">
                    <div className="hero__scroll-wheel" />
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
};

export default memo(Hero);
