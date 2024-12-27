import './footer.light.css'; // Import your CSS file
import React from 'react';
import HL from '../html/HL';
import websiteData from '../../data/website_config.js';

function Footer() {
  return (
    <div>
      <HL />
    <footer >
      <div className="footer-content">        
        <nav style={{ fontSize: '12px' }}>
            {websiteData.copyright} |
            {websiteData.companyName}, 
            {websiteData.address.address1}, {websiteData.address.address2} 
            {websiteData.address.city}, {websiteData.address.country} {websiteData?.address?.zip} |
            All rights reserved. |
            {/*<a href="">Terms</a> | 
            <a href="">Privacy</a> |*/}
            Website by MJ
        </nav>
      </div>
    </footer>
    </div>
  );
}

export default Footer;