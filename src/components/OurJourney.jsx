import React from "react";

function OurJourney() {
  return (
    <section className='bg-white py-28 font-[Outfit]'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Container to handle mobile vs desktop layout */}
        <div className='flex flex-col md:flex-row' data-aos='fade-up'>
          {/* Title Section for mobile */}
          <div className='block md:hidden text-center'>
            <h2 className='text-5xl sm:text-6xl font-bold text-gray-900 mb-8'>
              Our Journey
            </h2>
          </div>

          {/* Introductory Text Section */}
          <div className='md:w-1/2 text-center md:text-left'>
            <p className='text-lg text-gray-600 mb-8'>
              Welcome to LimoLead, where innovation meets excellence in fleet
              dispatching. At LimoLead, we redefine the transportation
              experience with our cutting-edge Software-as-a-Service (SaaS)
              platform, meticulously designed to empower luxury transportation
              providers. Our mission is simple yet profound: to streamline
              operations, enhance efficiency, and elevate the standards of
              service in the limousine and private hire industry. Born from a
              passion for technological advancement and a deep understanding of
              the unique challenges faced by fleet operators, LimoLead is the
              brainchild of industry veterans and tech enthusiasts. Our platform
              leverages the latest advancements in AI and data analytics to
              offer real-time dispatching, intelligent routing, and seamless
              communication between drivers and dispatchers.
            </p>
          </div>

          {/* Title Section for desktop */}
          <div className='hidden md:block md:w-1/2 py-20 text-right'>
            <h2 className='text-8xl font-bold text-gray-900 mb-4'>
              Our Journey
            </h2>
          </div>
        </div>

        {/* Milestones Section */}
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8'>
          {/* Milestone 1 */}
          <div
            className='bg-gray-100 p-6 rounded-lg shadow-md'
            data-aos='fade-up'
          >
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              Founded in 2010
            </h3>
            <p className='text-gray-600'>
              Our company started with a vision to simplify transportation
              management and enhance efficiency.
            </p>
          </div>

          {/* Milestone 2 */}
          <div
            className='bg-gray-100 p-6 rounded-lg shadow-md'
            data-aos='fade-up'
          >
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              Major Milestone in 2015
            </h3>
            <p className='text-gray-600'>
              We reached a significant milestone with 100+ clients, showing the
              value of our innovative platform.
            </p>
          </div>

          {/* Milestone 3 */}
          <div
            className='bg-gray-100 p-6 rounded-lg shadow-md'
            data-aos='fade-up'
          >
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              Global Expansion in 2018
            </h3>
            <p className='text-gray-600'>
              Our services expanded to international markets, establishing a
              global presence and strengthening our brand.
            </p>
          </div>

          {/* Milestone 4 */}
          <div
            className='bg-gray-100 p-6 rounded-lg shadow-md'
            data-aos='fade-up'
          >
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              Innovation in 2020
            </h3>
            <p className='text-gray-600'>
              Launched cutting-edge features to better serve our clients in the
              fast-changing industry landscape.
            </p>
          </div>

          {/* Milestone 5 */}
          <div
            className='bg-gray-100 p-6 rounded-lg shadow-md'
            data-aos='fade-up'
          >
            <h3 className='text-xl font-semibold text-gray-800 mb-2'>
              Present Day
            </h3>
            <p className='text-gray-600'>
              Today, we are proud to serve thousands of clients worldwide with
              our trusted and reliable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurJourney;
