import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Liên hệ</h2>
    <div className="contact-list">
      <div className="contact-item">
        <span className="contact-icon" role="img" aria-label="phone">📞</span>
        <span>Hotline: <a href="tel:0123456789">0123 456 789</a></span>
      </div>
      <div className="contact-item">
        <span className="contact-icon" role="img" aria-label="email">✉️</span>
        <span>Email: <a href="mailto:gomthucong@example.com">gomthucong@example.com</a></span>
      </div>
      <div className="contact-item">
        <span className="contact-icon" role="img" aria-label="location">📍</span>
        <span>Địa chỉ: 123 Đường Gốm, Quận 1, TP.HCM</span>
      </div>
    </div>
  </section>
);

export default Contact;
