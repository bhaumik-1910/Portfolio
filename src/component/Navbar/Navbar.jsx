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
    const [menuOpen, setMenuOpen] = useState(false);
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
        setMenuOpen(false);
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
                    className="navbar__logo"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
                >
                    <span className="navbar__logo-bracket">&lt;</span>
                    <span className="navbar__logo-name">Bhaumik</span>
                    <span className="navbar__logo-bracket">/&gt;</span>
                </a>

                {/* Desktop Nav */}
                <nav className="navbar__links" aria-label="Main navigation">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`navbar__link ${activeSection === link.href.replace('#', '') ? 'navbar__link--active' : ''}`}
                            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <a
                    href="#contact"
                    className="navbar__cta btn btn-primary"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                >
                    Hire Me
                </a>

                {/* Hamburger */}
                <button
                    className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className={`navbar__mobile-link ${activeSection === link.href.replace('#', '') ? 'navbar__mobile-link--active' : ''}`}
                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="#contact"
                    className="btn btn-primary"
                    style={{ marginTop: '16px', justifyContent: 'center' }}
                    onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                >
                    Hire Me
                </a>
            </div>
        </header>
    );
}
