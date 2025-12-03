// app/components/pages/Classes.tsx
import { Outlet } from "react-router-dom";

export default function Classes() {
  return (
    <section className="w-full max-w-[1174px] mx-auto px-4 sm:px-6 lg:px-0">
      <p className="text-[26px] font-semibold text-[#081E37] mb-6 lg:mb-[26px]">
        Class Management
      </p>

      <div className="w-full lg:w-[1174px] min-h-[1183px] pt-6 lg:pt-[23px] px-6 lg:px-[24px] rounded-[16px] bg-white shadow-sm">
        <Outlet />
      </div>
    </section>
  );
}