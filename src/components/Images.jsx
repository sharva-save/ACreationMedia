import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images directly from your assets
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img10,
  img11,
  img9,
} from "../assets";

const Images = () => {
  const sliderRef = useRef(null);

  // Array of your project images
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img10,
    img11,
    img9,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl p-3 text-center">My Works</h1>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg object-contain"
              style={{ height: "500px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Images;
