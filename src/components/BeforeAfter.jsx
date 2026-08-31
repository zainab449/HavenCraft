import React, { useState, useRef } from 'react';
import { Sliders } from 'lucide-react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--dark-bg)', color: '#ffffff' }} aria-label="Before and After Renovation Comparison">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px' }}>
          <div className="subtitle">Before &amp; After</div>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            From Outdated to Outstanding
          </h2>
          <p style={{ color: '#9ca3af' }}>
            Drag the slider horizontally to view the dramatic transformation achieved by our renovation specialists.
          </p>
        </div>

        <div
          ref={containerRef}
          className="ba-container"
          role="region"
          aria-label="Image comparison slider"
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
        >
          {/* Before Image (Background) */}
          <img
            src="/images/before-after/1b.webp"
            alt="Before Renovation Room State"
            loading="lazy"
            width="1000"
            height="480"
            className="ba-image"
          />
          <span style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(0,0,0,0.6)',
            color: '#fff',
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '1px'
          }}>
            BEFORE
          </span>

          {/* After Image (Clipped overlay) */}
          <div
            className="ba-after"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src="/images/before-after/1a.webp"
              alt="After Renovation Modernized Room State"
              loading="lazy"
              width="1000"
              height="480"
              className="ba-image"
              style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '1000px', maxWidth: 'none' }}
            />
            <span style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              background: 'var(--primary)',
              color: '#fff',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '1px'
            }}>
              AFTER
            </span>
          </div>

          {/* Slider Line & Handle */}
          <div
            className="ba-slider-line"
            style={{ left: `${sliderPosition}%` }}
          >
            <div
              className="ba-slider-handle"
              role="slider"
              aria-label="Drag slider to compare before and after"
              aria-valuenow={Math.round(sliderPosition)}
              aria-valuemin={0}
              aria-valuemax={100}
              tabIndex={0}
            >
              <Sliders size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
