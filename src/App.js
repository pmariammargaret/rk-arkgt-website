import React from 'react';
import { useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import Product from './pages/products/Product';
import Contact from './pages/contact/Contact';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Team from './pages/team/Team';
import Default from './pages/default/Default';
import WhyUS from './pages/whyus/WhyUs';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="content">
        {location.pathname === '/' && <Default />}
        {location.pathname === '/home' && <Home />}
        {location.pathname === '/whyus' && <WhyUS />}
        {location.pathname === '/product' && <Product />}
        {location.pathname === '/contact' && <Contact />}
        {location.pathname === '/team' && <Team />}
      </div>
      <Footer />
    </>
  );
}

export default App;