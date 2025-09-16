import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function ReviewCart({ reviews, slidesToShow = 3 }) {
  const settings = {
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: slidesToShow,
    speed: 500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768, // small tablets
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480, // mobile
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };
  return (
    <div className="w-full py-10 ">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="px-4">
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <FaQuoteLeft className="text-3xl text-blue-500 mb-4" />
              <p className="text-gray-700 mb-6">{review.text}</p>
              <div className="flex items-center mt-4">
                {/* <img
                  src={review.photo}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                /> */}
                <div>
                  <h4 className="font-semibold text-black">{review.name}</h4>
                  <p className="text-gray-500 text-sm">{review.profession}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
