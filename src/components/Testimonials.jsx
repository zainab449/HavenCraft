import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sarah Thompson',
      role: 'Homeowner',
      text: 'They transformed our outdated house into a beautiful modern home with exceptional craftsmanship, clear communication, and outstanding attention to every detail.'
    },
    {
      name: 'Michael Carter',
      role: 'Property Owner',
      text: 'The renovation finished exactly on schedule with excellent workmanship, transparent pricing, and a friendly team that exceeded all our expectations.'
    },
    {
      name: 'Emily Johnson',
      role: 'Interior Enthusiast',
      text: 'Every room was completed with incredible precision and quality, creating a stylish living space that perfectly matched our original vision.'
    },
    {
      name: 'Jessica Brown',
      role: 'Residential Client',
      text: 'Our kitchen renovation completely transformed the heart of our home with premium finishes, smart design, and remarkable craftsmanship throughout.'
    },
    {
      name: 'Daniel Wilson',
      role: 'Homeowner',
      text: 'From the initial consultation to the final handover, every stage was organized professionally, making the entire renovation completely stress free.'
    },
    {
      name: 'Olivia Martinez',
      role: 'Real Estate Investor',
      text: 'We highly recommend this renovation team for delivering exceptional quality, reliable service, beautiful results, and outstanding value from beginning to end.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section-padding dark-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', color: 'var(--primary)', marginBottom: '24px' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="var(--primary)" />
            ))}
          </div>

          <Quote size={48} color="var(--primary)" style={{ opacity: 0.4, marginBottom: '16px' }} />

          <h3 style={{ fontSize: 'clamp(18px, 4vw, 28px)', color: '#ffffff', fontWeight: 500, lineHeight: 1.5, marginBottom: '28px' }}>
            "{reviews[currentIndex].text}"
          </h3>

          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ color: 'var(--primary)', fontSize: '20px', marginBottom: '4px' }}>
              {reviews[currentIndex].name}
            </h4>
            <span style={{ color: '#9ca3af', fontSize: '14px' }}>
              {reviews[currentIndex].role}
            </span>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition)'
              }}
            >
              <ChevronLeft size={22} />
            </button>
            <span style={{ fontSize: '14px', color: '#9ca3af' }}>
              {currentIndex + 1} / {reviews.length}
            </span>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition)'
              }}
            >
              <ChevronRight size={22} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
