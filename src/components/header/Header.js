import React, { useEffect } from 'react';
import { AppBar, Box, Typography, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import MenuHB from '../menu/MenuHB';
import './header.css'; // Import your CSS file
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import websiteData  from '../../data/website_config.js';


const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between', // Distribute items along the toolbar
  alignItems: 'center'
});

const setFavicon = (faviconUrl) => {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.href = faviconUrl;
  document.head.appendChild(link);
};


function Header()  {
  useEffect(() => {
     //Set the favicon when the component mounts
    setFavicon(websiteData.favicon);
  }, []);


  return (
    <div>
      <Box sx={{ flexGrow: 1 }} className="light-header"> {/* Use the light-header class */}
        <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
          <StyledToolbar> {/* Use the styled Toolbar */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={`${websiteData.resPrefix}${websiteData.logo}`} alt="ARK Logo" width="60" height="60" />
              <Typography fontWeight="bold" variant="h6" component="div" style={{ color: 'black', fontSize: '36px', fontWeight: '', fontFamily: 'GillSansUltraBold', marginLeft: '10px' }}>
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                  {websiteData.companyName}
                </Link>
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" component="div" style={{ marginRight: '20px', fontSize: '14px', fontWeight: '',fontFamily: 'GillSansUltraBold', marginLeft: '10px', color: 'black'  }}>
                <EmailIcon style={{ marginRight: '5px', height: '12px', width: '12px' }} />
                <a href={`mailto:${websiteData.email}`} style={{ color: 'black' }}>
                  {websiteData.email}
                </a>
                <PhoneIcon style={{ marginRight: '5px', height: '12px', width: '12px' }} />
                <a href={`tel:${websiteData.phone}`} style={{ color: 'black' }}>
                  {websiteData.phone}
                </a>
              </Typography>
              <MenuHB />
            </div>
          </StyledToolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;