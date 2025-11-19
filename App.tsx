import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SkillsChart from './components/SkillsChart';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

function App() {
  // Smooth scrolling setup and Intersection Observer for animations
  useEffect(() => {
    // Handle smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          element?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Intersection Observer for scroll reveal animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f7] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <SkillsChart />
        <Timeline />
        <Testimonials />
        <About />
      </main>
      <Contact />
      <ChatBot />
    </div>
  );
}

export default App;