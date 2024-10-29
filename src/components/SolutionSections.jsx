import React from "react";

function SolutionsSection() {
  return (
    <section className='bg-[#262626] font-[Outfit] py-14 md:py-20 lg:py-28'>
      {/* Title Section */}
      <div className='text-center mb-10 md:mb-14'>
        <h2
          className='text-2xl md:text-3xl font-bold text-white mb-2'
          data-aos='fade-up'
        >
          SOLUTIONS THAT WILL ENCHANT YOU
        </h2>
        <p className='text-white font-semibold' data-aos='fade-up'>
          Trendy And Seamless
        </p>
      </div>

      {/* Cards Section */}
      <div
        className='flex flex-col lg:flex-row justify-center items-center gap-8 px-4 md:px-8'
        data-aos='fade-up'
      >
        {/* Card 1 */}
        <div className='bg-[#D9D9D9] rounded-3xl shadow-lg w-full lg:w-[500px] p-8 md:p-12 lg:p-20 text-center transform transition-transform duration-300 hover:scale-105'>
          <h3 className='text-2xl md:text-3xl font-bold text-black'>
            <span className='text-black'>LEAD </span>
            <span className='text-red-900'>PAY</span>
          </h3>
          <p className='text-black text-sm md:text-base font-bold mb-6 md:mb-8 lg:mb-14'>
            Fluent And Secure Transactions
          </p>
          <p className='text-black text-base font-semibold mb-6'>
            At LimoLead, we understand the synergy between Software and
            Payments. That's why we've introduced LimoLead Pay, providing you
            with an integrated payment solution to meet all your business
            requirements.
          </p>

          <button className='relative mt-6 px-5 py-2 md:px-10 md:py-3 border-2 border-red-900 text-black font-bold rounded-full bg-transparent overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-red-900 before:translate-y-full before:transition-transform before:duration-300 hover:before:translate-y-0 hover:shadow-xl hover:text-white'>
            <span className='relative z-10'>Check It Out</span>
          </button>
        </div>

        {/* Card 2 */}
        <div className='bg-[#D9D9D9] rounded-3xl shadow-lg w-full lg:w-[500px] p-8 md:p-12 lg:p-20 text-center transform transition-transform duration-300 hover:scale-105'>
          <h3 className='text-2xl md:text-3xl font-bold text-black'>
            <span className='text-red-900'>AFFILIATE </span>
            <span className='text-black'>NETWORK</span>
          </h3>
          <p className='text-black text-sm md:text-base font-bold mb-6 md:mb-8 lg:mb-14'>
            Grow With Our Existing Clients
          </p>
          <p className='text-black text-base font-semibold mb-6'>
            The simplest way to connect and collaborate with fellow LimoLead
            customers. Strengthen your presence in NYC and become the top choice
            for other LimoLead clients in your local market.
          </p>
          <button className='relative mt-6 px-5 py-2 md:px-10 md:py-3 border-2 border-red-900 text-black font-bold rounded-full bg-transparent overflow-hidden transition-all duration-300 before:absolute before:inset-0 before:bg-red-900 before:translate-y-full before:transition-transform before:duration-300 hover:before:translate-y-0 hover:shadow-xl hover:text-white'>
            <span className='relative z-10'>Explore</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SolutionsSection;
