import { arrowLine, calender, caretDown } from "~/utils/images/icon.image";

export default function EarningsChart() {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  const barHeights = [84, 58, 90, 36, 110, 120, 165, 130, 110, 150, 110, 130];

  return (
    <section className="w-full sm:w-[672px] p-[20px] bg-[#FFFFFF] rounded-[16px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
        <div>
          <p className="font-semibold text-[18px] text-[#081E37]">
            Total Earnings
          </p>
          <div className="flex gap-[12.13px] items-center">
            <h2 className="font-semibold text-[18px] text-[#081E37]">$75,745</h2>
            <span className="flex items-center gap-[2.46px]">
              <img src={arrowLine} alt="" className="w-[14.78px] h-[14.78px]" />
              <p className="font-normal text-[14.62px] text-[#17B26A]">16%</p>
            </span>
          </div>
        </div>

        <div className="flex items-center w-[114px] h-[40px] rounded-full ring-1 ring-[#144B8A] p-[12px] gap-[6px]">
          <img src={calender} alt="" className="w-[11px] h-[11px]" />
          <p className="font-medium text-[12px] text-[#144B8A]">Monthly</p>
          <img src={caretDown} alt="" className="w-[16px] h-[16px]" />
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative w-full sm:w-[632px] mt-10 h-[250px]">
        {/* Horizontal Dashed Grid Lines */}
        <div className="absolute inset-x-0 top-0 h-[240px] flex flex-col justify-between pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-full border-t border-dashed border-[#E5E7EB]" />
          ))}
        </div>

        {/* Y-Axis Labels */}
        <div className="absolute left-10 top-3.5 h-[240px] flex flex-col justify-between text-xs text-gray-400 -translate-x-10">
          <span>500k</span>
          <span>100k</span>
          <span>50k</span>
          <span>20k</span>
          <span>10k</span>
          <span>5k</span>
        </div>

        {/* Bars + Tooltip + Dot */}
        <div className="absolute bottom-0 left-0 right-0 h-[240px] flex items-end justify-between px-4 sm:px-8">
          {barHeights.map((height, i) => {
            const isJuly = i === 6;
            return (
              <div key={i} className="relative flex flex-col items-center flex-1">
                {/* Tooltip */}
                {isJuly && (
                  <div className="absolute -top-24 left-1/2 -translate-x-1/2 bg-white px-6 py-4 rounded-2xl shadow-xl border border-gray-100 whitespace-nowrap z-10">
                    <p className="text-xs text-gray-500 font-medium">July 2024</p>
                    <p className="text-lg font-bold text-[#081E37] mt-1">$75,745</p>
                  </div>
                )}

                {/* Dot */}
                {isJuly && (
                  <div className="absolute w-3 h-3 bg-[#144B8A] rounded-full shadow-md z-20 -mt-5"></div>
                )}

                {/* Bar */}
                <div
                  className={`w-5 sm:w-7 rounded-t-xl transition-all ${
                    isJuly ? "bg-[#144B8A]" : "bg-[#E5E7EB] bg-striped-gray"
                  }`}
                  style={{ height: `${height}px` }}
                />

                {/* Month Label */}
                <span className="absolute bottom-[-32px] text-xs text-[#6B7280] font-medium">
                  {months[i]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
