import './App.css'
import image from './assets/img/76fcc5ee-e2e5-4fe7-bd5a-088156822456.gif'
import { useState, useEffect } from 'react'

const products = [
  {
    id: 1,
    name: 'Bình gốm nghệ thuật',
    description: 'Bình gốm thủ công, họa tiết tinh xảo, phù hợp trang trí phòng khách.',
    price: '450.000đ',
    image: image
  },
  {
    id: 2,
    name: 'Chén trà gốm sứ',
    description: 'Bộ chén trà gốm sứ cao cấp, men rạn cổ điển.',
    price: '320.000đ',
    image: image
  },
  {
    id: 3,
    name: 'Lọ hoa gốm',
    description: 'Lọ hoa gốm dáng cao, màu men xanh ngọc sang trọng.',
    price: '280.000đ',
    image: image
  },
  {
    id: 4,
    name: 'Lọ hoa gốm',
    description: 'Lọ hoa gốm dáng cao, màu men xanh ngọc sang trọng.',
    price: '280.000đ',
    image: image
  }
];

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="ceramic-app">
      <header className="ceramic-header">
        <img src={image} alt="Logo" className="ceramic-logo" />
        <h1>Cửa hàng Bé Nhi</h1>
        <p>Khám phá các sản phẩm gốm thủ công tinh xảo</p>
        <nav className="ceramic-nav">
          <a href="#products">Sản phẩm</a>
          <a href="#about">Giới thiệu</a>
          <a href="#contact">Liên hệ</a>
        </nav>
      </header>

      <div className="search-container">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <section id="products" className="ceramic-products">
        {filteredProducts.map(product => (
          <div className="ceramic-card" key={product.id}>
            <div className="ceramic-card-inner">
              <img src={product.image} alt={product.name} className="ceramic-img" />
              <h2 className="ceramic-title">{product.name}</h2>
              <p className="ceramic-desc">{product.description}</p>
              <div className="ceramic-price">{product.price}</div>
              <button 
                className="ceramic-btn"
                onClick={() => setSelectedProduct(product)}
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        ))}
      </section>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}>×</button>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-img" />
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <div className="modal-price">{selectedProduct.price}</div>
            <button className="ceramic-btn">Thêm vào giỏ hàng</button>
          </div>
        </div>
      )}

      <section id="about" className="ceramic-about">
        <h2>Về chúng tôi</h2>
        <p>Gốm Nghệ Thuật là cửa hàng chuyên cung cấp các sản phẩm gốm thủ công cao cấp, mang đậm nét văn hóa truyền thống Việt Nam, phù hợp trang trí và làm quà tặng ý nghĩa.</p>
      </section>

      <section id="contact" className="ceramic-contact">
        <h2>Liên hệ</h2>
        <p>Email: gomnghethuat@example.com | ĐT: 0123 456 789</p>
        <div className="social-links">
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">📘 Facebook</a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">📸 Instagram</a>
          <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer" className="social-icon" title="TikTok">🎵 TikTok</a>
        </div>
      </section>

      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}

      <footer className="ceramic-footer">
        © {new Date().getFullYear()} Gốm Nghệ Thuật
      </footer>
    </div>
  )
}

export default App
