import React from "react";
import backgroundImage from "/HS3.png";
import {
  FiCalendar,
  FiTruck,
  FiUser,
  FiCreditCard,
  FiSmartphone,
  FiMap,
} from "react-icons/fi"; // Feather Icons
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    title: "Reservation Management",
    description:
      "Easily create, edit, and dispatch your reservations, and accept/reject online and eFarm-in trips, all on your mobile or desktop device.",
    icon: <FiCalendar size={40} />, // You can replace this with an actual SVG or image
  },
  {
    title: "Dispatch Management",
    description:
      "Customize your dispatch grid for your company. Schedule and assign trips, message drivers, and track flights in real-time.",
    icon: <FiTruck size={40} />,
  },
  {
    title: "Customer & Account Management",
    description:
      "Keep customer details and preferences at your fingertips to ensure you’re providing the customized service you built your business on.",
    icon: <FiUser size={40} />,
  },
  {
    title: "Accounting, Billing & Driver Payroll",
    description:
      "Manage customer invoices, process credit card payments, and track payroll disbursements.",
    icon: <FiCreditCard size={40} />,
  },
  {
    title: "Android & iOS Mobile Apps",
    description:
      "Get a simplified version of Limo Anywhere directly on your Android or Apple device.",
    icon: <FiSmartphone size={40} />,
  },
  {
    title: "Track Progress Of Trips",
    description:
      "Make sure that your trips are assigned and dispatched, and drivers are properly servicing your customers.",
    icon: <FiMap size={40} />,
  },
];

function S1_DispatchSystem() {
  return (
    <div>
      <Navbar />
      <div
        className='relative font-[Outfit] h-64 md:h-[500px] flex flex-col justify-center items-center bg-black bg-center bg-cover lg:px-40'
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <h1 className='relative text-white text-3xl md:text-5xl lg:text-6xl font-semibold z-10 text-center px-4 mb-5'>
          DISPATCH SYSTEM
        </h1>
        <h2 className='relative text-white text-lg md:text-2xl lg:text-3xl font-normal z-10 text-center px-4 mb-3'>
          GROW YOUR REVENUE WITH OUR ONLINE RESERVATIONS & ACCOUNT DASHBOARD
        </h2>
        <p className='relative text-white text-xs md:text-base lg:text-lg font-normal z-10 text-center px-4'>
          Built with the limo industry in mind, our fast, easy booking process
          and feature-rich dashboard will help you compete with national brands,
          and it's branded to your business.
        </p>
        <div className='mt-6'>
          <button className='border-2 border-white text-white px-6 py-2 rounded-lg font-bold hover:bg-white hover:text-black transition duration-300'>
            GET STARTED NOW
          </button>
        </div>
      </div>

      <div className='bg-white py-12 px-4 sm:px-6 lg:px-8 font-[Outfit]'>
        <div className='max-w-6xl mx-auto'>
          {/* New container for the service boxes */}
          <div className='p-10 rounded-lg shadow-lg bg-[#D9D9D9]'>
            {/* Headings Section */}
            <div className='text-center mb-10'>
              <h2 className='text-2xl text-black font-bold'>Excellence</h2>
              <h1 className='text-4xl text-black font-extrabold my-2'>
                Transform Your Experience With Our Services
              </h1>
              <h2 className='text-lg text-black font-medium'>
                Our services are designed to elevate your business. Experience
                unmatched quality and support tailored to your needs.
              </h2>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-10'>
              {services.map((service, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center text-center p-10  rounded-lg shadow-lg bg-white transition-transform duration-300 hover:shadow-xl hover:scale-105'
                >
                  {/* Icon */}
                  <div className='text-5xl mb-4'>{service.icon}</div>

                  {/* Title */}
                  <h3 className='text-lg text-black font-semibold mb-2'>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className='text-black text-sm'>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default S1_DispatchSystem;
