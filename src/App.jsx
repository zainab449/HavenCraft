import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import BeforeAfter from './components/BeforeAfter.jsx';
import Projects from './components/Projects.jsx';
import WhyUs from './components/WhyUs.jsx';
import FAQ from './components/FAQ.jsx';
import Testimonials from './components/Testimonials.jsx';
import Marquee from './components/Marquee.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="havencraft-app">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Process />
        <BeforeAfter />
        <Projects />
        <WhyUs />
        <FAQ />
        <Testimonials />
        <Marquee />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
