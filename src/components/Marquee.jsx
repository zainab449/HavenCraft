import React from 'react';

export default function Marquee() {
  const items = [
    'Luxury Kitchen Remodeling',
    'Modern Bathroom Renovation',
    'Complete Home Makeovers',
    'Custom Interior Remodeling',
    'Premium Home Additions',
    'Exterior Facade Upgrades',
    'Open Concept Living',
    'Custom Cabinet Solutions',
    'Elegant Flooring Designs',
    'Energy Efficient Renovations'
  ];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-content">
        {items.concat(items).map((item, idx) => (
          <span key={idx} style={{ opacity: idx % 2 === 0 ? 1 : 0.6 }}>
            {item} &nbsp; • &nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
