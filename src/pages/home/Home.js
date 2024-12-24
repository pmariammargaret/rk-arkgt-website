import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'; // Ensure you create and import a CSS file for custom styles
import websiteData from '../../data/website_data.json';

const images = [
  { src: '/assets/images/home/home-slider-0-yourhappiness.jpg', text: 'Driven by Your Happiness' },
  { src: '/assets/images/home/home-slider-1-selectedrawmat.jpg', text: 'From Selected Raw Material' },
  { src: '/assets/images/home/home-slider-2-deliverwithcare.jpg', text: 'Delivered With Care' },
  { src: '/assets/images/home/home-slider-3-trackdelivery.jpg', text: 'Track Delivery' },
  { src: '/assets/images/home/home-slider-4-since.jpg', text: 'Since 2023' },
  { src: '/assets/images/home/home-slider-5-deliveredontime.jpg', text: 'Delivered on Time' },
  { src: '/assets/images/home/home-slider-6-quality.jpg', text: 'Quality First' }  
  // Add more images as needed 
];

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
        {images.map((image, index) => (
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