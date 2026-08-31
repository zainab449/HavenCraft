import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    { id: 1, title: 'Modern Kitchen Remodel', category: 'Kitchen', img: '/images/projects/1.webp' },
    { id: 2, title: 'Luxury Master Bath', category: 'Bathroom', img: '/images/projects/2.webp' },
    { id: 3, title: 'Open-Concept Living Room', category: 'Living', img: '/images/projects/3.webp' },
    { id: 4, title: 'Exterior Facade Upgrade', category: 'Exterior', img: '/images/projects/4.webp' },
    { id: 5, title: 'Custom Millwork & Kitchen', category: 'Kitchen', img: '/images/projects/5.webp' }
  ];

  const categories = ['All', 'Kitchen', 'Bathroom', 'Living', 'Exterior'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="section-projects" className="section-padding" aria-label="Completed Remodeling Projects Showcase">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 30px' }}>
          <div className="subtitle">Latest Projects</div>
          <h2 className="section-title">Crafted with Passion</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Explore our showcase of completed home renovation and remodeling projects.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="filter-tabs" role="tablist" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeFilter === cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedImage(project)}
              role="button"
              tabIndex={0}
              aria-label={`View enlarged image for ${project.title}`}
              onKeyDown={(e) => { if (e.key === 'Enter') setSelectedImage(project); }}
            >
              <img
                src={project.img}
                alt={`${project.title} - HAVENCRAFT Remodeling`}
                loading="lazy"
                width="400"
                height="300"
              />
              <div className="project-overlay">
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px'
                }}>
                  <Eye size={22} color="#ffffff" />
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '4px', color: '#ffffff' }}>{project.title}</h3>
                <span style={{ fontSize: '14px', color: 'var(--primary)' }}>{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Project Preview Lightbox"
        >
          <div
            style={{ position: 'relative', maxWidth: '900px', width: '100%', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close project preview"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(0,0,0,0.6)',
                border: 'none',
                color: '#fff',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.img}
              alt={selectedImage.title}
              width="900"
              height="600"
              style={{ width: '100%', maxHeight: '80vh', objectFit: 'contain', background: '#000' }}
            />
            <div style={{ padding: '20px', background: '#16191e', color: '#fff' }}>
              <h3 style={{ fontSize: '22px', marginBottom: '4px', color: '#ffffff' }}>{selectedImage.title}</h3>
              <p style={{ color: 'var(--primary)', fontSize: '14px' }}>Category: {selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
