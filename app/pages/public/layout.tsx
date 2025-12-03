// app/pages/public/layout.tsx

import { Outlet } from "react-router";
import { lazy, Suspense, useEffect, useState } from "react";

const Sidebar = lazy(() => import("~/components/layout/Sidebar.tsx"));
const Navbar = lazy(() => import("~/components/layout/Navbar.tsx"));

export default function PublicLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [autoCollapsed, setAutoCollapsed] = useState(false);

  // Auto collapse logic for 1020–1300px
  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      if (w >= 1020 && w <= 1300) {
        setAutoCollapsed(true);
      } else {
        setAutoCollapsed(false);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#F5F7FB] font-pretendard w-full max-w-[1536px] min-h-screen mx-auto flex flex-col lg:flex-row">

      {/* Sidebar (mobile + desktop auto collapse) */}
      <div
        className={`
          fixed lg:static top-0 left-0 z-50
          ${openSidebar ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          transition-transform duration-300
        `}
      >
        <Suspense fallback={<div className="w-[314px] h-screen bg-white" />}>
          <Sidebar
            collapsed={autoCollapsed}
            onSelect={() => setOpenSidebar(false)} // <-- ONLY ADDED THIS
          />
        </Suspense>
      </div>

      {/* Mobile overlay */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      {/* Right section */}
      <div className="flex flex-col flex-1 lg:ml-[19px]">

        {/* Mobile menu button */}
        <button
          className="lg:hidden mt-4 ml-4 px-4 py-2 bg-blue-600 text-white rounded-md"
          onClick={() => setOpenSidebar(true)}
        >
          Menu
        </button>

        <Suspense fallback={<div className="w-full h-[82px] bg-white" />}>
  <div className="w-full flex justify-center">
    <div className="w-full max-w-[1200px]">   {/* ← THIS LINE FIXES 1020–1500px */}
      <Navbar />
    </div>
  </div>
</Suspense>


        <div className="mt-[19px] px-3 md:px-6 lg:px-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
