import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Awards', href: '#certifications' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section
            const sections = navLinks.map(l => l.href.replace('#', ''));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setDrawerOpen(false);
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
            <div className="navbar__inner">
                {/* Logo */}
                <a
                    href="#home"
                    className="navbar__logo flex-shrink-0"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
                >
                    <span className="navbar__logo-bracket">&lt;</span>
                    <span className="navbar__logo-name text-base md:text-lg">Bhaumik</span>
                    <span className="navbar__logo-bracket">/&gt;</span>
                </a>

                {/* Desktop Nav */}
                <nav className="navbar__links hidden lg:flex" aria-label="Main navigation">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`navbar__link text-sm lg:text-base ${activeSection === link.href.replace('#', '') ? 'navbar__link--active' : ''}`}
                            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA Button - Desktop Only */}
                <a
                    href="#contact"
                    className="navbar__cta hidden lg:block btn btn-primary text-sm"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                >
                    Hire Me
                </a>

                {/* Menu Icon Button - Mobile/Tablet */}
                <button
                    className={`navbar__menu-icon ${drawerOpen ? 'navbar__menu-icon--active' : ''}`}
                    onClick={() => setDrawerOpen(!drawerOpen)}
                    aria-label="Toggle drawer menu"
                    aria-expanded={drawerOpen}
                    aria-controls="navbar-drawer"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Drawer Overlay */}
            {drawerOpen && (
                <div
                    className="navbar__drawer-overlay"
                    onClick={() => setDrawerOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Drawer Menu */}
            <div
                id="navbar-drawer"
                className={`navbar__drawer ${drawerOpen ? 'navbar__drawer--open' : ''}`}
            >
                {/* Drawer Header */}
                <div className="navbar__drawer-header">
                    <h2 className="navbar__drawer-title">Navigation</h2>
                    <button
                        className="navbar__drawer-close"
                        onClick={() => setDrawerOpen(false)}
                        aria-label="Close drawer"
                    >
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Drawer Links */}
                <nav className="navbar__drawer-nav" aria-label="Drawer navigation">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`navbar__drawer-link ${activeSection === link.href.replace('#', '') ? 'navbar__drawer-link--active' : ''}`}
                            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                        >
                            <span className="navbar__drawer-link-label">{link.label}</span>
                            {activeSection === link.href.replace('#', '') && (
                                <span className="navbar__drawer-link-indicator"></span>
                            )}
                        </a>
                    ))}
                </nav>

                {/* Drawer Footer */}
                <div className="navbar__drawer-footer">
                    <a
                        href="#contact"
                        className="btn btn-primary w-full text-center"
                        onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                    >
                        Hire Me
                    </a>
                </div>
            </div>
        </header>
    );
}
