import React from "react";
import icon1 from "/DriverApplication.png";
import icon2 from "/DispatchSystem.png";
import icon3 from "/PassengerApplication.png";
import icon4 from "/WebsiteDevelopment.png";
import icon5 from "/AddonModules.png";
import icon6 from "/BookingSystem.png";

const products = [
  {
    title: "DRIVER APPLICATION",
    description:
      "Effortlessly oversee your fleet with our cutting-edge driver app, empowering your drivers to seamlessly receive, manage, and complete trips in real-time.",
    icon: icon1, // Use the imported icon here
  },
  {
    title: "DISPATCH SYSTEM",
    description:
      "Limoload provides all-in-one desktop and mobile solutions for booking, scheduling, dispatching, and reservation management. Its robust features and user-friendly design are essential for livery businesses looking to enhance productivity and grow effectively.",
    icon: icon2,
  },
  {
    title: "PASSENGER APPLICATION",
    description:
      "Our Passenger Web App (PWA) seamlessly enables customers to book rides, manage accounts, and track journeys with real-time updates and precise driver GPS, all at their fingertips on any mobile device.",
    icon: icon3,
  },
  {
    title: "WEBSITE DEVELOPMENT",
    description:
      "Our mobile-responsive website templates, powered by our advanced Content Management System, enable you to swiftly and affordably launch your new website with ease.",
    icon: icon4,
  },
  {
    title: "ADDON MODULES",
    description:
      "Customizable addons at reasonable prices, crafted to empower seamless and efficient business operations.",
    icon: icon5,
  },
  {
    title: "BOOKING SYSTEM",
    description:
      "Crafted specifically for the limousine industry, our swift, seamless booking process and feature-rich dashboard empower you to rival national brands, all while maintaining your unique brand identity.",
    icon: icon6,
  },
];

const ImpProducts = () => {
  return (
    <div className='bg-white font-[Outfit] py-16'>
      {/* Section title */}
      <div className='text-center mb-16 px-4'>
        <h2
          className='text-2xl md:text-3xl font-bold uppercase'
          data-aos='fade-up'
        >
          Impactful Products
        </h2>
        <p
          className='text-sm md:text-base font-bold text-black mt-2'
          data-aos='fade-up'
        >
          Which Will Enhance Your Business To Unprecedented Heights
        </p>
      </div>

      {/* Top three products */}
      <div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-screen-lg mx-auto px-4'
        data-aos='fade-up'
      >
        {products.slice(0, 3).map((product, index) => (
          <div
            key={index}
            className='bg-[#D9D9D9] p-6 rounded-xl shadow-xl text-center transform transition-transform duration-300 hover:scale-105 hover:border-2 hover:border-black'
          >
            <img
              src={product.icon}
              alt={product.title}
              className='h-16 md:h-20 mx-auto mb-4'
            />
            <h3 className='text-xl md:text-2xl font-bold mb-2'>
              {product.title}
            </h3>
            <p className='text-xs md:text-sm'>{product.description}</p>
          </div>
        ))}
      </div>

      {/* Bottom three products */}
      <div className='bg-[#262626] py-16 mt-16'>
        <div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 max-w-screen-lg mx-auto px-4'
          data-aos='fade-up'
        >
          {products.slice(3, 6).map((product, index) => (
            <div
              key={index}
              className='bg-[#D9D9D9] p-6 rounded-xl shadow-xl text-center transform transition-transform duration-300 hover:scale-105 hover:border-2 hover:border-white'
            >
              <img
                src={product.icon}
                alt={product.title}
                className='h-16 md:h-20 mx-auto mb-4'
              />
              <h3 className='text-xl md:text-2xl font-bold mb-2'>
                {product.title}
              </h3>
              <p className='text-xs md:text-sm'>{product.description}</p>
            </div>
          ))}
        </div>
        <div className='text-center mt-16' data-aos='fade-up'>
          <button
            onClick={() => (window.location.href = "/services")}
            className='relative px-10 md:px-16 py-3 border-2 border-[#9C0A0A] text-white font-bold rounded-full bg-transparent overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-red-900 before:translate-y-full before:transition-transform before:duration-300 hover:before:translate-y-0 hover:shadow-xl'
          >
            <span className='relative z-10'>Explore More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImpProducts;
