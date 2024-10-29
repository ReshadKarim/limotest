import React, { useState, useEffect } from "react";
import pricing1 from "/award 1.png";
import pricing2 from "/premium (1) 1.png";
import pricing3 from "/all-inclusive 1.png";

// Pricing Data based on trips per month
const pricingData = {
  150: { core: 105, plus: 399, black: 699 },
  450: { core: 130, plus: 499, black: 899 },
  750: { core: 155, plus: 599, black: 1099 },
  1500: { core: 225, plus: 899, black: 1599 },
  2250: { core: 295, plus: 1099, black: 1899 },
};

function PricingComponent() {
  const [trips, setTrips] = useState(150);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Function to determine screen size
  const updateScreenType = () => {
    const width = window.innerWidth;
    setIsMobile(width < 640); // Mobile screen
    setIsTablet(width >= 640 && width < 1024); // Tablet screen
  };

  useEffect(() => {
    updateScreenType(); // Check on initial load
    window.addEventListener("resize", updateScreenType); // Update on resize
    return () => window.removeEventListener("resize", updateScreenType); // Cleanup event listener
  }, []);

  const handleTripsChange = (e) => {
    setTrips(Number(e.target.value));
  };

  const { core, plus, black } = pricingData[trips];

  return (
    <div className='container mx-auto my-24 font-[Outfit]'>
      <h1 className='text-center text-5xl font-bold my-3' data-aos='fade-up'>
        Choose The Plan That's Right For You
      </h1>
      <p className='text-center text-base mb-20' data-aos='fade-up'>
        Flexible plans and pricing that allows you to easily run your business
        like a pro.
      </p>

      {/* Trips Selector in black box with white text */}
      <div className='text-center mb-10' data-aos='fade-up'>
        <div className='inline-block bg-slate-900 p-5 px-20 rounded-md'>
          <label
            htmlFor='trips'
            className='text-white text-2xl font-semibold mr-10'
          >
            How many trips per month do you book?
          </label>
          <select
            id='trips'
            value={trips}
            onChange={handleTripsChange}
            className='border border-gray-500 rounded-lg p-3 px-5 text-xl font-semibold'
          >
            {Object.keys(pricingData).map((trip) => (
              <option key={trip} value={trip}>
                {trip}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Pricing Cards */}
      <div
        className={`${
          isMobile
            ? "flex flex-col space-y-8"
            : isTablet
            ? "grid grid-cols-3"
            : "grid grid-cols-3 gap-5"
        } justify-center p-5 lg:px-60`}
        data-aos='fade-up'
      >
        {/* Core Plan */}
        <div className='p-4 lg:p-12 bg-white border-2 border-neutral-300 rounded-lg shadow-lg'>
          <img
            src={pricing1}
            alt='Core Icon'
            className='w-10 h-10 mx-auto mb-7'
          />
          <h2 className='text-3xl font-bold text-center'>CORE</h2>
          <p className='text-center text-sm text-gray-500 mb-5'>
            All the tools you need to build your limo business
          </p>
          <p className='text-center text-4xl font-semibold '>${core}/month</p>
          <p className='text-center text-xs mb-10'>
            +One-time upfront fee $299
          </p>
          <div className='flex justify-center mb-5'>
            <button className='border-2 border-red-900 text-xl text-red-900 font-semibold px-10 py-2 rounded-sm hover:bg-black hover:text-white hover:border-red-500'>
              Request Demo
            </button>
          </div>
          <ul className='text-neutral-500 mt-10 space-y-2'>
            {/* List items for Core Plan */}
            {[
              "Unlimited Users",
              "Unlimited Drivers",
              "Unlimited Vehicles",
              "Unlimited Updates",
              "Reservation Management",
              "Dispatch Management",
              "Back Office Management",
              "Reporting & Analytics",
              "Driver Mobile App",
              "Online Booking Engine",
              "Limo Anywhere Mobile App",
              "Scheduled Texting",
              "Automated Flight Tracking/Updates",
              "Driver Scheduling",
              "Driver Tracking",
              "Scheduled Emailing",
              "Affiliate Networking Solutions",
              "Manifest Upload",
              "Vehicle Maintenance Management",
              "Incident Management",
              "Custom Communication Templates",
              "PCI Certified Platform",
              "Account Onboarding Assistance",
              "Extensive Support: Online Knowledge Base, Youtube Library, 7-7/7 Live Support, Online Chat & Email Support, LA Virtual Academy (LAVA) Webinars",
            ].map((item, idx) => (
              <li key={idx} className='flex '>
                <span className='text-red-500 mr-1'>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Plus Plan */}
        <div className='p-4 lg:p-12 bg-white border-2 border-black rounded-lg shadow-lg relative'>
          {/* Most Popular Ribbon */}
          <div className='absolute top-0 right-0 bg-red-900 text-white py-2 px-4 text-sm font-bold transform translate-x-2 -translate-y-2 rotate-12'>
            Most Popular
          </div>
          <img
            src={pricing2}
            alt='Plus Icon'
            className='w-10 h-10 mx-auto mb-7'
          />
          <h2 className='text-3xl font-bold text-center'>PLUS</h2>
          <p className='text-center text-sm text-gray-500 mb-5'>
            Powerful modules for businesses that want to grow faster
          </p>
          <p className='text-center text-4xl font-semibold'>${plus}/month</p>
          <p className='text-center text-xs mb-10'>
            +One-time upfront fee $599
          </p>
          <div className='flex justify-center mb-5'>
            <button className='border-2 border-red-900 text-xl text-red-900 font-semibold px-10 py-2 rounded-sm hover:bg-black hover:text-white hover:border-red-500'>
              Request Demo
            </button>
          </div>
          <ul className='text-neutral-500 mt-10 space-y-2'>
            {/* List items for Plus Plan */}
            {[
              "All Core features, and-",
              "Mobile-Responsive Website with Integrated Email and Hosting",
              "Data Cleaning & Upload Support",
              "One Company Alias (DBA)",
              "Prioritized Support",
              "Solution Configuration Assessment",
            ].map((item, idx) => (
              <li key={idx} className='flex'>
                <span className='text-red-500 mr-1'>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Black Plan */}
        <div className='p-4 lg:p-12 bg-white border-2 border-neutral-300 rounded-lg shadow-lg'>
          <img
            src={pricing3}
            alt='Black Icon'
            className='w-10 h-10 mx-auto mb-7'
          />
          <h2 className='text-3xl font-bold text-center'>BLACK</h2>
          <p className='text-center text-sm text-gray-500 mb-5'>
            An all-inclusive plan for pros that want nothing but the best
          </p>
          <p className='text-center text-4xl font-semibold'>${black}/month</p>
          <p className='text-center text-xs mb-10'>
            +One-time upfront fee $899
          </p>
          <div className='flex justify-center mb-5'>
            <button className='border-2 border-red-900 text-xl text-red-900 font-semibold px-10 py-2 rounded-sm hover:bg-black hover:text-white hover:border-red-500'>
              Request Demo
            </button>
          </div>
          <ul className='text-neutral-500 mt-10 space-y-2'>
            {/* List items for Black Plan */}
            {[
              "All Core & Plus Features, and-",
              "Passenger App (PWA)",
              "Premium Support",
              "Dedicated Account Manager",
              "Dedicated Staff Training",
              "Unlimited Company Alias (DBA)",
              "Advanced Access to New Features",
              "Affiliate Spotlight in LA Net",
            ].map((item, idx) => (
              <li key={idx} className='flex'>
                <span className='text-red-500 mr-1'>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className='text-center mt-8' data-aos='fade-up'>
        <button
          onClick={() => (window.location.href = "/signup")}
          className='px-10 sm:px-16 md:px-32 lg:px-44 py-4 border-2 border-red-900 rounded-full text-black font-bold hover:bg-black hover:text-white hover:border-red-500 transition-all duration-300 shadow-md'
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
}

export default PricingComponent;
