import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { product } from '../data/product';
import '../style/Detail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = product.find(p => p.id === id);

  if (!item) {
    return <h2 className="not-found">❌ Produk tidak ditemukan</h2>;
  }

  const handleCheckout = () => {
    navigate(`/checkout/${id}`);
  };

  return (
    <section className="detail-container">
      <button className="back-button" onClick={() => navigate('/store')}>
        ⬅ Kembali ke Store
      </button>

      <div className="detail-card">
        <div className="detail-image">
          <img src={item.img} alt={`Cover buku ${item.name}`} />
        </div>

        <div className="detail-info">
          <h2 className="detail-title">{item.name}</h2>
          <p>Kategori: {item.type}</p>
          <p>Harga: Rp {item.price.toLocaleString()}</p>
          <p>Deskripsi: {item.description}</p>
          <p>Sinopsis: {item.synopsis}</p>

          <button className="checkout-button" onClick={handleCheckout}>
            🛒 Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;