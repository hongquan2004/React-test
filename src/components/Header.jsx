import React from 'react';

const Header = ({ image, children }) => (
  <header className="ceramic-header">
    <img src={image} alt="Logo" className="ceramic-logo" />
    <h1>Gốm Nhà Vịt</h1>
    <p>Khám phá các sản phẩm gốm thủ công tinh xảo</p>
    <nav className="ceramic-nav">
      <a href="#products">Sản phẩm</a>
      <a href="#about" onClick={e => {
        e.preventDefault();
        const el = document.getElementById('about');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }}>Giới thiệu</a>
      <a href="#contact" onClick={e => {
        e.preventDefault();
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }}>Liên hệ</a>
    </nav>
    {children}
  </header>
);

export default Header;
