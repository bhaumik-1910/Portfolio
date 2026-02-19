import { useEffect, useRef, useState } from 'react';
import './Testimonials.css';

// const testimonials = [
//     {
//         id: 1,
//         name: 'Arjun Mehta',
//         role: 'CTO, StartupHub Technologies',
//         avatar: 'AM',
//         avatarColor: '#3b82f6',
//         rating: 5,
//         text: 'Bhaumik is an exceptional developer who consistently delivers high-quality work. His expertise in the MERN stack and ability to architect scalable solutions is truly impressive. He transformed our legacy system into a modern, performant application.',
//         company: 'StartupHub',
//     },
//     {
//         id: 2,
//         name: 'Priya Sharma',
//         role: 'Product Manager, Tech Innovations',
//         avatar: 'PS',
//         avatarColor: '#8b5cf6',
//         rating: 5,
//         text: 'Working with Bhaumik was a fantastic experience. He not only delivered the project on time but also suggested improvements that significantly enhanced our product. His attention to detail and clean code practices are outstanding.',
//         company: 'Tech Innovations',
//     },
//     {
//         id: 3,
//         name: 'Rahul Patel',
//         role: 'Founder, E-Commerce Startup',
//         avatar: 'RP',
//         avatarColor: '#10b981',
//         rating: 5,
//         text: 'Bhaumik built our entire e-commerce platform from scratch. The result exceeded our expectations — fast, beautiful, and feature-rich. Our conversion rate increased by 35% after launch. Highly recommend!',
//         company: 'ShopEase',
//     },
//     {
//         id: 4,
//         name: 'Dr. Kavita Joshi',
//         role: 'Director, LJ University',
//         avatar: 'KJ',
//         avatarColor: '#f59e0b',
//         rating: 5,
//         text: 'The document management system Bhaumik developed for our institution has revolutionized our workflow. The AI chatbot integration is particularly impressive — it handles complex queries with remarkable accuracy.',
//         company: 'LJ University',
//     },
//     {
//         id: 5,
//         name: 'Vikram Singh',
//         role: 'Lead Developer, FinTech Corp',
//         avatar: 'VS',
//         avatarColor: '#ec4899',
//         rating: 5,
//         text: 'Bhaumik\'s technical depth is remarkable. He quickly understood our complex financial system requirements and delivered a robust solution with excellent performance optimization. A true professional.',
//         company: 'FinTech Corp',
//     },
// ];

export default function Testimonials() {
    // const sectionRef = useRef(null);
    // const [activeIdx, setActiveIdx] = useState(0);
    // const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //                 if (entry.isIntersecting) {
    //                     entry.target.querySelectorAll('.animate-on-scroll').forEach((el) => {
    //                         el.classList.add('visible');
    //                     });
    //                 }
    //             });
    //         },
    //         { threshold: 0.1 }
    //     );

    //     if (sectionRef.current) observer.observe(sectionRef.current);
    //     return () => observer.disconnect();
    // }, []);

    // useEffect(() => {
    //     if (!isAutoPlaying) return;
    //     const interval = setInterval(() => {
    //         setActiveIdx((prev) => (prev + 1) % testimonials.length);
    //     }, 4000);
    //     return () => clearInterval(interval);
    // }, [isAutoPlaying]);

    // const handleDotClick = (idx) => {
    //     setActiveIdx(idx);
    //     setIsAutoPlaying(false);
    //     setTimeout(() => setIsAutoPlaying(true), 8000);
    // };

    // return (
    //     <section className="section testimonials" id="testimonials" ref={sectionRef}>
    //         <div className="section-inner">
    //             {/* Header */}
    //             <div className="testimonials__header animate-on-scroll">
    //                 <span className="section-label">What People Say</span>
    //                 <h2 className="section-title">
    //                     Client <span className="gradient-text">Testimonials</span>
    //                 </h2>
    //                 <p className="section-subtitle">
    //                     Feedback from clients and colleagues I&apos;ve had the pleasure of working with.
    //                 </p>
    //             </div>

    //             {/* Featured Testimonial */}
    //             <div className="testimonials__featured animate-on-scroll animate-delay-1">
    //                 <div className="testimonials__quote-icon">"</div>

    //                 <div className="testimonials__content">
    //                     {testimonials.map((t, idx) => (
    //                         <div
    //                             key={t.id}
    //                             className={`testimonials__slide ${idx === activeIdx ? 'testimonials__slide--active' : ''}`}
    //                         >
    //                             <p className="testimonials__text">{t.text}</p>
    //                             <div className="testimonials__author">
    //                                 <div
    //                                     className="testimonials__avatar"
    //                                     style={{ background: `${t.avatarColor}30`, borderColor: `${t.avatarColor}50`, color: t.avatarColor }}
    //                                 >
    //                                     {t.avatar}
    //                                 </div>
    //                                 <div>
    //                                     <div className="testimonials__name">{t.name}</div>
    //                                     <div className="testimonials__role">{t.role}</div>
    //                                 </div>
    //                                 <div className="testimonials__stars">
    //                                     {Array.from({ length: t.rating }).map((_, i) => (
    //                                         <span key={i} className="testimonials__star">★</span>
    //                                     ))}
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     ))}
    //                 </div>

    //                 {/* Dots */}
    //                 <div className="testimonials__dots">
    //                     {testimonials.map((_, idx) => (
    //                         <button
    //                             key={idx}
    //                             className={`testimonials__dot ${idx === activeIdx ? 'testimonials__dot--active' : ''}`}
    //                             onClick={() => handleDotClick(idx)}
    //                             aria-label={`Go to testimonial ${idx + 1}`}
    //                             id={`testimonial-dot-${idx}`}
    //                         />
    //                     ))}
    //                 </div>
    //             </div>

    //             {/* Cards Grid */}
    //             <div className="testimonials__grid">
    //                 {testimonials.map((t, idx) => (
    //                     <div
    //                         key={t.id}
    //                         className={`testimonial-card glass-card animate-on-scroll animate-delay-${(idx % 3) + 1} ${idx === activeIdx ? 'testimonial-card--active' : ''}`}
    //                         onClick={() => handleDotClick(idx)}
    //                         id={`testimonial-card-${t.id}`}
    //                     >
    //                         {/* Stars */}
    //                         <div className="testimonial-card__stars">
    //                             {Array.from({ length: t.rating }).map((_, i) => (
    //                                 <span key={i} style={{ color: '#fbbf24' }}>★</span>
    //                             ))}
    //                         </div>

    //                         {/* Text */}
    //                         <p className="testimonial-card__text">
    //                             &ldquo;{t.text.slice(0, 120)}...&rdquo;
    //                         </p>

    //                         {/* Author */}
    //                         <div className="testimonial-card__author">
    //                             <div
    //                                 className="testimonial-card__avatar"
    //                                 style={{
    //                                     background: `${t.avatarColor}20`,
    //                                     borderColor: `${t.avatarColor}40`,
    //                                     color: t.avatarColor,
    //                                 }}
    //                             >
    //                                 {t.avatar}
    //                             </div>
    //                             <div>
    //                                 <div className="testimonial-card__name">{t.name}</div>
    //                                 <div className="testimonial-card__role">{t.role}</div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     </section>
    // );
}
