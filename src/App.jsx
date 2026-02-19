import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import Hero from './pages/Hero/Hero';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Testimonials from './pages/Testimonials/Testimonials';
import Education from './pages/Education/Education';
import Certifications from './pages/Certifications/Certifications';
import Contact from './pages/Contact/Contact';

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Background blobs */}
      <div className="app-bg" />

      {/* Custom Cursor */}
      <div
        className={`custom-cursor ${isPointer ? 'custom-cursor--pointer' : ''}`}
        style={{
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
