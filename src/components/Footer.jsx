import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer aria-label="Site Footer">
      <div className="container">
        <div className="footer-grid">

          {/* Col 1: About & Social */}
          <div>
            <div style={{ background: '#ffffff', padding: '10px 16px', borderRadius: '8px', display: 'inline-block', marginBottom: '20px' }}>
              <img
                src="/logo.png"
                alt="HAVENCRAFT Remodeling Logo"
                loading="lazy"
                width="180"
                height="42"
                style={{ maxHeight: '42px', width: 'auto', display: 'block' }}
              />
            </div>
            <p style={{ fontSize: '14px', lineHeight: 1.7, marginBottom: '24px' }}>
              We specialize in residential and commercial renovations, delivering quality craftsmanship,
              innovative designs, and reliable project management. From remodeling single rooms to complete
              property transformations, we bring your vision to life with precision and care.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="#section-contact" aria-label="Visit HAVENCRAFT on Facebook" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <Facebook size={18} />
              </a>
              <a href="#section-contact" aria-label="Visit HAVENCRAFT on Twitter" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <Twitter size={18} />
              </a>
              <a href="#section-contact" aria-label="Visit HAVENCRAFT on Instagram" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <Instagram size={18} />
              </a>
              <a href="#section-contact" aria-label="Visit HAVENCRAFT on YouTube" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="footer-title">Navigation</h3>
            <ul className="footer-links">
              <li><a href="#section-intro">Home</a></li>
              <li><a href="#section-services">Services</a></li>
              <li><a href="#section-projects">Projects</a></li>
              <li><a href="#section-about">About</a></li>
              <li><a href="#section-faq">FAQ</a></li>
              <li><a href="#section-contact">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              <li><a href="#section-services">Home Renovation</a></li>
              <li><a href="#section-services">Kitchen Remodeling</a></li>
              <li><a href="#section-services">Bathroom Renovation</a></li>
              <li><a href="#section-services">Interior Remodeling</a></li>
              <li><a href="#section-services">Exterior Renovation</a></li>
              <li><a href="#section-services">Commercial Renovation</a></li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div>
            <h3 className="footer-title">Quick Info</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={16} color="var(--primary)" />
                <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={16} color="var(--primary)" />
                <span>100 S Main St, New York, NY</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="var(--primary)" />
                <span>contact@havencraftremodeling.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="var(--primary)" />
                <span>+1 (800) 123-4567</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="subfooter">
        <div className="container">
          <div className="subfooter-flex">
            <div>
              Copyright © 2026 HAVENCRAFT Remodeling. All Rights Reserved.
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#section-intro" style={{ color: '#9ca3af' }}>Terms &amp; Conditions</a>
              <a href="#section-intro" style={{ color: '#9ca3af' }}>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
