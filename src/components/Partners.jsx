import partner1 from "/partner-1.png";
import partnerGriddUp from "/partner-2.png";
import partnerNla from "/partner-3.png";
import partnerGranspan from "/partner-4.png";
import partnerHQ from "/partner-5.png";

const logos = [
  partner1,
  partnerGriddUp,
  partnerNla,
  partnerGranspan,
  partnerHQ,
];

function Partners() {
  return (
    <div className='bg-black py-10'>
      <div className='flex flex-col md:flex-col lg:flex-row justify-around items-center max-w-screen-xl mx-auto space-y-5 md:space-y-5 lg:space-x-10'>
        {logos.map((logo, index) => (
          <div key={index}>
            <div className='flex items-center'>
              <img
                src={logo}
                alt={`logo-${index}`}
                className='h-8 md:h-10 opacity-80 hover:opacity-100 transition-all duration-300'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
