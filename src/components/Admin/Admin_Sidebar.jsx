import React, { useEffect, useState } from "react";

function Admin_Sidebar() {
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
        setCompanyData(data); // Assuming API returns object similar to user data
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchCompanyData();
  }, []);

  if (isLoading) {
    return <div className='text-center'>Loading...</div>;
  }

  if (error) {
    return <div className='text-center text-red-500'>Error: {error}</div>;
  }

  return (
    <div className='flex flex-col pt-[200px] font-[Outfit] items-center justify-center py-20 px-16 bg-white shadow-lg rounded-lg w-1/4 border-r-2 border-black'>
      {/* Split Welcome */}
      <h1 className='text-5xl font-bold mb-16'>
        <span className='text-red-900'>Wel</span>
        <span className='text-black'>come,</span> <br />
        <span className='text-slate-700'>{companyData.name}</span>
      </h1>

      {/* Inputs with Headline Labels */}
      <div className='space-y-7 w-full'>
        <div>
          <label className='block text-black text-xl font-bold mb-1'>
            Company Name
          </label>
          <input
            type='text'
            value={companyData.company.name}
            readOnly
            className='w-full bg-[#F6F6F6] rounded border border-gray-300 px-2 shadow-md'
          />
        </div>

        <div>
          <label className='block text-black text-xl font-bold mb-1'>
            City/Town
          </label>
          <input
            type='text'
            value={companyData.address.city}
            readOnly
            className='w-full bg-[#F6F6F6] rounded border border-gray-300 px-2 shadow-md'
          />
        </div>

        <div>
          <label className='block text-black text-xl font-bold mb-1'>
            ZIP/Postal Code
          </label>
          <input
            type='text'
            value={companyData.address.zipcode}
            readOnly
            className='w-full bg-[#F6F6F6] rounded border border-gray-300 px-2 shadow-md'
          />
        </div>

        <div>
          <label className='block text-black text-xl font-bold mb-1'>
            Primary Phone Number
          </label>
          <input
            type='text'
            value={companyData.phone}
            readOnly
            className='w-full bg-[#F6F6F6] rounded border border-gray-300 px-2 shadow-md'
          />
        </div>

        <div>
          <label className='block text-black text-xl font-bold mb-1'>
            Primary Email
          </label>
          <input
            type='text'
            value={companyData.email}
            readOnly
            className='w-full bg-[#F6F6F6] rounded border border-gray-300 px-2 shadow-md'
          />
        </div>

        <div>
          <label className='block text-black text-xl font-bold mb-1'>
            Website
          </label>
          <input
            type='text'
            value={companyData.website}
            readOnly
            className='w-full bg-[#F6F6F6] rounded border border-gray-300 px-2 shadow-md'
          />
        </div>
      </div>

      <button className='mt-10 bg-white border-2 border-red-900 text-red-900 px-10 py-2 rounded-2xl font-bold hover:bg-red-900 hover:text-white transition duration-300'>
        Edit Info
      </button>
    </div>
  );
}

export default Admin_Sidebar;
