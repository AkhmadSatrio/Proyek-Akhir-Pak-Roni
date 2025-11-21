// Routing.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MainContent from "../pages/Store";
import Kontak from "../pages/Kontak";
import Nav from "./Nav";
import LoginForm from "../pages/Login";
import ProductDetail from "../pages/Detail";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";
import Delivery from "../pages/Delivery";

export default function Routing() {
  return (
<Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/login" element={<LoginForm />} />
  <Route path="/store" element={<><Nav /><MainContent /></>} />
  <Route path="/kontak" element={<><Nav /><Kontak /></>} />
  <Route path="/store/:id" element={<ProductDetail />} />
  <Route path="/checkout/:id" element={<Checkout />} />
  <Route path="/cart" element={<><Nav /><Cart /></>} />
  <Route path="/delivery" element={<Delivery />} />
</Routes>
  );
}