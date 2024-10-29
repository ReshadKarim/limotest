import phoneicon from "/phone 1.png";
import mapicon from "/map 1.png";

function MapComponent() {
  return (
    <div className='w-full flex justify-center py-20' data-aos='fade-up'>
      <div className='w-3/4 p-5 md:p-10 font-[Outfit]'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.9614855426294!2d-73.85099912358194!3d40.828809630455666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f4cea497b435%3A0x6f1a924b79e14956!2s2251%20Chatterton%20Ave%2C%20Bronx%2C%20NY%2010472%2C%20USA!5e0!3m2!1sen!2sbd!4v1729293328892!5m2!1sen!2sbd'
          className='w-full h-[300px] md:h-[400px] rounded-xl border-2 border-[#D9D9D9]'
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>

        {/* Info Section Below the Map */}
        <div className='flex flex-col md:flex-row justify-between mt-4'>
          {/* Left Side: Map Icon and Place Name */}
          <div className='flex items-center space-x-2 mb-2 md:mb-0'>
            <img src={mapicon} alt='Map Icon' className='w-6 h-6' />
            <span className='text-lg font-semibold'>
              2251 Chatterton Ave, Bronx, NYC
            </span>
          </div>

          {/* Right Side: Phone Icon and Phone Number */}
          <div className='flex items-center space-x-3'>
            <img src={phoneicon} alt='Phone Icon' className='w-6 h-6' />
            <span className='text-lg font-semibold'>+1(555)2564458</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapComponent;
