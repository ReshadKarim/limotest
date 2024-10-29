import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import S1_DispatchSystem from "./pages/S1_DispatchSystem";
import S2_BookingSoftware from "./pages/S2_BookingSoftware";
import S3_DriverApplication from "./pages/S3_DriverApplication";
import S4_WebsiteCMS from "./pages/S4_WebsiteCMS";
import S5_CustomizableAddons from "./pages/S5_CustomizableAddons";
import S6_PassengerApp from "./pages/S6_PassengerApp";
import S7_PaymentSolution from "./pages/S7_PaymentSolution";
import S8_AffiliateNetwork from "./pages/S8_AffiliateNetwork";
import SignUp from "./pages/SignUp";
import AdminLogIn from "./pages/AdminLogIn";
import AdminPanelMyOffice from "./pages/AdminPanelMyOffice";
import Admin_Reservations from "./pages/Admin_Reservations";
import Admin_Dispatch from "./pages/Admin_Dispatch";
import Admin_Transactions from "./pages/Admin_Transactions";
import Admin_Schedule from "./pages/Admin_Schedule";
import Admin_Reports from "./pages/Admin_Reports";
import Admin_Network from "./pages/Admin_Network";
import Admin_Memos from "./pages/Admin_Memos";
import Admin_Addons from "./pages/Admin_Addons";
import Admin_Tools from "./pages/Admin_Tools";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/adminlogin",
    element: <AdminLogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/S1_DispatchSystem",
    element: <S1_DispatchSystem />,
  },
  {
    path: "/S2_BookingSoftware",
    element: <S2_BookingSoftware />,
  },
  {
    path: "/S3_DriverApplication",
    element: <S3_DriverApplication />,
  },
  {
    path: "/S4_WebsiteCMS",
    element: <S4_WebsiteCMS />,
  },
  {
    path: "/S5_CustomizableAddons",
    element: <S5_CustomizableAddons />,
  },
  {
    path: "/S6_PassengerApp",
    element: <S6_PassengerApp />,
  },
  {
    path: "/S7_PaymentSolution",
    element: <S7_PaymentSolution />,
  },
  {
    path: "/S8_AffiliateNetwork",
    element: <S8_AffiliateNetwork />,
  },
  {
    path: "/adminPanelMyOffice",
    element: <AdminPanelMyOffice />,
  },
  {
    path: "/admin_Reservations",
    element: <Admin_Reservations />,
  },
  {
    path: "/admin_Dispatch",
    element: <Admin_Dispatch />,
  },
  {
    path: "/admin_Transactions",
    element: <Admin_Transactions />,
  },
  {
    path: "/admin_Schedule",
    element: <Admin_Schedule />,
  },
  {
    path: "/admin_Reports",
    element: <Admin_Reports />,
  },
  {
    path: "/admin_Network",
    element: <Admin_Network />,
  },
  {
    path: "/admin_Memos",
    element: <Admin_Memos />,
  },
  {
    path: "/admin_Addons",
    element: <Admin_Addons />,
  },
  {
    path: "/admin_Tools",
    element: <Admin_Tools />,
  },
]);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration (in ms)
      easing: "ease-in-out", // Easing function
      once: true, // Animation happens only once when scrolling down
      mirror: false, // Disable animation on scroll up
    });
  }, []);
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
