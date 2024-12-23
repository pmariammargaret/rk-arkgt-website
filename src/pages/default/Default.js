import React from 'react';
import Product from '../products/Product';
import Team from '../team/Team';
import ContactUs from '../contactus/ContactUs';
import Home from '../home/Home';
import WhyUs from '../whyus/WhyUs';
import AboutUs from '../aboutus/AboutUs';
import HL from '../../components/html/HL';

function Default() {
    return (
      <div style={{ color: 'black', padding: '20px', paddingTop: '80px' }}>
          <Home /> 
          <HL />
          <AboutUs />  
          <WhyUs />       
          <HL />
          <Product />
          <HL />
          <Team />
          <HL />
          <ContactUs />
          Defa
        </div>
      );
    }

export default Default;