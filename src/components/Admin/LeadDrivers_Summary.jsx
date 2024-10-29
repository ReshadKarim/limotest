import React, { useState, useEffect } from "react";

function LeadDrivers_Summary() {
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [showActionMenu, setShowActionMenu] = useState(null);

  // Mocked API URL for driver data
  const apiUrl = "https://jsonplaceholder.typicode.com/users"; // Replace with your actual API

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setDrivers(data); // Mocked data: update according to your API structure
      } catch (err) {
        console.error("Error fetching drivers:", err);
      }
    };

    fetchDrivers();
  }, []);

  const handleActionClick = (driverId) => {
    setSelectedDriver(driverId);
    setShowActionMenu(driverId);
  };

  const handleHoldUnhold = (driver) => {
    // Toggle hold/unhold status (mocked logic)
    const updatedDrivers = drivers.map((d) =>
      d.id === driver.id
        ? { ...d, status: d.status === "Hold" ? "Active" : "Hold" }
        : d
    );
    setDrivers(updatedDrivers);
    setShowActionMenu(null); // Close action menu after hold/unhold
  };

  const renderActionButton = (driver) => {
    if (driver.status === "Active" || driver.status === "Inactive") {
      return (
        <button
          className='block p-2 text-sm text-gray-700 hover:bg-gray-200'
          onClick={() => handleHoldUnhold(driver)}
        >
          Hold
        </button>
      );
    } else if (driver.status === "Hold") {
      return (
        <button
          className='block p-2 text-sm text-gray-700 hover:bg-gray-200'
          onClick={() => handleHoldUnhold(driver)}
        >
          Unhold
        </button>
      );
    }
  };

  return (
    <div className='p-8 font-[Outfit]'>
      <h1 className='text-3xl font-bold mb-8'>
        <span className='text-red-700'>LEAD</span> DRIVERS
      </h1>
      <table className='table-auto w-3/4 border-collapse'>
        <thead>
          <tr className='bg-black text-white'>
            <th className='py-3 px-4'>Driver Name</th>
            <th>Status</th>
            <th>Service Type</th>
            <th>Trip</th>
            <th>Payment</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver, index) => (
            <tr
              key={driver.id}
              className={`${
                driver.status === "Inactive" ? "bg-gray-200" : "bg-white"
              }`}
              data-aos='fade-up' // Add AOS fade-up effect
              data-aos-duration={500 + index * 100} // Optional: Staggered duration for each row
            >
              <td className='py-4 px-6'>{driver.name}</td>
              <td
                className={`py-4 px-6 font-bold ${
                  driver.status === "Active"
                    ? "text-green-600"
                    : driver.status === "Inactive"
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                {driver.status}
              </td>
              <td className='py-4 px-6'>{driver.serviceType || "-"}</td>
              <td className='py-4 px-6'>{driver.trip || "-"}</td>
              <td className='py-4 px-6 text-green-600 font-bold'>
                {driver.payment ? `$${driver.payment}` : "-"}
              </td>
              <td className='py-4 px-6 text-right'>
                {/* Details Button */}
                <button
                  className='bg-white border border-gray-300 px-4 py-2 rounded-full'
                  onClick={() =>
                    (window.location.href = `/driver/${driver.id}`)
                  }
                >
                  Details
                </button>
              </td>
              <td className='py-4 px-6 text-right relative'>
                {/* 3 dots button to toggle action menu */}
                <button
                  className='text-gray-500'
                  onClick={() => handleActionClick(driver.id)}
                >
                  &#x22EE;
                </button>
                {showActionMenu === driver.id && (
                  <div className='absolute right-0 mt-2 bg-white shadow-lg rounded-lg z-10'>
                    {renderActionButton(driver)}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* "See More" button */}
      <div className='flex justify-center mt-8'>
        <button
          className='bg-white border border-gray-300 px-6 py-3 rounded-full font-bold hover:bg-gray-100'
          onClick={() => (window.location.href = "/drivers")}
        >
          SEE MORE
        </button>
      </div>
    </div>
  );
}

export default LeadDrivers_Summary;
