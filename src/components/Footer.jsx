import React, { useState, useEffect } from "react";
import footerlogo from "/FLogo.png";

function Footer() {
  const [screenType, setScreenType] = useState("desktop");

  // Function to determine the screen type based on window width
  const handleResize = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setScreenType("mobile");
    } else if (width >= 768 && width < 1024) {
      setScreenType("tablet");
    } else {
      setScreenType("desktop");
    }
  };

  useEffect(() => {
    // Set the screen type on component mount
    handleResize();

    // Add an event listener to detect window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className='bg-black text-white font-[Outfit] py-0'>
      {/* Top Section */}
      <div className='bg-[#1E1E1E] py-5 px-6 md:px-16 lg:px-32 w-full flex flex-col md:flex-row justify-between items-center rounded-xl'>
        <p className='text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-left leading-snug md:leading-tight mb-4 md:mb-0'>
          INTERESTED IN TAKING YOUR BLACK CAR <br className='hidden md:block' />{" "}
          BUSINESS TO THE NEXT LEVEL? GET A QUICK QUOTE!
        </p>
        <button className='bg-transparent border-2 border-[#9C0A0A] text-white py-2 px-6 md:px-10 lg:px-14 rounded-full hover:bg-red-900 mt-4 md:mt-0 whitespace-nowrap'>
          Get a Quote
        </button>
      </div>

      {/* Screen-specific logic */}
      {screenType === "desktop" && (
        <div className='container mx-auto flex flex-col lg:flex-row lg:justify-between py-10 px-6 md:px-16 lg:px-60 space-y-8 lg:space-y-0'>
          {/* Desktop Layout */}
          <div className='flex flex-col lg:flex-row lg:space-x-24 text-center lg:text-left'>
            {/* Products Section */}
            <div>
              <p className='font-bold text-lg mb-4'>Products</p>
              <ul className='space-y-1'>
                <li>
                  <a href='#dispatch' className='hover:text-red-500'>
                    Dispatch Software
                  </a>
                </li>
                <li>
                  <a href='#booking' className='hover:text-red-500'>
                    Booking Software
                  </a>
                </li>
                <li>
                  <a href='#payment' className='hover:text-red-500'>
                    Payment Solutions
                  </a>
                </li>
                <li>
                  <a href='#driver' className='hover:text-red-500'>
                    Driver App
                  </a>
                </li>
                <li>
                  <a href='#passenger' className='hover:text-red-500'>
                    Passenger App
                  </a>
                </li>
                <li>
                  <a href='#addons' className='hover:text-red-500'>
                    Addon Modules
                  </a>
                </li>
                <li>
                  <a href='#pricing' className='hover:text-red-500'>
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            {/* Explore Section */}
            <div>
              <p className='font-bold text-lg mb-4'>Explore</p>
              <ul className='space-y-1'>
                <li>
                  <a href='#partners' className='hover:text-red-500'>
                    Partners
                  </a>
                </li>
                <li>
                  <a href='#testimonials' className='hover:text-red-500'>
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Logo Section */}
          <div>
            <img src={footerlogo} alt='LimoLead Logo' className='mx-auto' />
          </div>

          {/* Right Links */}
          <div className='flex flex-col lg:flex-row lg:space-x-24 text-center lg:text-right'>
            <div>
              <p className='font-bold text-lg mb-4'>About Us</p>
              <ul className='space-y-1'>
                <li>
                  <a href='#company' className='hover:text-red-500'>
                    Company
                  </a>
                </li>
                <li>
                  <a href='#careers' className='hover:text-red-500'>
                    Careers
                  </a>
                </li>
                <li>
                  <a href='#blog' className='hover:text-red-500'>
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className='font-bold text-lg mb-4'>Need Help?</p>
              <ul className='space-y-1'>
                <li>
                  <a href='tel:+1' className='hover:text-red-500'>
                    Call Us (+1)
                  </a>
                </li>
                <li>
                  <a href='#contact' className='hover:text-red-500'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href='#support' className='hover:text-red-500'>
                    Support
                  </a>
                </li>
                <li>
                  <a href='#faqs' className='hover:text-red-500'>
                    FAQs
                  </a>
                </li>
                <li>
                  <a href='#sitemap' className='hover:text-red-500'>
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {screenType === "tablet" && (
        <div className='container mx-auto py-10 px-6 md:px-16 lg:px-60'>
          {/* Tablet Layout */}
          <div className='flex justify-center mb-16'>
            <img src={footerlogo} alt='LimoLead Logo' />
          </div>
          <div className='flex justify-center gap-16'>
            <div>
              <p className='font-bold text-lg mb-4 text-center'>Products</p>
              <ul className='space-y-1 text-center'>
                <li>
                  <a href='#dispatch' className='hover:text-red-500'>
                    Dispatch Software
                  </a>
                </li>
                <li>
                  <a href='#booking' className='hover:text-red-500'>
                    Booking Software
                  </a>
                </li>
                <li>
                  <a href='#payment' className='hover:text-red-500'>
                    Payment Solutions
                  </a>
                </li>
                <li>
                  <a href='#driver' className='hover:text-red-500'>
                    Driver App
                  </a>
                </li>
                <li>
                  <a href='#passenger' className='hover:text-red-500'>
                    Passenger App
                  </a>
                </li>
                <li>
                  <a href='#addons' className='hover:text-red-500'>
                    Addon Modules
                  </a>
                </li>
                <li>
                  <a href='#pricing' className='hover:text-red-500'>
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className='font-bold text-lg mb-4 text-center'>Need Help?</p>
              <ul className='space-y-1 text-center'>
                <li>
                  <a href='tel:+1' className='hover:text-red-500'>
                    Call Us (+1)
                  </a>
                </li>
                <li>
                  <a href='#contact' className='hover:text-red-500'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href='#support' className='hover:text-red-500'>
                    Support
                  </a>
                </li>
                <li>
                  <a href='#faqs' className='hover:text-red-500'>
                    FAQs
                  </a>
                </li>
                <li>
                  <a href='#sitemap' className='hover:text-red-500'>
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>

            {/* About Us and Need Help Sections */}

            <div>
              <p className='font-bold text-lg mb-4 text-center'>About Us</p>
              <ul className='space-y-1 text-center'>
                <li>
                  <a href='#company' className='hover:text-red-500'>
                    Company
                  </a>
                </li>
                <li>
                  <a href='#careers' className='hover:text-red-500'>
                    Careers
                  </a>
                </li>
                <li>
                  <a href='#blog' className='hover:text-red-500'>
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className='font-bold text-lg mb-4 text-center'>Explore</p>
              <ul className='space-y-1 text-center'>
                <li>
                  <a href='#partners' className='hover:text-red-500'>
                    Partners
                  </a>
                </li>
                <li>
                  <a href='#testimonials' className='hover:text-red-500'>
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {screenType === "mobile" && (
        <div className='container mx-auto py-10 px-6'>
          {/* Mobile Layout */}
          <div className='flex justify-center mb-16'>
            <img src={footerlogo} alt='LimoLead Logo' />
          </div>

          {/* Products and Explore Sections */}
          <div className='flex flex-col space-y-10'>
            <div className='flex justify-center gap-16'>
              <div>
                <p className='font-bold text-lg mb-4 text-left'>Products</p>
                <ul className='space-y-1 text-left'>
                  <li>
                    <a href='#dispatch' className='hover:text-red-500'>
                      Dispatch Software
                    </a>
                  </li>
                  <li>
                    <a href='#booking' className='hover:text-red-500'>
                      Booking Software
                    </a>
                  </li>
                  <li>
                    <a href='#payment' className='hover:text-red-500'>
                      Payment Solutions
                    </a>
                  </li>
                  <li>
                    <a href='#driver' className='hover:text-red-500'>
                      Driver App
                    </a>
                  </li>
                  <li>
                    <a href='#passenger' className='hover:text-red-500'>
                      Passenger App
                    </a>
                  </li>
                  <li>
                    <a href='#addons' className='hover:text-red-500'>
                      Addon Modules
                    </a>
                  </li>
                  <li>
                    <a href='#pricing' className='hover:text-red-500'>
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className='font-bold text-lg mb-4 text-right'>Need Help?</p>
                <ul className='space-y-1 text-right'>
                  <li>
                    <a href='tel:+1' className='hover:text-red-500'>
                      Call Us (+1)
                    </a>
                  </li>
                  <li>
                    <a href='#contact' className='hover:text-red-500'>
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href='#support' className='hover:text-red-500'>
                      Support
                    </a>
                  </li>
                  <li>
                    <a href='#faqs' className='hover:text-red-500'>
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href='#sitemap' className='hover:text-red-500'>
                      Sitemap
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* About Us and Need Help Sections */}
            <div className='flex justify-center gap-28'>
              <div>
                <p className='font-bold text-lg mb-4 text-left'>About Us</p>
                <ul className='space-y-1 text-left'>
                  <li>
                    <a href='#company' className='hover:text-red-500'>
                      Company
                    </a>
                  </li>
                  <li>
                    <a href='#careers' className='hover:text-red-500'>
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href='#blog' className='hover:text-red-500'>
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className='font-bold text-lg mb-4 text-right'>Explore</p>
                <ul className='space-y-1 text-right'>
                  <li>
                    <a href='#partners' className='hover:text-red-500'>
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href='#testimonials' className='hover:text-red-500'>
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Section */}
      <div className='border-t border-gray-700 py-5'>
        <div className='container mx-auto px-2 sm:px-4 md:px-20 flex flex-col md:flex-row justify-between'>
          <p className='text-center md:text-left mb-4 md:mb-0'>
            © 2024 LimoLead LLC. All Rights Reserved
          </p>
          <div className='flex justify-center md:justify-end text-sm space-x-5'>
            <a href='#privacy' className='hover:text-red-500'>
              Privacy Policy
            </a>
            <a href='#terms' className='hover:text-red-500'>
              Terms Of Service
            </a>
            <a href='#legal' className='hover:text-red-500'>
              Legal Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
