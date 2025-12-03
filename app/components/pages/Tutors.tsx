/* app/components/pages/Tutors.tsx */
import { Outlet } from "react-router-dom";
import { TutorProvider } from "../tutor/TutorContext";

export default function Tutors() {
  return (
    <TutorProvider>
      <section className="w-full max-w-[1174px]">
        <p className="w-full max-w-[261px] h-[36px] font-semibold text-[26px] text-[#081E37] mb-[26px]">
          Tutor Management
        </p>

        <div
          className="
            w-full 
            max-w-[1174px]
            min-h-[922px]
            pt-[24px] 
            px-[24px] 
            rounded-[16px] 
            bg-[#FFFFFF]
          "
        >
          <Outlet />
        </div>
      </section>
    </TutorProvider>
  );
}
