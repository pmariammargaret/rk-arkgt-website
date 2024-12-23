import React from 'react';
import Product from '../products/Product';
import Team from '../team/Team';
import Contact from '../contact/Contact';
import Home from '../home/Home';
import WhyUs from '../whyus/WhyUs';

function Default() {
    return (
      <div style={{ color: 'black', padding: '20px', paddingTop: '80px' }}>
          <Home />  
          <WhyUs />       
          <Product />
          <Team />
          <Contact />
          Defa
        </div>
      );
    }

export default Default;