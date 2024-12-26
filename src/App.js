import React from 'react';
import { useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import OurProducts from './pages/ourproducts/OurProducts';
import ContactUs from './pages/contactus/ContactUs';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Team from './pages/team/Team';
import Default from './pages/default/Default';
import WhyUS from './pages/whyus/WhyUs';
import AboutUs from './pages/aboutus/AboutUs';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <div className="content">
        {location.pathname === '/' && <Default />}
        {location.pathname === '/home' && <Home />}
        {location.pathname === '/aboutus' && <AboutUs />}
        {location.pathname === '/whyus' && <WhyUS />}
        {location.pathname === '/ourproducts' && <OurProducts />}
        {location.pathname === '/contactus' && <ContactUs />}
        {location.pathname === '/team' && <Team />}
      </div>
      <Footer /> 
    </>
  );
}

export default App;