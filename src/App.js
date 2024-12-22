import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Product from './pages/products/Product';
import Contact from './pages/contact/Contact';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Team from './pages/team/Team';

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;