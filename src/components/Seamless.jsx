import React from "react";
import responsivephoto from "/Responsive.png";

function Seamless() {
  return (
    <section className='w-full bg-white font-[Outfit] py-20 px-6 md:px-20 lg:px-40 xl:px-60'>
      {/* Upper Header Section */}
      <div className='text-center mb-12 mt-[-50px] md:mt-[-80px]'>
        <p
          className='text-black font-bold text-base md:text-lg'
          data-aos='fade-up'
        >
          Throughout every Device
        </p>
        <h2 className='text-2xl md:text-3xl font-bold' data-aos='fade-up'>
          RESPONSIVE AND SEAMLESS
        </h2>
      </div>

      {/* Container for two-column layout (reversed for mobile) */}
      <div className='container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10'>
        {/* Left Section with Text and Button (for mobile below the image) */}
        <div className='flex flex-col justify-center items-center md:items-start text-center md:text-left'>
          <p
            className='text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-snug mb-6'
            data-aos='fade-up'
            style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}
          >
            MANAGE YOUR <br />
            BUSINESS <br />
            FROM ANY <br />
            DEVICE
          </p>

          <button
            className='relative mt-8 px-12 py-2 md:px-24 lg:px-32 border-4 border-red-900 text-black font-bold rounded-full bg-transparent overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-red-900 before:translate-y-full before:transition-transform before:duration-300 hover:before:translate-y-0 hover:shadow-xl hover:text-white whitespace-nowrap'
            data-aos='fade-up'
          >
            <span className='relative z-10'>Check It Out</span>
          </button>
        </div>

        {/* Right Section with Image (for mobile above the text) */}
        <div className='flex justify-center' data-aos='fade-up'>
          <img
            src={responsivephoto}
            alt='Responsive devices'
            className='max-w-full h-auto object-cover'
          />
        </div>
      </div>
    </section>
  );
}

export default Seamless;
