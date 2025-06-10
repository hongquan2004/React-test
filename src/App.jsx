import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import SlideShow from './components/SlideShow.jsx';
import SearchBar from './components/SearchBar.jsx';
import ProductList from './components/ProductList.jsx';
import ProductModal from './components/ProductModal.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import FAB from './components/FAB.jsx';
import Skeleton from './components/Skeleton.jsx';
import './App.css';
import LogoImg from './assets/img/Logo.png';
import item1 from './assets/img/item/item1.jpg';
import item2 from './assets/img/item/item2.jpg';
import item3 from './assets/img/item/item3.jpg';
import item4 from './assets/img/item/item4.jpg';
const products = [
  {
    id: 1,
    name: 'Bình gốm nghệ thuật',
    description: 'Bình gốm thủ công, họa tiết tinh xảo, phù hợp trang trí phòng khách.',
    price: '450.000đ',
    image: item1
  },
  {
    id: 2,
    name: 'Chén trà gốm sứ',
    description: 'Bộ chén trà gốm sứ cao cấp, men rạn cổ điển.',
    price: '320.000đ',
    image: item2
  },
  {
    id: 3,
    name: 'Lọ hoa gốm',
    description: 'Lọ hoa gốm dáng cao, màu men xanh ngọc sang trọng.',
    price: '280.000đ',
    image: item3
  },
  {
    id: 4,
    name: 'Lọ hoa gốm',
    description: 'Lọ hoa gốm dáng cao, màu men xanh ngọc sang trọng.',
    price: '280.000đ',
    image: item4
  }
];

function AppContent() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={"ceramic-app" + (darkMode ? " dark" : "") }>
      <Header image={LogoImg} className="header-wave">
        <button
          className="dark-toggle-btn"
          onClick={() => setDarkMode(dm => !dm)}
          title={darkMode ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
        >
          {darkMode ? '🌙' : '☀️'}
        </button>
      </Header>
      <section className="hero-section">
        <SlideShow />
        {/* Họa tiết hoa, mây, bướm trang trí */}
        <div className="hero-decor decor-flower" />
        <div className="hero-decor decor-star" />
        <div className="hero-decor decor-butterfly" />
      </section>
      <section className="product-section">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h2 className="product-title">
          <span className="product-title-bg">top sellers</span>
        </h2>
        {loading ? <Skeleton /> : <ProductList products={filteredProducts} onSelect={setSelectedProduct} />}
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </section>
      <section className="about-section">
        <About id="about"/>
      </section>
      <section className="contact-section">
        <Contact id="contact"/>
      </section>
      <BackToTop show={showBackToTop} onClick={scrollToTop} />
      <FAB />
      <Footer className="footer-wave" />
    </div>
  );
}

function App() {
  return (
    <AppContent />
  );
}

export default App;
