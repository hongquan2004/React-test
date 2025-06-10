import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext.jsx';
import './MiniCart.css';

const MiniCart = ({ show, onClose }) => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  if (!show) return null;

  return (
    <div className="minicart-overlay" onClick={onClose}>
      <div className="minicart" onClick={e => e.stopPropagation()}>
        <h3>Giỏ hàng</h3>
        {cart.length === 0 ? (
          <div className="minicart-empty">Chưa có sản phẩm nào.</div>
        ) : (
          <ul className="minicart-list">
            {cart.map((item, idx) => (
              <li key={idx} className="minicart-item">
                <img src={item.image} alt={item.name} className="minicart-img" />
                <div className="minicart-info">
                  <div className="minicart-name">{item.name}</div>
                  <div className="minicart-price">{item.price}</div>
                </div>
                <button className="minicart-remove" onClick={() => removeFromCart(item.id)} title="Xóa">
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="minicart-actions">
          <button className="minicart-clear" onClick={clearCart} disabled={cart.length === 0}>Xóa tất cả</button>
          <button className="minicart-close" onClick={onClose}>Đóng</button>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;