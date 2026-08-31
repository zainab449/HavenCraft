import React, { useState } from 'react';
import { Send, Clock, MapPin, Mail, Phone, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Kitchen Remodeling',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Kitchen Remodeling',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="section-contact" className="section-padding" aria-label="Contact and Consultation Request">
      <div className="container">
        <div className="contact-grid">
          
          {/* Left Form */}
          <div>
            <div className="subtitle">Get In Touch</div>
            <h2 className="section-title">Request a Consultation</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
              Fill out the form below to discuss your project vision with our senior remodeling specialists.
            </p>

            {submitted ? (
              <div
                style={{
                  padding: '24px',
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid #22c55e',
                  borderRadius: 'var(--radius-md)',
                  color: '#15803d',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
                role="alert"
              >
                <CheckCircle size={28} />
                <div>
                  <h3 style={{ fontSize: '18px', marginBottom: '2px', color: '#15803d' }}>Thank You!</h3>
                  <p style={{ fontSize: '14px', margin: 0 }}>Your request has been received. Our team will contact you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} aria-label="Contact Consultation Form">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      aria-required="true"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      aria-required="true"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="form-control"
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Required</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-control"
                      aria-label="Select a renovation service"
                    >
                      <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                      <option value="Bathroom Renovation">Bathroom Renovation</option>
                      <option value="Whole Home Renovation">Whole Home Renovation</option>
                      <option value="Interior Remodeling">Interior Remodeling</option>
                      <option value="Exterior Facade Upgrade">Exterior Facade Upgrade</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    aria-required="true"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your renovation ideas, goals, timeline, or approximate budget..."
                    className="form-control"
                  ></textarea>
                </div>

                <button type="submit" className="btn-main" style={{ width: '100%' }} aria-label="Submit your consultation request">
                  <span>Submit Inquiry</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Right Info Box */}
          <div style={{
            background: 'var(--dark-bg)',
            color: '#ffffff',
            padding: '40px',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <h3 style={{ fontSize: '24px', color: '#ffffff', marginBottom: '24px' }}>Contact Information</h3>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '44px' }}>
                <Clock size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '16px', color: '#ffffff', marginBottom: '4px' }}>Working Hours</h4>
                <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0 }}>Monday - Saturday: 8:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '44px' }}>
                <MapPin size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '16px', color: '#ffffff', marginBottom: '4px' }}>Office Location</h4>
                <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0 }}>100 S Main Street, New York, NY 10001</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '44px' }}>
                <Mail size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '16px', color: '#ffffff', marginBottom: '4px' }}>Email Us</h4>
                <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0 }}>contact@havencraftremodeling.com</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '44px' }}>
                <Phone size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '16px', color: '#ffffff', marginBottom: '4px' }}>Call Us</h4>
                <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0 }}>+1 (800) 123-4567</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
