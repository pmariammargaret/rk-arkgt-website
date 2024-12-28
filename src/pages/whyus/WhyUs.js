import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import websiteData from '../../data/website_config.js';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const LeftSideMenu = ({ onMenuItemClick, selectedMenuItem }) => {
  return (
    <List>
      {websiteData.pages.whyus.menuItems.map((item) => (
        <ListItem key={item} disablePadding>
          <ListItemButton
            selected={selectedMenuItem === item}
            onClick={() => onMenuItemClick(item)}
          >
            <ListItemText primary={item} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

const ContentBox = ({ title, description }) => {
  return (
    <Item>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" sx = {{padding: 3 }}>
        {description}
      </Typography>
    </Item>
  );
};

const WhyUs = () => {
  const [selectedMenuItem, setSelectedMenuItem] = React.useState('INNOVATION');

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 7, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Typography fontWeight="bold" gutterBottom align='center' variant="h6" component="div" style={{ color: 'black', fontSize: '36px', fontWeight: '', fontFamily: 'GillSansUltraBold', marginLeft: '10px' }}>
        Why Us
      </Typography>
      <Box sx={{ display: 'flex', height: '100%' }}>
        <Box sx={{ width: '30%', display: 'flex', flexDirection: 'column' }}>
          <Paper elevation={3} sx={{ flexGrow: 1, overflow: 'auto' }}>
            {/* Important: added overflow auto so that if menu items are more it shows scrollbar */}
            <LeftSideMenu onMenuItemClick={handleMenuItemClick} selectedMenuItem={selectedMenuItem} />
          </Paper>
        </Box>
        <Box sx={{ width: '70%', pl: 2, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <Paper elevation={3} sx={{ flexGrow: 1, padding: 2 }}>
            <ContentBox  title={websiteData.pages.whyus.menuItemsDetails[selectedMenuItem].title} description={websiteData.pages.whyus.menuItemsDetails[selectedMenuItem].description} />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};
export default WhyUs;