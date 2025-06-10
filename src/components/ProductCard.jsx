import React from 'react';

const ProductCard = ({ product, onSelect }) => (
  <div className="ceramic-card">
    <div className="ceramic-card-inner">
      <img src={product.image} alt={product.name} className="ceramic-img" />
      <h2 className="ceramic-title">{product.name}</h2>
      <p className="ceramic-desc">{product.description}</p>
      <div className="ceramic-price">{product.price}</div>
      <button className="ceramic-btn" onClick={() => onSelect(product)}>
        Xem chi tiết
      </button>
    </div>
  </div>
);

export default ProductCard;
