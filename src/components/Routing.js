import React from "react";
import { Route, Routes } from "react-router-dom";
import MainContent from "../pages/Store";
import Kontak from "../pages/Kontak";

export default function Routing () {
    return(
        <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/Kontak" element={<Kontak />} />
        </Routes>
    );
}