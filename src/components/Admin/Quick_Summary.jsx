import activeDrivers from "/profile 1.png";
import activeTrips from "/destination 1.png";
import React, { useEffect, useState } from "react";

function Quick_Summary() {
  const [companyData, setCompanyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mocked company info API
  const apiUrl = "https://jsonplaceholder.typicode.com/users/3"; // Replace this with your actual API

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch company data");
        }
        const data = await response.json();
        setCompanyData(data); // Assuming API returns relevant data for Active Drivers/Trips
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    // Initial fetch
    fetchCompanyData();

    // Set interval to fetch data every 5 seconds (5000ms)
    const intervalId = setInterval(fetchCompanyData, 5000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (isLoading) {
    return <div className='text-center'>Loading...</div>;
  }

  if (error) {
    return <div className='text-center text-red-500'>Error: {error}</div>;
  }

  return (
    <div className='flex flex-col items-center justify-center pt-[200px] font-[Outfit]'>
      <h1 className='text-4xl font-bold mb-8'>QUICK SUMMARY</h1>
      <div className='flex space-x-8'>
        {/* Active Drivers Card */}
        <div className='bg-white shadow-lg rounded-lg p-8 text-center w-80'>
          <img
            src={activeDrivers}
            alt='Active Drivers Icon'
            className='mx-auto mb-4 w-12 h-12'
          />
          <h2 className='text-2xl font-bold'>ACTIVE DRIVERS</h2>
          <p className='text-4xl text-red-900 font-bold mt-2'>
            {/* Mocked active drivers data */}
            {companyData?.company?.bs.length || 13}
          </p>
        </div>

        {/* Active Trips Card */}
        <div className='bg-white shadow-lg rounded-lg p-8 text-center w-80'>
          <img
            src={activeTrips}
            alt='Active Trips Icon'
            className='mx-auto mb-4 w-12 h-12'
          />
          <h2 className='text-2xl font-bold'>ACTIVE TRIPS</h2>
          <p className='text-4xl text-red-900 font-bold mt-2'>
            {/* Mocked active trips data */}
            {companyData?.address?.zipcode.length || 11}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Quick_Summary;
