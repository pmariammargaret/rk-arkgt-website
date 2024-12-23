import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const LeftSideMenu = ({ onMenuItemClick, selectedMenuItem }) => {
  const menuItems = ['INNOVATION', 'PERFORMANCE', 'RELIABILITY', 'QUALITY'];

  return (
    <List>
      {menuItems.map((item) => (
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
  const content = {
    INNOVATION: {
      title: "Innovation",
      description: "We constantly strive to develop cutting-edge solutions that push the boundaries of what's possible. Our commitment to innovation drives us to explore new technologies and methodologies to deliver exceptional results for our clients."
    },
    PERFORMANCE: {
      title: "Performance",
      description: "We are dedicated to achieving outstanding performance in every aspect of our work. From efficient processes to high-quality deliverables, we focus on maximizing value and exceeding expectations. Our relentless pursuit of excellence ensures that our clients receive the best possible outcomes."
    },
    RELIABILITY: {
      title: "Reliability",
      description: "We understand the importance of trust and dependability. Our clients rely on us to deliver consistent, high-quality services and solutions. We are committed to maintaining the highest standards of professionalism and integrity to ensure that our clients can always count on us."
    },
    QUALITY: {
      title: "Quality",
      description: "We are committed to delivering exceptional quality in everything we do. Our rigorous quality assurance processes and attention to detail ensure that our clients receive products and services that meet the highest standards. We are dedicated to continuous improvement and strive to exceed expectations in every project we undertake."
    }
  };

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Typography variant="h4" fontWeight="bold" color="black" gutterBottom align='center'>
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
            <ContentBox  title={content[selectedMenuItem].title} description={content[selectedMenuItem].description} />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};
export default WhyUs;