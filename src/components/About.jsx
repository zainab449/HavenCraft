import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  const highlights = [
    'Custom Kitchen & Bathroom Remodeling',
    'Whole-Home Architectural Transformations',
    'Licensed & Insured Master Craftsmen',
    'Transparent Pricing with Zero Hidden Costs'
  ];

  return (
    <section id="section-about" className="section-padding" aria-label="About HAVENCRAFT Remodeling">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
          
          {/* Images Stack */}
          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', paddingRight: '40px', paddingBottom: '40px' }}>
              <img
                src="/images/misc/l1.webp"
                alt="HAVENCRAFT Home Renovation Modern Living Room Interior"
                loading="lazy"
                width="600"
                height="450"
                style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-md)' }}
              />
            </div>
            <div style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: '50%',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '4px solid #ffffff'
            }}>
              <img
                src="/images/misc/s1.webp"
                alt="HAVENCRAFT Custom Craftsmanship Remodeling Detail"
                loading="lazy"
                width="300"
                height="225"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="subtitle">About HAVENCRAFT</div>
            <h2 className="section-title">
              Transforming Homes <br /> With Expert Renovations
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '16px' }}>
              We specialize in home renovation, remodeling, and interior improvements that combine
              style, functionality, and lasting quality. From kitchen and bathroom upgrades to
              complete home transformations, our experienced team delivers every project with
              exceptional craftsmanship and attention to detail.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '32px' }}>
              {highlights.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 600 }}>
                  <CheckCircle2 size={18} color="var(--primary)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a href="#section-contact" className="btn-main" aria-label="Start your home renovation project with HAVENCRAFT">
              <span>Start Your Project</span>
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
