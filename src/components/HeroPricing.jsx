import React from "react";
import backgroundImage from "/HS3.png";

function HeroPricing() {
  return (
    <div
      className='relative font-[Outfit] h-64 md:h-[500px] flex justify-center items-center bg-black bg-center bg-cover'
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Pricing Text */}
      <h1 className='relative text-white text-3xl md:text-5xl lg:text-6xl font-bold z-10 text-center px-4'>
        PRICING
      </h1>
    </div>
  );
}

export default HeroPricing;
