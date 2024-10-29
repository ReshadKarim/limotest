import React from "react";
import event1 from "/Rectangle 50.png";

function SomeOfOurEvents() {
  const events = [
    {
      title: "LAS VEGAS",
      subtitle: "Limousine Convention 2025",
      imgSrc: event1, // Replace with actual image path (1st row, 1st box)
    },
    {
      title: "LAS VEGAS",
      subtitle: "Limousine Convention 2025",
      imgSrc: "", // Leave this empty for the black box with text (1st row, 2nd box)
    },
    {
      title: "LAS VEGAS",
      subtitle: "Limousine Convention 2025",
      imgSrc: event1, // Replace with actual image path (1st row, 3rd box)
    },
    {
      title: "LAS VEGAS",
      subtitle: "Limousine Convention 2025",
      imgSrc: "", // Leave this empty for the black box with text (2nd row, 1st box)
    },
    {
      title: "LAS VEGAS",
      subtitle: "Limousine Convention 2025",
      imgSrc: event1, // Replace with actual image path (2nd row, 2nd box)
    },
    {
      title: "LAS VEGAS",
      subtitle: "Limousine Convention 2025",
      imgSrc: "", // Leave this empty for the black box with text (2nd row, 3rd box)
    },
  ];

  return (
    <section className='p-6 md:p-12 lg:p-24 py-10 lg:py-20 bg-white font-[Outfit]'>
      <div className='container mx-auto text-center'>
        <p
          className='text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-20'
          data-aos='fade-up'
        >
          Some Of Our Events
        </p>
        <div
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8'
          data-aos='fade-up'
        >
          {events.map((event, index) => (
            <div key={index} className='relative group'>
              {/* Image or Black Box */}
              {event.imgSrc ? (
                <img
                  src={event.imgSrc}
                  alt={event.title}
                  className='w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover'
                />
              ) : (
                <div className='w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-black flex items-center justify-center'>
                  <div className='text-center'>
                    <p className='text-xl md:text-2xl lg:text-3xl text-white font-bold'>
                      {event.title}
                    </p>
                    <p className='text-white'>{event.subtitle}</p>
                  </div>
                </div>
              )}

              {/* Black Overlay on Hover (for images only) */}
              {event.imgSrc && (
                <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300'></div>
              )}

              {/* Text Overlay on Hover (for images only) */}
              {event.imgSrc && (
                <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <p className='text-xl md:text-2xl lg:text-3xl text-white font-bold'>
                    {event.title}
                  </p>
                  <p className='text-white'>{event.subtitle}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SomeOfOurEvents;
