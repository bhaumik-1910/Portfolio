import { useEffect, useRef, memo } from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Hero from './pages/Hero/Hero';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education';
import Certifications from './pages/Certifications/Certifications';
import Contact from './pages/Contact/Contact';

// Memoize sections to prevent re-renders from cursor movements
const MemoNavbar = memo(Navbar);
const MemoHero = memo(Hero);
const MemoAbout = memo(About);
const MemoSkills = memo(Skills);
const MemoProjects = memo(Projects);
const MemoExperience = memo(Experience);
const MemoEducation = memo(Education);
const MemoCertifications = memo(Certifications);
const MemoContact = memo(Contact);
const MemoFooter = memo(Footer);

function App() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;

      // Direct DOM manipulation for cursor position to avoid React re-renders
      if (cursorRef.current && dotRef.current) {
        cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
        dotRef.current.style.transform = `translate(${x}px, ${y}px)`;

        const target = e.target;
        const isPointer = window.getComputedStyle(target).cursor === 'pointer' ||
          target.tagName === 'A' ||
          target.tagName === 'BUTTON';

        if (isPointer) {
          cursorRef.current.classList.add('custom-cursor--pointer');
        } else {
          cursorRef.current.classList.remove('custom-cursor--pointer');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app">
      <div className="noise-overlay" />
      <div className="app-bg" />

      {/* Optimized Custom Cursor (Direct DOM updates) */}
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="custom-cursor-dot" />

      <MemoNavbar />

      <main className="main-content">
        <MemoHero />
        <MemoAbout />
        <MemoSkills />
        <MemoProjects />
        <MemoExperience />
        <MemoEducation />
        <MemoCertifications />
        <MemoContact />
      </main>

      <MemoFooter />
    </div>
  );
}

export default App;
