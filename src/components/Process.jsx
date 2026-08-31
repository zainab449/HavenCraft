import React from 'react';
import { MessageSquare, Compass, Hammer, ShieldCheck } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: <MessageSquare size={28} />,
      title: 'Consultation',
      desc: 'We discuss your ideas, goals, budget, and timeline to understand your vision and project requirements.'
    },
    {
      num: '02',
      icon: <Compass size={28} />,
      title: 'Design & Planning',
      desc: 'Our designers prepare layouts, material selections, and detailed plans tailored to your home and lifestyle.'
    },
    {
      num: '03',
      icon: <Hammer size={28} />,
      title: 'Renovation',
      desc: 'Skilled craftsmen complete every renovation with precision, quality materials, and attention to detail.'
    },
    {
      num: '04',
      icon: <ShieldCheck size={28} />,
      title: 'Final Walkthrough',
      desc: 'We inspect every detail together, ensuring exceptional quality and complete satisfaction before completion.'
    }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 50px' }}>
          <div className="subtitle">How We Work</div>
          <h2 className="section-title">Our Renovation Process</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            A seamless four-step journey designed for stress-free home transformations.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="process-card">
              <span style={{
                position: 'absolute',
                top: '20px',
                right: '24px',
                fontSize: '28px',
                fontWeight: 800,
                color: 'rgba(200, 149, 81, 0.2)',
                fontFamily: 'var(--font-heading)'
              }}>
                {step.num}
              </span>
              <div className="process-icon-wrapper">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
