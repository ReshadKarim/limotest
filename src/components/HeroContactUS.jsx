import React from "react";
import backgroundImage from "/HS3.png"; // Import the image from the public folder

function HeroContactUS() {
  return (
    <div
      className='relative font-[Outfit] h-64 md:h-[500px] flex justify-center items-center bg-black bg-center bg-cover'
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use the imported image
      }}
    >
      {/* Contact Us Text */}
      <h1 className='relative text-white text-3xl md:text-5xl lg:text-6xl font-bold z-10 text-center px-4'>
        CONTACT US
      </h1>
    </div>
  );
}

export default HeroContactUS;
