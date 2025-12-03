import { temp1, temp2, temp3, temp4 } from "~/utils/images/temp.image";

export default function TopStats() {
  return (
    <section
      className="
        mt-[24px] 
        flex 
        flex-col sm:flex-row 
        flex-wrap 
        gap-[16px] sm:gap-[24px]
      "
    >
      {/* Card 1 */}
      <div className="flex items-center bg-[#FFFFFF] w-full sm:w-[275.5px] h-[132px] rounded-[16px] py-[26px] pl-[20px] gap-[16px]">
        <img src={temp1} alt="" className="w-[80px] h-[80px]" />
        <div>
          <h1 className="font-bold text-[32px] text-[#081E37]">450</h1>
          <p className="font-normal text-[16px] text-[#535862]">Total Students</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex items-center bg-[#FFFFFF] w-full sm:w-[275.5px] h-[132px] rounded-[16px] py-[26px] pl-[20px] gap-[16px]">
        <img src={temp2} alt="" className="w-[80px] h-[80px]" />
        <div>
          <h1 className="font-bold text-[32px] text-[#081E37]">55</h1>
          <p className="font-normal text-[16px] text-[#535862]">Total Teachers</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex items-center bg-[#FFFFFF] w-full sm:w-[275.5px] h-[132px] rounded-[16px] py-[26px] pl-[20px] gap-[16px]">
        <img src={temp3} alt="" className="w-[80px] h-[80px]" />
        <div>
          <h1 className="font-bold text-[32px] text-[#081E37]">15</h1>
          <p className="font-normal text-[16px] text-[#535862]">Total Course</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="flex items-center bg-[#FFFFFF] w-full sm:w-[275.5px] h-[132px] rounded-[16px] py-[26px] pl-[20px] gap-[16px]">
        <img src={temp4} alt="" className="w-[80px] h-[80px]" />
        <div>
          <h1 className="font-bold text-[32px] text-[#081E37]">$95,250</h1>
          <p className="font-normal text-[16px] text-[#535862]">Total Earning</p>
        </div>
      </div>
    </section>
  );
}
