import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'; // Ensure you create and import a CSS file for custom styles
import websiteData from '../../data/website_config.js';


function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ color: 'black', padding: '20px', paddingTop: '0px' }}>
      <Slider {...settings}>
        {websiteData.pages.home.images.map((image, index) => (
          <div key={index} className="slider-item">
            <img src={`${websiteData.resPrefix}${image.src}`} alt={`Slide ${index}`} className="slider-image" />
            <div className="slider-text">{image.text}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Home;