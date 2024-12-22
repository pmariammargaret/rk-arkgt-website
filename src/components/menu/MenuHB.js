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
        <MenuItem onClick={handleClose} component={Link} to="/home">Home</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/product">Product</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/contact">Contact</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/team">Team</MenuItem>
      </Menu>
    </>
  );
};

export default MenuHB;