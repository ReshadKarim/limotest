import React, { useState, useEffect } from "react";

function ElegantWords() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      quote:
        "Limolead simplifies limo dispatch with intuitive management tools and real-time tracking, ensuring efficient operations and customer satisfaction.",
    },
    {
      quote:
        "Limolead has transformed the way we manage our fleet with its comprehensive features, helping us stay organized and on top of our business.",
    },
    {
      quote:
        "With Limolead, our booking process has become more streamlined, allowing us to provide a better experience for our clients.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true); // Start transition
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsTransitioning(false); // End transition
      }, 500); // Duration of the slide effect
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className='text-center font-[Outfit] my-8 md:my-12'
      data-aos='fade-up'
    >
      {/* Title Section */}
      <p className='text-2xl md:text-3xl font-bold text-black mb-2'>
        ELEGANT WORDS
      </p>
      <p className='text-black text-sm md:text-base font-bold mb-6 md:mb-10'>
        Expressed By Our Respected Clients
      </p>

      {/* Testimonial Card Section */}
      <div className='relative bg-[#D9D9D9] w-11/12 md:w-4/5 lg:w-3/4 mx-auto py-10 px-6 md:py-14 md:px-28 lg:py-20 lg:px-44 rounded-3xl overflow-hidden'>
        <div
          className={`transition-all duration-500 ease-in-out transform ${
            isTransitioning
              ? "translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }`}
        >
          <p className='text-base md:text-xl font-medium text-black'>
            {testimonials[currentIndex].quote}
          </p>
        </div>

        {/* Navigation Dots */}
        <div className='flex justify-center space-x-2 md:space-x-3 mt-6'>
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 md:h-4 md:w-4 rounded-full inline-block cursor-pointer ${
                index === currentIndex
                  ? "bg-black"
                  : "bg-white border-2 border-black"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* "See More" Button */}
      <button className='relative mt-6 md:mt-10 px-10 py-2 md:px-14 md:py-3 border-2 border-red-900 text-black font-bold rounded-full bg-transparent overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-red-900 before:translate-y-full before:transition-transform before:duration-300 hover:before:translate-y-0 hover:shadow-xl hover:text-white'>
        <span className='relative z-10'>See More</span>
      </button>
    </section>
  );
}

export default ElegantWords;
