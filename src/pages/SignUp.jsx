import React from "react";
import signupbg from "/signup.png";
import footerlogo from "/LLLs.png";

function SignUp() {
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      {/* Responsive Container */}
      <div className='flex flex-col md:flex-row w-full max-w-full h-full'>
        {/* Left Side with Background Image and Text */}
        <div
          className='w-full md:w-1/2 h-full bg-cover bg-center relative'
          style={{
            backgroundImage: `url(${signupbg})`, // Replace with actual background image path
          }}
        >
          {/* Dark Overlay */}
          <div className='absolute inset-0 bg-black opacity-50'></div>
          {/* Centered Content on top of the background */}
          <div className='relative z-10 flex flex-col items-center justify-center text-white text-center p-6 md:p-16 space-y-5 h-full'>
            {/* Logo and Heading */}
            <div className='flex flex-col items-center '>
              {/* Logo */}
              <img
                src={footerlogo}
                alt='Limo Anywhere Logo'
                className='h-32 w-auto mb-4'
                data-aos='fade-up'
              />

              <a
                href='/'
                className='text-white hover:text-red-500'
                data-aos='fade-up'
              >
                <span className='text-2xl font-bold'>LIMOLEAD</span>
              </a>
            </div>

            {/* Main Heading */}
            <h1
              className='text-3xl md:text-4xl font-bold leading-tight'
              data-aos='fade-up'
            >
              All The Software You Need To Run Your Black Car Business
            </h1>
            <h2
              className='text-3xl md:text-4xl text-red-500 font-semibold'
              data-aos='fade-up'
            >
              Successfully
            </h2>

            {/* Descriptive Paragraph */}
            <p
              className='text-lg leading-relaxed max-w-md mx-auto hidden md:block'
              data-aos='fade-up'
            >
              Take your black car business to the next level with our booking,
              scheduling, and dispatch system. Grow your revenue through
              passenger mobile apps and online reservations. Become part of the
              largest ground transportation network in the world.
              <br />
              Join LimoLead Today!
            </p>
          </div>
        </div>

        {/* Right Side with Form */}
        <div className='w-full md:w-1/2 flex items-center justify-center bg-white p-6 h-full'>
          <div className='max-w-md w-full'>
            <h2
              className='text-3xl md:text-4xl font-semibold mb-4 text-center md:text-left'
              data-aos='fade-up'
            >
              Get Started Today
            </h2>
            <p
              className='text-lg mb-6 text-center md:text-left'
              data-aos='fade-up'
            >
              We'll contact you shortly to set up a custom demo and show you why
              LimoLead is preferred by over 5,500 limo operators.
            </p>

            {/* Form */}
            <form className='space-y-2'>
              <div>
                <input
                  type='text'
                  placeholder='Enter your name'
                  className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600'
                  data-aos='fade-up'
                />
              </div>
              <div>
                <input
                  type='text'
                  placeholder='Enter your company'
                  className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600'
                  data-aos='fade-up'
                />
              </div>
              <div>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600'
                  data-aos='fade-up'
                />
              </div>
              <div>
                <input
                  type='tel'
                  placeholder='Enter your phone'
                  className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600'
                  data-aos='fade-up'
                />
              </div>
              <div>
                <select
                  className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600'
                  data-aos='fade-up'
                >
                  <option>Select Your Plan</option>
                  <option>Basic</option>
                  <option>Standard</option>
                  <option>Premium</option>
                </select>
              </div>
              <div>
                <input
                  type='number'
                  placeholder='Enter your fleet size'
                  className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600'
                  data-aos='fade-up'
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full bg-red-900 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300'
                data-aos='fade-up'
              >
                LET'S CONNECT
              </button>
            </form>

            {/* Privacy Policy */}
            <p className='text-sm text-gray-600 mt-3' data-aos='fade-up'>
              By submitting this form, you're accepting LimoLead's{" "}
              <a href='#' className='text-red-600'>
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
