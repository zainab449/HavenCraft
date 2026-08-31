import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [activeTab, setActiveTab] = useState(0);
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      category: 'Planning & Design',
      items: [
        {
          q: 'What renovation services do you offer?',
          a: 'We specialize in kitchen remodeling, bathroom renovations, home additions, basement finishing, flooring, and complete home renovations.'
        },
        {
          q: 'How do I start my renovation project?',
          a: "Simply contact our team to schedule a consultation. We'll discuss your ideas, inspect the property, and prepare a personalized renovation plan."
        },
        {
          q: 'Can you help with design and material selection?',
          a: 'Yes. Our design specialists help you choose layouts, finishes, colors, fixtures, and materials that match your style and budget.'
        },
        {
          q: 'Do I need permits before renovation?',
          a: 'Some projects require permits depending on local regulations. We can guide you through the approval process when necessary.'
        },
        {
          q: 'Can I renovate only one room?',
          a: "Absolutely. Whether it's a single room or an entire house, we customize every project to meet your specific needs."
        }
      ]
    },
    {
      category: 'Construction Process',
      items: [
        {
          q: 'How long does a renovation usually take?',
          a: 'Project duration depends on size and complexity. Small renovations may take a few weeks, while larger remodels require several months.'
        },
        {
          q: 'Can I stay in my home during renovation?',
          a: 'In many cases, yes. For larger renovations affecting multiple rooms, temporary relocation may be recommended for comfort and safety.'
        },
        {
          q: 'How do you keep the work area clean?',
          a: 'We use protective coverings, dust barriers, and daily site cleanup to minimize disruption throughout the renovation process.'
        },
        {
          q: 'Will I receive project progress updates?',
          a: 'Yes. We provide regular updates so you always know the current progress, upcoming milestones, and project schedule.'
        },
        {
          q: 'What materials do you use?',
          a: 'We work with trusted suppliers and premium-quality materials to ensure lasting durability, performance, and beautiful finishes.'
        }
      ]
    },
    {
      category: 'Pricing & Warranty',
      items: [
        {
          q: 'How much does a renovation cost?',
          a: 'Costs vary depending on project scope, materials, and design requirements. We provide detailed, transparent estimates before work begins.'
        },
        {
          q: 'Do you provide free estimates?',
          a: 'Yes. We offer free consultations and project estimates to help you plan your renovation with confidence.'
        },
        {
          q: 'Are there any hidden charges?',
          a: 'No. We believe in transparent pricing, with every cost clearly explained before construction begins.'
        },
        {
          q: 'Do you offer warranties on your work?',
          a: 'Yes. Our workmanship is backed by a comprehensive warranty, giving you confidence in the quality of every renovation.'
        },
        {
          q: 'What payment options are available?',
          a: 'We accept multiple payment methods and flexible payment schedules based on project milestones and contract terms.'
        }
      ]
    }
  ];

  const toggleAccordion = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="section-faq" className="section-padding">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px' }}>
          
          {/* Left Heading */}
          <div>
            <div className="subtitle">FAQ</div>
            <h2 className="section-title">Have Questions?</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
              Find quick answers to common questions about our remodeling process, estimates, timelines, and warranties.
            </p>
            <div style={{ padding: '24px', background: 'var(--primary-light)', borderRadius: 'var(--radius-md)', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <HelpCircle size={36} color="var(--primary)" />
              <div>
                <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>Need more details?</h4>
                <a href="#section-contact" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '14px' }}>
                  Ask our team directly &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right Tabbed Accordion */}
          <div>
            <div className="faq-tabs">
              {faqData.map((cat, idx) => (
                <button
                  key={cat.category}
                  className={`faq-tab-btn ${activeTab === idx ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(idx);
                    setOpenItem(null);
                  }}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            <div>
              {faqData[activeTab].items.map((item, idx) => (
                <div key={idx} className="accordion-item">
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(idx)}
                  >
                    <span>{item.q}</span>
                    {openItem === idx ? <ChevronUp size={20} color="var(--primary)" /> : <ChevronDown size={20} />}
                  </div>
                  {openItem === idx && (
                    <div className="accordion-body">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
