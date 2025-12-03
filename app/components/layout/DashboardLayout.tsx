import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";

export default function DashboardLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div
      className="
        bg-[#F5F7FB]
        w-full max-w-[1536px]
        min-h-screen
        mx-auto
        flex flex-col lg:flex-row
      "
    >
      {/* Sidebar (mobile slide + desktop fixed) */}
      <div
        className={`
          fixed lg:static top-0 left-0 z-40
          ${openSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          transition-transform duration-300
        `}
      >
        <Sidebar />
      </div>

      {/* Backdrop when sidebar open (mobile only) */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setOpenSidebar(false)}
        ></div>
      )}

      {/* Right side content */}
      <div className="flex flex-col flex-1 lg:ml-[19px]">

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden mt-4 ml-4 px-4 py-2 bg-blue-600 text-white rounded-md"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          Menu
        </button>

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <div className="mt-[24px] px-3 md:px-6 lg:px-0 pb-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
