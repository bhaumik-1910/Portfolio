import { useEffect, useRef, memo, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.css';

// Register GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

// Static data moved outside to prevent re-creation
const TECH_STACK = ['React', 'Node.js', 'Next.js', 'MongoDB', 'JavaScript', 'AWS'];
const HERO_STATS = [
    { value: '1.5+', label: 'Years Experience' },
    { value: '2+', label: 'Projects Completed' },
    { value: '2', label: 'Happy Clients' },
    { value: '100%', label: 'Client Satisfaction' },
];

const Hero = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const badgeRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const techPillsRef = useRef(null);
    const actionsRef = useRef(null);
    const statsRef = useRef(null);
    const orbsRef = useRef([]);

    // Background Canvas Particles
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: false });
        let animationId;
        let particles = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const particleCount = window.innerWidth < 768 ? 30 : 60;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 2 + 0.5,
                opacity: Math.random() * 0.3 + 0.1,
                color: Math.random() > 0.5 ? '59, 130, 246' : '139, 92, 246',
            });
        }

        const draw = () => {
            ctx.fillStyle = '#050b18';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            if (window.innerWidth >= 768) {
                particles.forEach((p, i) => {
                    particles.slice(i + 1).forEach((p2) => {
                        const dx = p.x - p2.x;
                        const dy = p.y - p2.y;
                        const dist = dx * dx + dy * dy;
                        if (dist < 14400) {
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

            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
                ctx.fill();
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

    // GSAP Entrance & Scroll Animations
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

        // Initial hidden state set via GSAP to avoid flashes
        gsap.set([
            badgeRef.current,
            titleRef.current,
            subtitleRef.current,
            '.hero__pill',
            '.hero__btn',
            '.hero__stat',
            '.hero__scroll-indicator'
        ], { opacity: 0, y: 30 });

        // Animation Sequence
        tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6, delay: 0.2 })
            .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')
            .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.5')
            .to('.hero__pill', { opacity: 1, y: 0, stagger: 0.05, duration: 0.5 }, '-=0.4')
            .to('.hero__btn', { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, '-=0.4')
            .to('.hero__stat', { opacity: 1, y: 0, stagger: 0.05, duration: 0.5 }, '-=0.4')
            .to('.hero__scroll-indicator', { opacity: 1, y: 0, duration: 0.6 }, '-=0.3');

        // Orb Parallax Effect
        orbsRef.current.forEach((orb, index) => {
            gsap.to(orb, {
                y: (index + 1) * 40,
                x: (index % 2 === 0 ? 30 : -30),
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1.5,
                }
            });
        });

        // Stats Floating Animation
        gsap.to('.hero__stat', {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            stagger: {
                amount: 1,
                from: 'random'
            }
        });
    }, { scope: containerRef });

    const handleScroll = useCallback((href) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <section className="hero" id="home" ref={containerRef}>
            <canvas ref={canvasRef} className="hero__canvas" aria-hidden="true" />

            {/* Gradient Orbs with GSAP Parallax */}
            <div ref={el => orbsRef.current[0] = el} className="hero__orb hero__orb--1" aria-hidden="true" />
            <div ref={el => orbsRef.current[1] = el} className="hero__orb hero__orb--2" aria-hidden="true" />
            <div ref={el => orbsRef.current[2] = el} className="hero__orb hero__orb--3" aria-hidden="true" />

            <div className="hero__grid" aria-hidden="true" />

            <div className="hero__content">
                <div ref={badgeRef} className="hero__badge">
                    <span className="hero__badge-dot" />
                    <span>Available for Freelance & Full-time Roles</span>
                </div>

                <h1 ref={titleRef} className="hero__title">
                    Building{' '}
                    <span className="gradient-text">Scalable</span>
                    {' '}&amp;{' '}
                    <span className="gradient-text">Intelligent</span>
                    <br />
                    Web Applications
                </h1>

                <div ref={subtitleRef} className="hero__subtitle-wrapper">
                    <p className="hero__subtitle">
                        Full Stack Developer crafting{' '}
                        <span className="hero__highlight">high-performance</span>,{' '}
                        <span className="hero__highlight">user-centric</span> digital experiences
                        with modern technologies and clean architecture.
                    </p>
                </div>

                <div ref={techPillsRef} className="hero__tech-pills">
                    {TECH_STACK.map((tech) => (
                        <span key={tech} className="hero__pill">{tech}</span>
                    ))}
                </div>

                <div ref={actionsRef} className="hero__actions">
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

                <div ref={statsRef} className="hero__stats">
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

