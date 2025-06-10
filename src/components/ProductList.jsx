import React from 'react';

const ProductList = ({ products, onSelect }) => (
  <section id="products" className="ceramic-products">
    {products.map(product => (
      <ProductCard key={product.id} product={product} onSelect={onSelect} />
    ))}
  </section>
);

import ProductCard from './ProductCard';
export default ProductList;
