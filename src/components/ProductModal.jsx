import React from 'react';

const ProductModal = ({ product, onClose, onAddToCart }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <button className="modal-close" onClick={onClose}>×</button>
      <img src={product.image} alt={product.name} className="modal-img" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <div className="modal-price">{product.price}</div>
      <button className="ceramic-btn" onClick={onAddToCart}>Thêm vào giỏ hàng</button>
    </div>
  </div>
);

export default ProductModal;
