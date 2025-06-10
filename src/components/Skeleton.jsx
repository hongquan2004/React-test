import React from 'react';
import './Skeleton.css';

const Skeleton = () => (
  <div className="skeleton-list">
    {[...Array(4)].map((_, i) => (
      <div className="skeleton-card" key={i}>
        <div className="skeleton-img" />
        <div className="skeleton-line skeleton-title" />
        <div className="skeleton-line skeleton-desc" />
        <div className="skeleton-line skeleton-price" />
      </div>
    ))}
  </div>
);

export default Skeleton;