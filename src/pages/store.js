import React from 'react';
import { product } from '../data/product';
import { useNavigate } from 'react-router-dom';
import '../style/store.css';

const MainContent = () => {
  const navigate = useNavigate();

  const handleViewProduct = (id) => {
    navigate(`/store/${id}`);
  };

  return (
    <main className="main-content">
      <h2 className="section-title">📚 Koleksi Buku</h2>
      <div className="product-grid">
        {Array.isArray(product) && product.length > 0 ? (
          product.map((item) => (
            <div className="product-card" key={item.id}>
              <img
                src={item.img}
                alt={`Cover buku ${item.name}`}
                className="product-image"
              />
              <h3 className="product-name">{item.name}</h3>
              <p className="product-type">{item.type}</p>
              <p className="product-price">Rp {item.price.toLocaleString()}</p>
              <button
                className="product-button"
                onClick={() => handleViewProduct(item.id)}
              >
                Lihat Produk
              </button>
            </div>
          ))
        ) : (
          <p>Tidak ada produk tersedia.</p>
        )}
      </div>
    </main>
  );
};

export default MainContent;