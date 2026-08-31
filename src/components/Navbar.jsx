import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('section-intro');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = [
        'section-intro',
        'section-services',
        'section-projects',
        'section-about',
        'section-faq',
        'section-contact'
      ];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#section-intro' },
    { label: 'Services', href: '#section-services' },
    { label: 'Projects', href: '#section-projects' },
    { label: 'About', href: '#section-about' },
    { label: 'FAQ', href: '#section-faq' },
    { label: 'Contact', href: '#section-contact' }
  ];

  return (
    <header className={`header-fixed ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-flex">
          
          {/* Logo Image */}
          <a href="#section-intro" className="brand-logo">
            <img
              src="/logo.png"
              alt="HAVENCRAFT Remodeling"
              style={{
                height: '46px',
                width: 'auto',
                maxWidth: '240px',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </a>

          {/* Horizontal Nav Links */}
          <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            {/* Mobile CTA */}
            <a
              href="#section-contact"
              className="btn-main mobile-cta"
              onClick={() => setIsOpen(false)}
            >
              <span>Get a Free Quote</span>
              <ArrowRight size={16} />
            </a>
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="nav-actions">
            <a href="#section-contact" className="btn-main desktop-cta">
              <span>Get a Free Quote</span>
              <ArrowRight size={16} />
            </a>

            <button
              className="mobile-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
