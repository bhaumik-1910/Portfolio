import { motion } from 'framer-motion';
import './Footer.css';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
];

const expertiseList = [
    'Full-Stack Development',
    'AI & Automation',
    'System Architecture',
    'Performance Optimization',
    'UI/UX Strategy'
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const handleNavClick = (href) => {
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="section-inner">
                <motion.div
                    className="footer__top"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
                >
                    {/* Brand Section */}
                    <div className="footer__brand">
                        <a
                            href="#home"
                            className="footer__logo"
                            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
                        >
                            <span className="footer__logo-bracket">&lt;</span>
                            <span className="footer__logo-name">Bhaumik</span>
                            <span className="footer__logo-bracket">/&gt;</span>
                        </a>
                        <p className="footer__tagline">
                            Architecting the future with code. Specialized in building intelligent, scalable, and human-centric web ecosystems.
                        </p>
                        <div className="footer__socials">
                            <motion.a
                                href="https://github.com/bhaumik-1910"
                                className="footer__social-link footer__social-link--github"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/bhaumik-kothiya-28396235a"
                                className="footer__social-link footer__social-link--linkedin"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                            </motion.a>
                            <motion.a
                                href="https://x.com/Bhaumik1910?t=H36KnxEA-lqzRMxSHXPMEQ&s=09"
                                className="footer__social-link footer__social-link--twitter"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X (formerly Twitter)"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                                </svg>
                            </motion.a>
                            <motion.a
                                href="https://wa.me/919313629723"
                                className="footer__social-link footer__social-link--whatsapp"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                whileHover={{ scale: 1.1, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                                </svg>
                            </motion.a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="footer__nav-group">
                        <h4 className="footer__heading">Explore</h4>
                        <div className="footer__links">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="footer__nav-link"
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Expertise */}
                    <div className="footer__nav-group">
                        <h4 className="footer__heading">Services</h4>
                        <div className="footer__links">
                            {expertiseList.map((item) => (
                                <span key={item} className="footer__nav-text">{item}</span>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter / Contact Hook */}
                    <div className="footer__nav-group">
                        <h4 className="footer__heading">Get in Touch</h4>
                        <p className="footer__contact-text">
                            Have a project in mind or just want to say hi?
                        </p>
                        <a
                            href="#contact"
                            className="footer__cta-link"
                            onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                        >
                            Let&apos;s Talk
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </a>
                    </div>
                </motion.div>

                <div className="footer__bottom">
                    <div className="footer__copyright">
                        <p>© {currentYear} Bhaumik Kothiya. Built with precision and passion.</p>
                    </div>
                    <div className="footer__legal">
                        <a href="#privacy" className="footer__legal-link">Privacy</a>
                        <span className="footer__legal-dot"></span>
                        <a href="#terms" className="footer__legal-link">Terms</a>
                        <span className="footer__legal-dot"></span>
                        <a href="#cookies" className="footer__legal-link">Cookies</a>
                    </div>
                </div>
            </div>

            {/* Back to top button - Locked in wrapper */}
            <div className="footer__scroll-top-wrap">
                <button
                    className="footer__scroll-top"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label="Scroll to top"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="19" x2="12" y2="5" />
                        <polyline points="5 12 12 5 19 12" />
                    </svg>
                </button>
            </div>
        </footer>
    );
}
