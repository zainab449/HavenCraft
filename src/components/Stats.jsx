import React from 'react';
import { Award, CheckCircle2, ThumbsUp, Headphones } from 'lucide-react';

export default function Stats() {
  const statsList = [
    { icon: <Award size={24} />, count: '15+', label: 'Years of Experience' },
    { icon: <CheckCircle2 size={24} />, count: '900+', label: 'Projects Completed' },
    { icon: <ThumbsUp size={24} />, count: '98%', label: 'Client Satisfaction' },
    { icon: <Headphones size={24} />, count: '24/7', label: 'Dedicated Support' }
  ];

  return (
    <section className="stats-banner">
      <div className="container">
        <div className="stats-grid">
          {statsList.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div>
                <div className="stat-number">{stat.count}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
