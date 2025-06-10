import React from 'react';

const BackToTop = ({ show, onClick }) => (
  show ? (
    <button className="back-to-top" onClick={onClick}>
      ↑
    </button>
  ) : null
);

export default BackToTop;
