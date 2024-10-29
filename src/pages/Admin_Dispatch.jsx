import React from "react";
import Admin_Navbar from "../components/Admin/Admin_Navbar";
import Admin_Tabbar from "../components/Admin/Admin_Tabbar";
import Admin_Sidebar from "../components/Admin/Admin_Sidebar";

function Admin_Dispatch() {
  return (
    <div>
      <Admin_Navbar />
      <Admin_Tabbar />
      <Admin_Sidebar />
    </div>
  );
}

export default Admin_Dispatch;
