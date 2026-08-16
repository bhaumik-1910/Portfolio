import { memo, useEffect, useRef } from 'react';
import Navbar from './component/Navbar/Navbar';
import Hero from './pages/Hero/Hero';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Education from './pages/Education/Education';
import Certifications from './pages/Certifications/Certifications';
import Contact from './pages/Contact/Contact';
import Footer from './component/Footer/Footer';
import './App.css';

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
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isClicking = false;
    let rafId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      const target = e.target;
      const isPointer =
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.glass-card');

      isHovering = !!isPointer;
    };

    const handleMouseDown = () => {
      isClicking = true;
    };

    const handleMouseUp = () => {
      isClicking = false;
    };

    // Smooth Lerp loop for the outer trailing ring
    const render = () => {
      // Lerp ring position towards mouse
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (cursorRef.current) {
        let scale = 1;
        if (isClicking) {
          scale = 0.85;
        } else if (isHovering) {
          scale = 1.3;
        }

        cursorRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;

        if (isHovering) {
          cursorRef.current.classList.add('custom-cursor--hover');
          if (dotRef.current) dotRef.current.classList.add('custom-cursor-dot--hover');
        } else {
          cursorRef.current.classList.remove('custom-cursor--hover');
          if (dotRef.current) dotRef.current.classList.remove('custom-cursor-dot--hover');
        }
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="app">
      <div className="noise-overlay" />
      <div className="app-bg" />

      {/* Luxury Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={dotRef} className="custom-cursor-dot" />

      <MemoNavbar />
      <main>
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
