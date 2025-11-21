// Checkout.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { product } from "../data/product";
import "../style/Checkout.css";

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [checkoutItem] = useState(product.find((p) => p.id === id));

  if (!checkoutItem) {
    return <h2 className="not-found">❌ Produk tidak ditemukan</h2>;
  }

  const handleConfirm = () => {
    // Ambil keranjang lama dari localStorage
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Cek apakah produk sudah ada di keranjang
    const existingIndex = existingCart.findIndex((p) => p.id === checkoutItem.id);

    if (existingIndex !== -1) {
      // Tambahkan quantity jika produk sudah ada
      existingCart[existingIndex].quantity =
        (existingCart[existingIndex].quantity || 0) + 1;
    } else {
      // Tambahkan produk baru dengan quantity = 1
      existingCart.push({ ...checkoutItem, quantity: 1 });
    }

    // Simpan kembali ke localStorage
    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    alert(`✅ Produk "${checkoutItem.name}" berhasil ditambahkan ke keranjang!`);

    // Redirect langsung ke halaman store
    navigate("/store");
  };

  return (
    <section className="checkout-container">
      <h2 className="checkout-title">🛒 Checkout</h2>

      <div className="checkout-card">
        <img
          src={checkoutItem.img}
          alt={`Cover buku ${checkoutItem.name}`}
          className="checkout-image"
        />
        <div className="checkout-info">
          <h3>{checkoutItem.name}</h3>
          <p>Kategori: {checkoutItem.type}</p>
          <p>Harga: Rp {checkoutItem.price.toLocaleString()}</p>
        </div>
      </div>

      <button className="confirm-button" onClick={handleConfirm}>
        ✅ Tambahkan ke Keranjang
      </button>
    </section>
  );
};

export default Checkout;