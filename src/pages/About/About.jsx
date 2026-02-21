import { useRef, memo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

const highlights = [
    { icon: '🚀', label: 'Full Stack', desc: 'End-to-end development' },
    { icon: '🧠', label: 'AI Integration', desc: 'ML & AI powered apps' },
    { icon: '⚡', label: 'Performance', desc: 'Optimized & scalable' },
    { icon: '🎨', label: 'UI/UX', desc: 'Beautiful interfaces' },
];

const About = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        // Image Side Animation
        gsap.from(imageRef.current, {
            opacity: 0,
            x: -50,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: imageRef.current,
                start: 'top 80%',
            }
        });

        // Rings continuous rotation
        gsap.to('.about__ring', {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: 'none'
        });

        // Content Side Reveal
        const contentElements = contentRef.current.children;
        gsap.from(contentElements, {
            opacity: 0,
            x: 50,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: contentRef.current,
                start: 'top 80%',
            }
        });

        // Highlights Stagger
        gsap.from('.about__highlight-card', {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: '.about__highlights',
                start: 'top 90%',
            }
        });

    }, { scope: sectionRef });

    return (
        <section className="section about" id="about" ref={sectionRef}>
            <div className="section-inner">
                <div className="about__grid">
                    {/* Left - Image */}
                    <div className="about__image-col" ref={imageRef}>
                        <div className="about__image-wrapper">
                            <div className="about__ring about__ring--1" />
                            <div className="about__ring about__ring--2" />
                            <div className="about__ring about__ring--3" />

                            <div className="about__avatar">
                                <div className="about__avatar-inner">
                                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="about__avatar-svg">
                                        <circle cx="100" cy="80" r="45" fill="url(#avatarGrad1)" opacity="0.9" />
                                        <ellipse cx="100" cy="175" rx="70" ry="45" fill="url(#avatarGrad2)" opacity="0.7" />
                                        <defs>
                                            <radialGradient id="avatarGrad1" cx="50%" cy="50%" r="50%">
                                                <stop offset="0%" stopColor="#60a5fa" />
                                                <stop offset="100%" stopColor="#8b5cf6" />
                                            </radialGradient>
                                            <radialGradient id="avatarGrad2" cx="50%" cy="50%" r="50%">
                                                <stop offset="0%" stopColor="#3b82f6" />
                                                <stop offset="100%" stopColor="#6d28d9" />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                    <div className="about__avatar-initials">BK</div>
                                </div>
                            </div>

                            <div className="about__badge about__badge--1">
                                <span>⚡</span>
                                <span>1.5+ Years Exp</span>
                            </div>
                            <div className="about__badge about__badge--2">
                                <span>🏆</span>
                                <span>2+ Projects</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="about__content" ref={contentRef}>
                        <div className="about__header-reveal">
                            <span className="section-label">About Me</span>
                            <h2 className="section-title">
                                Passionate Developer,{' '}
                                <span className="gradient-text">Problem Solver</span>
                            </h2>
                        </div>

                        <p className="about__bio">
                            Hi, I&apos;m <strong>Bhaumik Kothiya</strong> — a dedicated Full Stack Developer with over 1.5 years of experience in creating innovative web solutions. My journey in technology is driven by a passion for solving complex problems and building applications that make a difference. I take pride in delivering high-quality, scalable code that meets both user needs and business objectives.
                        </p>

                        <p className="about__bio">
                            Specializing in the <strong>MERN stack</strong>, I have successfully delivered diverse projects ranging from enterprise-level documentation portals to real-time collaborative tools. My expertise extends beyond standard web development to include <strong>AI/ML integration</strong>, cloud services, and automated publishing platforms. I am constantly exploring new technologies to stay at the forefront of modern web engineering.
                        </p>

                        {/* Highlights */}
                        <div className="about__highlights">
                            {highlights.map((h) => (
                                <div key={h.label} className="about__highlight-card glass-card">
                                    <span className="about__highlight-icon">{h.icon}</span>
                                    <div>
                                        <div className="about__highlight-label">{h.label}</div>
                                        <div className="about__highlight-desc">{h.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="about__actions">
                            <a
                                href="/Kothiya Bhaumik.pdf"
                                className="btn btn-primary"
                                download="Kothiya_Bhaumik_Resume.pdf"
                                id="about-download-resume-btn"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                                Download Resume
                            </a>
                            <button
                                className="btn btn-outline"
                                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                                id="about-contact-btn"
                            >
                                Let&apos;s Talk
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(About);
