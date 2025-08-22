import React from "react";
import { Main } from "./pages/Main/Main";

import { Route, Routes } from "react-router-dom";
import { Footer } from "./pages/Footer/Footer";
import { Navbar } from "./pages/Navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}
