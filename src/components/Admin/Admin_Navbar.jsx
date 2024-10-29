import navlogo from "/Logo.png";
import { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa"; // Added FaSearch for search icon

function Admin_Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-white border-b-2 border-black font-[Outfit] font-bold rounded-xl sticky top-0 z-50'>
      <div className='container mx-auto px-5 lg:px-28 py-7 flex justify-between items-center'>
        {/* Logo Section */}
        <div className='text-4xl font-bold text-black flex items-center'>
          <img
            src={navlogo} // Replace with actual logo path
            alt='Logo'
            className='h-12 mr-2'
          />
          <a href='/' className='text-black hover:text-red-900'>
            <span className='text-black'>LIMO</span>
            <span className='text-red-900'>LEAD</span>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='text-black'>
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

        {/* Admin Panel Text */}
        <nav className='hidden lg:flex space-x-7'>
          <span className='text-2xl font-bold bg-[#F1F1F1] px-4 py-2 rounded-full shadow-md'>
            ADMIN PANEL
          </span>
        </nav>

        {/* Action Buttons for desktop */}
        <div className='hidden lg:flex items-center space-x-5'>
          {/* + New Reservation Button */}
          <button
            onClick={() => (window.location.href = "/newreservation")}
            className='bg-red-900 text-white px-10 py-1 rounded-full hover:bg-red-700 relative border-2 border-red-900 shadow-[0_0_0_4px_rgba(255,255,255,1),0_0_0_6px_rgba(139,0,0,1)]'
          >
            + New Reservation
          </button>

          {/* Search Icon */}
          <button className='flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full'>
            <FaSearch className='text-black' />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className='absolute top-24 left-0 w-full bg-white flex flex-col items-center space-y-4 lg:hidden z-40 border-t-2 border-black py-4'>
            <span className='text-2xl font-bold bg-white px-4 py-2 rounded-full shadow-md'>
              ADMIN PANEL
            </span>
            <button
              onClick={() => (window.location.href = "/newreservation")}
              className='bg-red-900 text-white px-10 py-1 rounded-full hover:bg-red-700 relative border-2 border-red-900 shadow-[0_0_0_4px_rgba(255,255,255,1),0_0_0_6px_rgba(139,0,0,1)]'
            >
              + New Reservation
            </button>
            <button className='flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full'>
              <FaSearch className='text-black' />
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Admin_Navbar;
