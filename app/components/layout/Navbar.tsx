import { arrow, notification } from "~/utils/images/icon.image";
import { profile } from "~/utils/images/profile.image";

export default function Navbar() {
  return (
    <div
      className="
        w-full
        h-[82px]
        bg-white
        border-b
        rounded-bl-[16px]
        rounded-br-[16px]
        mt-4 lg:mt-0
        px-4 md:px-6
        flex justify-center
      "
    >
      {/* FLUID INNER WRAPPER */}
      <div
        className="
          w-full
          max-w-[1180px]      /* Figma width protection */
          flex items-center justify-between
        "
      >
        {/* Left empty (kept same) */}
        <div></div>

        {/* Right side */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 shrink-0">

          {/* Notification */}
          <div
            className="
              cursor-pointer
              w-[38px] h-[38px] sm:w-[41px] sm:h-[41px]
              rounded-full bg-[#F0F9FF] border border-[#EAECF0]
              p-[8px] sm:p-[10px]
              flex items-center justify-center
              shrink-0
            "
          >
            <img
              src={notification}
              className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]"
            />
          </div>

          {/* Profile */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer shrink-0">
            <img
              src={profile}
              className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-full"
            />

            {/* NO HIDE NEEDED */}
            <div className="text-right">
              <p className="font-semibold text-[14px] text-[#1E2428] leading-[20px]">
                Hossain Rana
              </p>
              <p className="text-[12px] text-[#454545] leading-[18px]">
                Rana@potentialai.com
              </p>
            </div>

            <img src={arrow} className="w-[10px] h-[6px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
