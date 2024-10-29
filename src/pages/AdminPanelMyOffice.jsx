import React from "react";
import Admin_Navbar from "../components/Admin/Admin_Navbar";
import Admin_Tabbar from "../components/Admin/Admin_Tabbar";
import Admin_Sidebar from "../components/Admin/Admin_Sidebar";
import Quick_Summary from "../components/Admin/Quick_Summary";
import LeadDrivers_Summary from "../components/Admin/LeadDrivers_Summary";

function AdminPanelMyOffice() {
  return (
    <div>
      <Admin_Navbar />
      <Admin_Tabbar />
      <div className='flex'>
        <Admin_Sidebar />
        <div className='flex-1'>
          <Quick_Summary />
          <LeadDrivers_Summary />
        </div>
      </div>
    </div>
  );
}

export default AdminPanelMyOffice;
