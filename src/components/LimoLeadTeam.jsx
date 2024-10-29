import React from "react";
import member1 from "/Ellipse 17.png";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, Example Corp",
    quote:
      "LimoAnywhere is fantastic! It has greatly improved the efficiency of our transportation business.",
    image: member1, // Replace with the actual image URL
  },
  {
    name: "Jane Smith",
    position: "Manager, XYZ Transport",
    quote:
      "We've seen remarkable growth in our operations since switching to LimoAnywhere.",
    image: member1, // Replace with the actual image URL
  },
  {
    name: "Mike Johnson",
    position: "Director, RideWell",
    quote:
      "The system is user-friendly and customer support is outstanding. Highly recommend!",
    image: member1, // Replace with the actual image URL
  },
  {
    name: "Alice Williams",
    position: "COO, Transport Experts",
    quote:
      "LimoAnywhere has streamlined our processes, allowing us to focus on customer service.",
    image: member1, // Replace with the actual image URL
  },
  {
    name: "David Brown",
    position: "Founder, Brown's Limo Service",
    quote:
      "The best investment we made for our company. It's easy to use and highly efficient.",
    image: member1, // Replace with the actual image URL
  },
  {
    name: "Sarah Miller",
    position: "Owner, Premium Ride",
    quote:
      "LimoAnywhere's features are exactly what we needed to take our business to the next level.",
    image: member1, // Replace with the actual image URL
  },
];

function LimoLeadTeam() {
  return (
    <section className='bg-black py-20 px-4 sm:px-6 md:px-8 lg:px-12 font-[Outfit]'>
      <div className='max-w-6xl mx-auto text-center'>
        <p
          className='text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-20'
          data-aos='fade-up'
        >
          LimoLead Team
        </p>
        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-lg shadow-lg transform transition hover:scale-105'
              data-aos='fade-up'
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='w-16 h-16 rounded-full mx-auto mb-4'
              />
              <p className='text-gray-700 mb-4 text-sm md:text-base'>
                {testimonial.quote}
              </p>
              <p className='text-lg md:text-xl font-semibold'>
                {testimonial.name}
              </p>
              <p className='text-gray-500 text-xs md:text-sm'>
                {testimonial.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LimoLeadTeam;
