import React from "react";
import loginbg from "/adminlogin.png";

function AdminLogIn() {
  return (
    <div
      className='h-screen w-screen bg-cover bg-center relative flex items-center justify-center p-6 py-10 md:p-12'
      style={{
        backgroundImage: `url(${loginbg})`, // Replace with the actual background image path
      }}
    >
      {/* Responsive Container */}
      <div
        className='w-full max-w-[1200px] flex flex-col md:flex-row items-center md:items-stretch justify-between'
        data-aos='fade-up'
      >
        {/* Left Content */}
        <div className='flex flex-col justify-center text-white w-full md:w-1/2 px-5 md:px-5 lg:px-5'>
          <h1 className='text-3xl md:text-5xl font-bold leading-snug text-center md:text-left'>
            Successfully Run Your Limo Business
          </h1>
          <h2 className='text-2xl md:text-4xl font-medium mt-2 text-center md:text-left'>
            Anytime, Anywhere
          </h2>

          {/* Hide this section on mobile */}
          <div className='mt-10 text-white text-sm space-y-2 hidden md:block'>
            <p>We will be deploying the latest improvements on:</p>
            <p className='font-bold'>
              Tuesday - September 24th, 2024 from 3AM - 6AM US CDT
            </p>
            <p>
              We do not anticipate any downtime associated with this release,
              however, brief service interruptions may occur. To ensure
              uninterrupted access to your upcoming trip details during the
              maintenance period, we recommend utilizing one of the following
              methods:
            </p>
            <ul className='list-disc list-inside space-y-1'>
              <li>Generate a Reservation Manifest</li>
              <li>Configure Recurring Reservation Manifest Email</li>
            </ul>
            <p className='text-red-600 mt-2'>
              Please follow the links below for step-by-step instructions on
              each method.
            </p>
          </div>

          <div className='mt-10 text-center md:text-left'>
            <button
              onClick={() => (window.location.href = "/signup")}
              className='border-4 border-white text-white px-6 py-2 rounded-lg font-bold hover:bg-white hover:text-black transition duration-300'
            >
              GET STARTED NOW
            </button>
          </div>
        </div>

        {/* Right Login Box */}
        <div className='flex items-center justify-center w-full md:w-1/2 mt-10 md:mt-0'>
          <div className='bg-white p-10 rounded-lg shadow-lg w-full md:max-w-sm'>
            {/* Admin Login Header */}
            <h2 className='text-2xl font-semibold mb-4'>Admin Login</h2>

            {/* Login Form */}
            <form>
              <div className='mb-4'>
                <label className='block text-gray-700'>Company ID</label>
                <input
                  type='text'
                  className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600'
                  placeholder='Enter Company ID'
                />
              </div>

              <div className='mb-4'>
                <label className='block text-gray-700'>Username</label>
                <input
                  type='text'
                  className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600'
                  placeholder='Enter Username'
                />
              </div>

              <div className='mb-4'>
                <label className='block text-gray-700'>Password</label>
                <input
                  type='password'
                  className='w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600'
                  placeholder='Enter Password'
                />
              </div>

              <div className='flex items-center justify-between mb-6'>
                <div className='flex items-center'>
                  <input type='checkbox' id='remember-me' className='mr-2' />
                  <label htmlFor='remember-me'>Remember me</label>
                </div>
                <a href='#' className='text-red-600 text-sm'>
                  Forgot Password?
                </a>
              </div>

              <button
                type='submit'
                className='w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300'
              >
                LOG IN
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogIn;
