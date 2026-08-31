import React from 'react';
import { ArrowRight, Utensils, Bath, Home } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Kitchen Remodeling',
      desc: 'Transform the heart of your home with custom cabinetry, premium countertops, elegant lighting, and functional layouts designed for modern living.',
      img: '/images/services/1.webp',
      icon: <Utensils size={32} />
    },
    {
      id: 2,
      title: 'Bathroom Renovation',
      desc: 'Upgrade your bathroom with luxurious finishes, walk-in showers, modern vanities, and timeless designs that blend comfort with elegance.',
      img: '/images/services/2.webp',
      icon: <Bath size={32} />
    },
    {
      id: 3,
      title: 'Whole Home Renovation',
      desc: 'Reimagine your entire home with complete renovations that improve style, comfort, functionality, and long-term property value.',
      img: '/images/services/3.webp',
      icon: <Home size={32} />
    }
  ];

  return (
    <section id="section-services" className="section-padding" style={{ backgroundColor: '#fafafa' }} aria-label="Our Renovation Services">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
          <div className="subtitle">Our Services</div>
          <h2 className="section-title">Our Renovation Services</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            High-end architectural solutions tailored to your aesthetic, lifestyle, and comfort requirements.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <img
                src={service.img}
                alt={`${service.title} by HAVENCRAFT Remodeling`}
                loading="lazy"
                width="400"
                height="420"
              />
              <div className="service-card-overlay">
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <a
                  href="#section-contact"
                  className="btn-main"
                  style={{ padding: '8px 20px', fontSize: '13px' }}
                  aria-label={`Get details for ${service.title}`}
                >
                  <span>Get Details</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
