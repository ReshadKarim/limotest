import React, { useState, useEffect } from "react";
import icon1 from "/DriverApplication.png";
import icon2 from "/DispatchSystem.png";
import icon3 from "/PassengerApplication.png";
import icon4 from "/WebsiteDevelopment.png";
import icon5 from "/AddonModules.png";
import icon6 from "/BookingSystem.png";
import icon7 from "/ps.png";
import icon8 from "/am.png";
import circle1 from "/Circles 1.png";
import circle2 from "/Circles 2.png";
import { Link } from "react-router-dom";

// Service Data
const services = [
  {
    icon: icon1,
    title: "Dispatch System",
    description:
      "Experience seamless booking, scheduling, dispatch, and reservation management on both desktop and mobile with LimoLead. Boasting an extensive range of features, unparalleled flexibility, and easy accessibility, this all-in-one platform is essential for any livery service. Elevate your productivity and foster business growth with LimoLead.",
    buttonLabel: "Learn More",
    link: "/S1_DispatchSystem",
  },
  {
    icon: icon2,
    title: "Booking Software",
    description:
      "Designed specifically for the limo industry, LimoLead offers a swift and intuitive booking process alongside a feature-packed dashboard. This empowers you to compete with national brands, all while maintaining your unique business branding.",
    buttonLabel: "Learn More",
    link: "/S2_BookingSoftware",
  },
  {
    icon: icon3,
    title: "Driver Application",
    description:
      "Efficiently oversee your fleet using our cutting-edge driver app, available at no cost. This app empowers your drivers to handle trip assignments, manage ongoing journeys, and complete their tasks in real-time, ensuring optimal operational efficiency.",
    buttonLabel: "Learn More",
    link: "/S3_DriverApplication",
  },
  {
    icon: icon4,
    title: "Website CMS",
    description:
      "LimoLead's mobile-responsive website templates, driven by our sophisticated Content Management System, empower you to create and launch a professional website with ease and efficiency. These templates are designed to ensure a seamless user experience across all devices, allowing you to establish a compelling online presence quickly and cost-effectively.",
    buttonLabel: "Learn More",
    link: "/S4_WebsiteCMS",
  },
  {
    icon: icon5,
    title: "Customizable Addons",
    description:
      "LimoLead offers customizable add-ons at competitive prices, empowering you to run your business seamlessly and efficiently. Tailor these enhancements to your specific needs and enjoy a streamlined, effective operation.",
    buttonLabel: "Learn More",
    link: "/S5_CustomizableAddons",
  },
  {
    icon: icon6,
    title: "Passenger Web App & Mobile App",
    description:
      "LimoLead's Passenger Web App (LPA) offers a seamless experience for travelers, allowing them to effortlessly book rides, manage their accounts, and monitor their journeys with real-time status updates and driver GPS locations. All of these features are readily accessible on any mobile device, just a tap away.",
    buttonLabel: "Learn More",
    link: "/S6_PassengerApp",
  },
  {
    icon: icon7,
    title: "Payment Solutions",
    description:
      "At LimoLead, we believe that software and payments work best in unison. That's why we've introduced LimoLead Pay, a comprehensive payment solution designed to meet all your business needs seamlessly.",
    buttonLabel: "Learn More",
    link: "/S7_PaymentSolution",
  },
  {
    icon: icon8,
    title: "Affiliate Network",
    description:
      "Join the world's largest ground transportation network by enhancing your presence on Lead Net. Position yourself as the preferred supplier for other LimoLead customers within your local market and expand your reach.",
    buttonLabel: "Learn More",
    link: "/S8_AffiliateNetwork",
  },
];

function ServiceList() {
  const [screenType, setScreenType] = useState("desktop");

  // Determine screen size
  const determineScreenType = () => {
    const width = window.innerWidth;
    if (width < 640) {
      return "mobile";
    } else if (width >= 640 && width < 1024) {
      return "tablet";
    } else {
      return "desktop";
    }
  };

  // Update screen type on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenType(determineScreenType());
    };
    window.addEventListener("resize", handleResize);

    // Set initial screen type
    setScreenType(determineScreenType());

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='relative bg-white font-[Outfit] font-bold min-h-screen py-10 sm:py-20'>
      {/* Background Images */}
      <img
        src={circle1}
        alt='Top Left Design'
        className='absolute top-0 left-0 w-1/2 opacity-100 z-0 hidden sm:block'
      />
      <img
        src={circle2}
        alt='Bottom Right Design'
        className='absolute bottom-0 right-0 w-1/2 opacity-100 z-0 hidden sm:block'
      />

      {/* Services Container */}
      <div className='relative container mx-auto px-4 sm:px-20 md:px-40 lg:px-60 z-10'>
        {/* Services List */}
        <div className='space-y-10 md:space-y-14 max-w-full'>
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex ${
                screenType === "mobile"
                  ? "flex-col items-center"
                  : "flex-col sm:flex-row"
              } sm:items-start bg-gray-100 shadow-lg p-4 sm:p-6 md:p-8 rounded-xl max-w-full ${
                screenType === "tablet" ? "sm:max-w-[100%]" : "sm:max-w-[75%]"
              } ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}
              style={{
                backgroundColor: "#D9D9D9",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Conditional Layout for Mobile and Desktop */}
              {screenType === "mobile" ? (
                <>
                  {/* Mobile Layout - Icon, Title, Description Center Aligned */}
                  <img
                    src={service.icon}
                    alt={`${service.title} Icon`}
                    className='w-auto h-20 mb-4'
                    data-aos='fade-up'
                  />
                  <div className='text-center' data-aos='fade-up'>
                    <h2 className='text-lg sm:text-xl font-bold mb-2 text-black'>
                      {service.title}
                    </h2>
                    <p className='text-gray-700 mb-4 text-xs sm:text-sm'>
                      {service.description}
                    </p>
                    <Link to={service.link}>
                      <button className='bg-transparent text-black font-semibold border-2 border-[#630607] px-4 sm:px-6 py-1.5 rounded-full hover:bg-[#630607] hover:text-white transition duration-300'>
                        {service.buttonLabel}
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  {/* Desktop/Tablet Layout */}
                  {index % 2 === 0 ? (
                    <>
                      <img
                        src={service.icon}
                        alt={`${service.title} Icon`}
                        className='w-auto h-20 mb-4 sm:mb-0 sm:mr-14 sm:self-center'
                        data-aos='fade-up'
                      />
                      <div
                        className='text-center sm:text-left'
                        data-aos='fade-up'
                      >
                        <h2 className='text-lg sm:text-xl font-bold mb-2 text-black'>
                          {service.title}
                        </h2>
                        <p className='text-gray-700 mb-4 text-xs sm:text-sm'>
                          {service.description}
                        </p>
                        <Link to={service.link}>
                          <button className='bg-transparent text-black font-semibold border-2 border-[#630607] px-4 sm:px-6 py-1.5 rounded-full hover:bg-[#630607] hover:text-white transition duration-300'>
                            {service.buttonLabel}
                          </button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className='text-center sm:text-right'
                        data-aos='fade-up'
                      >
                        <h2 className='text-lg sm:text-xl font-bold mb-2 text-black'>
                          {service.title}
                        </h2>
                        <p className='text-gray-700 mb-4 text-xs sm:text-sm'>
                          {service.description}
                        </p>
                        <Link to={service.link}>
                          <button className='bg-transparent text-black font-semibold border-2 border-[#630607] px-4 sm:px-6 py-1.5 rounded-full hover:bg-[#630607] hover:text-white transition duration-300'>
                            {service.buttonLabel}
                          </button>
                        </Link>
                      </div>
                      <img
                        src={service.icon}
                        alt={`${service.title} Icon`}
                        className='w-auto h-20 mb-4 sm:ml-14 sm:self-center'
                        data-aos='fade-up'
                      />
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className='text-center mt-10 sm:mt-12'>
        <button
          onClick={() => (window.location.href = "/pricing")}
          className='relative mt-8 px-12 py-2 md:px-24 lg:px-32 border-4 border-red-900 text-black font-bold rounded-full bg-transparent overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-red-900 before:translate-y-full before:transition-transform before:duration-300 hover:before:translate-y-0 hover:shadow-xl hover:text-white'
          data-aos='fade-up'
        >
          <span className='relative z-10'>See Our Plans</span>
        </button>
      </div>
    </div>
  );
}

export default ServiceList;
