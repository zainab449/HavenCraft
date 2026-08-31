import React from 'react';
import { ShieldCheck, Award, Clock, HeartHandshake } from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: <Award size={32} />,
      title: 'Experienced Professionals',
      desc: 'Our skilled renovation specialists deliver exceptional craftsmanship with years of hands-on industry experience.'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Premium Quality Materials',
      desc: 'We use trusted materials and proven construction methods for beautiful, durable, and lasting results.'
    },
    {
      icon: <Clock size={32} />,
      title: 'On-Time Project Delivery',
      desc: 'Efficient planning and project management help us complete renovations on schedule and within budget.'
    },
    {
      icon: <HeartHandshake size={32} />,
      title: 'Customer Satisfaction',
      desc: 'We prioritize clear communication, personalized service, and outstanding results from start to finish.'
    }
  ];

  return (
    <section id="section-why-us" className="section-padding" style={{ backgroundColor: '#fafafa' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
          
          {/* Left Intro */}
          <div>
            <div className="subtitle">Why HAVENCRAFT</div>
            <h2 className="section-title">Why Choose HAVENCRAFT?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '16px' }}>
              We combine innovative design, premium craftsmanship, and transparent communication to
              deliver renovation projects that exceed expectations. Every detail is carefully planned to
              create beautiful spaces built to last.
            </p>
            <a href="#section-contact" className="btn-main">
              <span>Schedule Consultation</span>
            </a>
          </div>

          {/* Right Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {reasons.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  padding: '24px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  gap: '16px'
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  minWidth: '52px',
                  borderRadius: '12px',
                  background: 'var(--primary-light)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
