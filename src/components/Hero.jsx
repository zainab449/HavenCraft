import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="section-intro" className="hero-section" aria-label="Hero Introduction">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/misc/l1.webp"
        className="hero-bg-video"
        aria-hidden="true"
      >
        <source src="/video/1.mp4" type="video/mp4" />
      </video>

      {/* Overlay Gradient */}
      <div className="hero-overlay"></div>

      <div className="container">
        <div className="hero-content">
          <div className="subtitle" style={{ color: 'var(--primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={16} /> HOME REMODELING &amp; RENOVATION
          </div>

          <h1 className="hero-title">
            Transform Your Home
            <span className="hero-title-accent" style={{ display: 'block', marginTop: '4px' }}>
              Into Something Extraordinary
            </span>
          </h1>

          <p className="hero-desc">
            Thoughtful design, quality craftsmanship, and seamless remodeling solutions tailored to the way you live.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#section-contact" className="btn-main" aria-label="Get a Free Estimate for your home renovation project">
              <span>Get a Free Estimate</span>
              <ArrowRight size={18} />
            </a>
            <a href="#section-projects" className="btn-secondary" aria-label="Explore our completed remodeling projects">
              <span>Explore Our Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
