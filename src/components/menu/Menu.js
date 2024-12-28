import React, { useState } from 'react';
import './menu.css'; // Import your CSS file

const themes = {
  light: {
    background: '#ffffff',
    color: '#000000',
    hoverBackground: '#e0e0e0',
  },
  dark: {
    background: '#121212',
    color: '#ffffff',
    hoverBackground: '#333333',
  },
  blue: {
    background: '#2196f3',
    color: '#ffffff',
    hoverBackground: '#1976d2',
  },
};

const menuItems = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Services', link: '/services' },
  { label: 'Contact', link: '/contact' },
];

function Menu() {
  const [currentTheme, setCurrentTheme] = useState('light');

  const handleThemeChange = (themeName) => {
    setCurrentTheme(themeName);
  };

  const menuStyle = {
    backgroundColor: themes[currentTheme].background,
    color: themes[currentTheme].color,
  };

  const menuItemStyle = {
    padding: '10px 20px',
    textDecoration: 'none',
    color: themes[currentTheme].color,
    transition: 'background-color 0.3s', // Smooth hover effect
    borderRadius: '5px'
  };

  const menuItemHoverStyle = {
    backgroundColor: themes[currentTheme].hoverBackground,
  };

  return (
    <div className="menu-container" style={menuStyle}>
      <div className="theme-buttons">
        {Object.keys(themes).map((themeName) => (
          <button
            key={themeName}
            onClick={() => handleThemeChange(themeName)}
            style={{
              backgroundColor: themes[themeName].background,
              color: themes[themeName].color,
              margin: '5px',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {themeName}
          </button>
        ))}
      </div>
      <ul className="menu">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.link}
              style={{...menuItemStyle}}
              onMouseOver={(e) => Object.assign(e.target.style, menuItemHoverStyle)}
              onMouseOut={(e) => Object.assign(e.target.style, menuItemStyle)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;