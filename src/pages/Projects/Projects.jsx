import { useRef, memo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

//Projects data array with enhanced styling properties
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
        title: 'Land Measurement System',
        description: 'A smart web-based land measurement system that helps users calculate land area accurately using map-based inputs and real-time data visualization.',
        image: null,
        gradient: 'linear-gradient(135deg, #1e3a8a, #2563eb)',
        accentColor: '#3b82f6',
        tags: ['React', 'Node.js', 'MongoDB', 'Maps API', 'GeoLocation'],
        liveUrl: 'https://land-measurement-system-97nl.vercel.app/',
        githubUrl: '#',
        emoji: '📍',
    },
    {
        id: 4,
        title: 'Neurovia AI',
        description: "Users can generate and use their own AI API keys, allowing them to easily integrate AI into their own projects and build customized solutions.",
        image: null,
        gradient: 'linear-gradient(135deg, #042f2e, #0d9488)',
        accentColor: '#14b8a6',
        tags: ['React', 'Node.js', 'MongoDB', 'AI (MCP)', 'NLP'],
        liveUrl: 'https://neurovia-ai-psi.vercel.app/',
        githubUrl: '#',
        emoji: '🇮🇳',
    },
    {
        id: 5,
        title: 'TextUtilize',
        description: 'A powerful and user-friendly text utility web application that allows users to transform, analyze, and manipulate text efficiently. Features include case conversion, word and character counting, text formatting, and instant preview with a clean responsive UI.',
        image: null,
        gradient: 'linear-gradient(135deg, #052e16, #064e3b)',
        accentColor: '#3b82f6',
        tags: ['HTML', 'JavaScript', 'React.js', 'CSS', 'Bootstrap',],
        liveUrl: 'https://textutilze-alpha.vercel.app/',
        githubUrl: 'https://github.com/bhaumik-1910/Textutilze',
        emoji: '📝',
    },
    {
        id: 6,
        title: 'Cyber-Guard',
        description: 'A deep-scan security auditing and network protection suite designed to identify vulnerabilities and secure digital infrastructures using advanced scanning algorithms.',
        image: null,
        gradient: 'linear-gradient(135deg, #052e16, #064e3b)',
        accentColor: '#22c55e',
        tags: ['Next.js', 'TypeScript', 'Security', 'Tailwind'],
        liveUrl: 'https://cyber-guard-chi.vercel.app/',
        githubUrl: 'https://github.com/bhaumik-1910/Cyber-Guard',
        emoji: '🛡️',
    },
    // {
    //     id: 6,
    //     title: 'QuickCart-Ecommerce',
    //     description: 'Scalable e-commerce solution with real-time inventory management, multi-vendor support, secure payment gateway, and an advanced analytics dashboard for sellers.',
    //     image: null,
    //     gradient: 'linear-gradient(135deg, #310e5d, #4c1d95)',
    //     accentColor: '#a78bfa',
    //     tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    //     liveUrl: 'https://github.com/bhaumik-1910/QuickCart-Ecommerce',
    //     githubUrl: 'https://github.com/bhaumik-1910/QuickCart-Ecommerce',
    //     emoji: '🛒',
    // },
    {
        id: 7,
        title: 'Real-time Editor',
        description: 'A collaborative document editing platform that allows multiple users to edit documents simultaneously with real-time cursor tracking and version history.',
        image: null,
        gradient: 'linear-gradient(135deg, #064e3b, #065f46)',
        accentColor: '#10b981',
        tags: ['Socket.io', 'React', 'Node.js', 'Redis'],
        liveUrl: 'https://github.com/bhaumik-1910/Realtime-collaborative-document-editing-app-master',
        githubUrl: 'https://github.com/bhaumik-1910/Realtime-collaborative-document-editing-app-master',
        emoji: '📄',
    },
    // {
    //     id: 8,
    //     title: 'Crypto_Flow-UI',
    //     description: 'A sleek, modern cryptocurrency tracking dashboard providing real-time price feeds, portfolio heatmaps, and transaction history with high-performance charts.',
    //     image: null,
    //     gradient: 'linear-gradient(135deg, #4c1d95, #6d28d9)',
    //     accentColor: '#c084fc',
    //     tags: ['React', 'Chart.js', 'Tailwind CSS'],
    //     liveUrl: 'https://github.com/bhaumik-1910/Crypto_Flow-UI',
    //     githubUrl: 'https://github.com/bhaumik-1910/Crypto_Flow-UI',
    //     emoji: '💎',
    // },
    // {
    //     id: 9,
    //     title: 'Car_Rental_UI',
    //     description: 'A specialized car rental management system featuring vehicle categorization, availability calendars, automated billing, and user-friendly booking workflows.',
    //     image: null,
    //     gradient: 'linear-gradient(135deg, #7c2d12, #9a3412)',
    //     accentColor: '#fb923c',
    //     tags: ['React', 'React Router', 'Lucide Icons', 'Material UI'],
    //     liveUrl: 'https://github.com/bhaumik-1910/Car_Rental_UI',
    //     githubUrl: 'https://github.com/bhaumik-1910/Car_Rental_UI',
    //     emoji: '🚗',
    // },
    // {
    //     id: 10,
    //     title: 'Fast_Food-UI',
    //     description: 'A vibrant food ordering application UI focusing on user experience, featuring dynamic menu filtering, interactive cart, and seamless order tracking.',
    //     image: null,
    //     gradient: 'linear-gradient(135deg, #831843, #9d174d)',
    //     accentColor: '#f472b6',
    //     tags: ['HTML5', 'JavaScript (ES6+)', 'CSS3 / Tailwind CSS', 'Animation'],
    //     liveUrl: 'https://github.com/bhaumik-1910/Fast_Food-UI',
    //     githubUrl: 'https://github.com/bhaumik-1910/Fast_Food-UI',
    //     emoji: '🍔',
    // },
    // {
    //     id: 11,
    //     title: 'Nike-Shoes-Template',
    //     description: 'High-performance landing page design focusing on storytelling and interactive product displays with smooth scroll animations and modern typography.',
    //     image: null,
    //     gradient: 'linear-gradient(135deg, #1e293b, #334155)',
    //     accentColor: '#ffffff',
    //     tags: ['HTML5', 'CSS3', 'AOS', 'UI Design'],
    //     liveUrl: 'https://nike-shoes-template.vercel.app/',
    //     githubUrl: 'https://github.com/bhaumik-1910/Nike-Shoes-Template',
    //     emoji: '👟',
    // },
    // {
    //     id: 12,
    //     title: 'IT Academy Landing Page',
    //     description: 'A professional, responsive landing page for an IT academy. Features course listings, an "About" section, and a clean, modern UI optimized for both mobile and desktop users.',
    //     image: null,
    //     gradient: 'linear-gradient(135deg, #1e3a8a, #1d4ed8)',
    //     accentColor: '#60a5fa',
    //     tags: ['HTML5', 'CSS3', 'Responsive Design', 'UI/UX'],
    //     liveUrl: 'https://academy-lenging.vercel.app/',
    //     githubUrl: 'https://github.com/bhaumik-1910/IT-Academy-Lenging-Page',
    //     emoji: '🎓',
    // },
];

const Projects = () => {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    useGSAP(() => {
        // Header animation
        gsap.from('.projects__header > *', {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.projects__header',
                start: 'top 85%',
            }
        });

        // Grid cards animation
        gsap.from('.project-card', {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 0.8,
            stagger: {
                amount: 0.8,
                grid: [Math.ceil(projectsData.length / 3), 3],
                from: 'start'
            },
            ease: 'back.out(1.4)',
            scrollTrigger: {
                trigger: gridRef.current,
                start: 'top 80%',
            }
        });

        // Footer button animation
        gsap.from('.projects__footer', {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.projects__footer',
                start: 'top 90%',
            }
        });
    }, { scope: sectionRef });

    return (
        <section className="section projects" id="projects" ref={sectionRef}>
            <div className="section-inner">
                <div className="projects__header">
                    <span className="section-label">Selected Works</span>
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        A showcase of my production-level applications and experimental projects.
                        Note: Some enterprise projects are marked as private due to licensing.
                    </p>
                </div>

                <div className="projects__grid" ref={gridRef}>
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="project-card glass-card"
                            id={`project-card-${project.id}`}
                        >
                            <div
                                className="project-card__preview"
                                style={{ background: project.gradient }}
                            >
                                <div className="project-card__preview-grid" />
                                <div
                                    className="project-card__preview-glow"
                                    style={{ background: `radial-gradient(circle, ${project.accentColor}30 0%, transparent 70%)` }}
                                />
                                <div className="project-card__preview-emoji">{project.emoji}</div>

                                <div className="project-card__chrome">
                                    <span style={{ background: '#ff5f57' }} />
                                    <span style={{ background: '#ffbd2e' }} />
                                    <span style={{ background: '#28c840' }} />
                                </div>

                                {project.isPrivate && (
                                    <div className="project-card__private-badge">
                                        Private Repo
                                    </div>
                                )}
                            </div>

                            <div className="project-card__content">
                                <h3 className="project-card__title">{project.title}</h3>
                                <p className="project-card__desc">{project.description}</p>

                                <div className="project-card__tags">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="project-card__tag"
                                            style={{
                                                color: project.accentColor,
                                                background: `${project.accentColor}15`,
                                                borderColor: `${project.accentColor}30`,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="project-card__links">
                                    {project.liveUrl && project.liveUrl !== '#' ? (
                                        <>
                                            <a
                                                href={project.liveUrl}
                                                className="project-card__link project-card__link--primary"
                                                style={{ background: `${project.accentColor}20`, borderColor: `${project.accentColor}40`, color: project.accentColor }}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                View Project
                                            </a>
                                            {!project.isPrivate && project.githubUrl && project.githubUrl !== '#' && (
                                                <a
                                                    href={project.githubUrl}
                                                    className="project-card__link project-card__link--secondary"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    GitHub
                                                </a>
                                            )}
                                        </>
                                    ) : project.isPrivate ? (
                                        <button className="project-card__link project-card__link--disabled" disabled>
                                            Enterprise Project
                                        </button>
                                    ) : (
                                        <a
                                            href={project.githubUrl}
                                            className="project-card__link project-card__link--secondary"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects__footer">
                    <a
                        href="https://github.com/bhaumik-1910"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        See All Public Repositories
                    </a>
                </div>
            </div>
        </section>
    );
};

export default memo(Projects);
