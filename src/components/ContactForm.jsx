import React, { useState } from "react";

function ContactForm() {
  // State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // Handle form changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    // You can integrate this with an API call to store data
    // e.g., fetch("/api/submit", { method: "POST", body: JSON.stringify(formData) })
  };

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 font-[Outfit] items-center bg-[#D9D9D9] sm:px-8 md:px-12 lg:px-28 py-16'>
      {/* Left Section - Text */}
      <div className='mb-8 lg:mb-0 text-center' data-aos='fade-up'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-bold'>
          Interested? We're <br />
          Just A Knock Away!
        </p>
      </div>

      {/* Right Section - Form */}
      <div
        className='bg-white p-8 sm:p-10 md:p-12 rounded-xl shadow-md max-w-lg w-full mx-auto'
        data-aos='fade-up'
      >
        <p className='text-center text-lg sm:text-xl font-bold mb-6'>
          For Inquiries
        </p>
        <form className='space-y-3' onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              placeholder='First Name'
              className='border-2 border-[#D9D9D9] p-2 sm:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900'
              required
            />
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              placeholder='Last Name'
              className='border-2 border-[#D9D9D9] p-2 sm:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900'
              required
            />
          </div>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Your Mail'
            className='border-2 border-[#D9D9D9] w-full p-2 sm:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900'
            required
          />
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Your Message'
            className='border-2 border-[#D9D9D9] w-full p-2 sm:p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900'
            rows='4'
            required
          ></textarea>
          <button
            type='submit'
            className='w-full bg-white font-bold text-red-900 border-2 border-red-950 py-2 sm:py-3 rounded-xl hover:bg-red-900 hover:text-white transition'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
