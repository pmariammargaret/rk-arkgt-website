import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const MenuHB = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="menu"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="black" // Or specify a color
      >
        <MenuIcon /> {/* Use the MenuIcon */}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/whyus">Why Us</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/ourproduct">Our Product</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/contactus">Contact Us</MenuItem>
      </Menu>
    </>
  );
};

export default MenuHB;