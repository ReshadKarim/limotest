import React from "react";
import background from "/HS2.png";
import logo from "/LLL.png";
import logos from "/LLLs.png";

function HeroBanner() {
  return (
    <div
      className='relative bg-black flex items-center justify-center py-10 sm:py-16'
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Mobile background logo */}
      <div
        className='absolute inset-0 bg-center bg-no-repeat opacity-20 sm:hidden'
        style={{
          backgroundImage: `url(${logos})`,
          backgroundSize: "50%", // Adjust this value to make the logo smaller
          backgroundPosition: "center",
        }}
      ></div>

      {/* Container for responsive design */}
      <div className='container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Left Section (Text and Buttons) */}
        <div className='text-white max-w-xl space-y-6 text-center md:text-left mt-8 md:mt-0'>
          <p className='text-lg sm:text-xl font-bold'>Software That Will</p>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold uppercase leading-snug'>
            Elevate Your <br /> Limousine Business <br /> To <br /> Exquisite
            Height
          </h1>
          <div className='flex justify-center md:justify-start space-x-4'>
            <button className='bg-red-900 text-white font-bold py-2 sm:py-3 px-8 sm:px-10 md:px-12 rounded-full shadow-lg hover:bg-red-700 transition duration-300'>
              Watch Video
            </button>
            <button
              onClick={() => (window.location.href = "/signup")}
              className='border-2 border-red-900 text-white font-bold py-2 sm:py-3 px-8 sm:px-10 md:px-12 rounded-full shadow-lg hover:bg-red-700 transition duration-300'
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Right Section (Logo for larger screens) */}
        <div className='hidden sm:flex md:ml-8'>
          <img
            src={logo}
            alt='Logo'
            className='w-48 sm:w-56 md:w-72 lg:w-[400px] xl:w-[500px] object-contain'
          />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;