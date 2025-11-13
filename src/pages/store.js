import React from 'react';
import { product } from '../data/product'; 
import '../style/store.css';

const MainContent = () => {
  return (
    <main className="main-content">
      <h2 className="section-title">📚 Koleksi Buku</h2>
      <div className="product-grid">
        {product.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.img} alt={item.name} className="product-image" />
            <h3 className="product-name">{item.name}</h3>
            <p className="product-type">{item.type}</p>
            <p className="product-price">Rp {item.price.toLocaleString()}</p>
            <button className="product-button">Tambah ke Keranjang</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;