// Routing.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MainContent from "../pages/Store";
import Kontak from "../pages/Kontak";
import Nav from "./Nav";
import LoginForm from "../pages/Login";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<LoginForm />} />
      <Route
        path="/Store"
        element={
          <>
            <Nav />
            <MainContent />
          </>
        }
      />
      <Route
        path="/Kontak"
        element={
          <>
            <Nav />
            <Kontak />
          </>
        }
      />
    </Routes>
  );
}