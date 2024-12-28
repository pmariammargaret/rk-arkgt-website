import React from 'react';
import ContactUs from '../contactus/ContactUs';
import Home from '../home/Home';
import WhyUs from '../whyus/WhyUs';
import AboutUs from '../aboutus/AboutUs';
import HL from '../../components/html/HL';
import OurProducts from '../ourproducts/OurProducts';

function Default() {
    return (
      <div style={{ color: 'black', padding: '20px', paddingTop: '80px' }}>
          <Home /> 
          <HL />
          <AboutUs />  
          <HL />
          <OurProducts />  
          <HL />
          <WhyUs />       
          <HL />
          <ContactUs />
        </div>
      );
    }

export default Default;