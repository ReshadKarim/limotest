import { useState } from "react";
import { useLocation } from "react-router-dom";

// Importing images from the public folder
import tab1 from "/MyOffice.png";
import redtab1 from "/MyOfficeRed.png";
import tab2 from "/Reservations.png";
import redtab2 from "/ReservationsRed.png";
import tab3 from "/Dispatch.png";
import redtab3 from "/DispatchRed.png";
import tab4 from "/Transactions.png";
import redtab4 from "/TransactionsRed.png";
import tab5 from "/Schedule.png";
import redtab5 from "/ScheduleRed.png";
import tab6 from "/Reports.png";
import redtab6 from "/ReportsRed.png";
import tab7 from "/Network.png";
import redtab7 from "/NetworkRed.png";
import tab8 from "/Memos.png";
import redtab8 from "/MemosRed.png";
import tab9 from "/Addons.png";
import redtab9 from "/AddonsRed.png";
import tab10 from "/Tools.png";
import redtab10 from "/ToolsRed.png";
import tab11 from "/Notifications.png";
import redtab11 from "/NotificationsRed.png";

function Admin_Tabbar() {
  const location = useLocation(); // Get the current location (URL)

  const navItems = [
    {
      label: "My Office",
      defaultIcon: tab1,
      hoverIcon: redtab1,
      href: "/adminPanelMyOffice",
    },
    {
      label: "Reservations",
      defaultIcon: tab2,
      hoverIcon: redtab2,
      href: "/admin_Reservations",
    },
    {
      label: "Dispatch",
      defaultIcon: tab3,
      hoverIcon: redtab3,
      href: "/admin_Dispatch",
    },
    {
      label: "Transactions",
      defaultIcon: tab4,
      hoverIcon: redtab4,
      href: "/admin_Transactions",
    },
    {
      label: "Schedule",
      defaultIcon: tab5,
      hoverIcon: redtab5,
      href: "/admin_Schedule",
    },
    {
      label: "Reports",
      defaultIcon: tab6,
      hoverIcon: redtab6,
      href: "/admin_Reports",
    },
    {
      label: "Network",
      defaultIcon: tab7,
      hoverIcon: redtab7,
      href: "/admin_Network",
    },
    {
      label: "Memos",
      defaultIcon: tab8,
      hoverIcon: redtab8,
      href: "/admin_Memos",
    },
    {
      label: "Addons",
      defaultIcon: tab9,
      hoverIcon: redtab9,
      href: "/admin_Addons",
    },
    {
      label: "Tools",
      defaultIcon: tab10,
      hoverIcon: redtab10,
      href: "/admin_Tools",
    },
    {
      defaultIcon: tab11,
      hoverIcon: redtab11,
      href: "/notifications",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='bg-black font-[Outfit] py-7 fixed w-full z-50'>
      <div className='container mx-auto flex justify-around items-center px-5 lg:px-32'>
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.href; // Check if current page matches the href
          return (
            <a
              key={item.label}
              href={item.href}
              className='flex flex-col items-center text-white transition duration-300'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={
                  isActive || hoveredIndex === index
                    ? item.hoverIcon
                    : item.defaultIcon
                }
                alt={item.label}
                className='h-10 w-10 mb-1'
              />
              <span
                className={`text-xs font-semibold ${
                  isActive || hoveredIndex === index
                    ? "text-[#C51111]"
                    : "text-white"
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Admin_Tabbar;
