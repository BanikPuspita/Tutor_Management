import ClassCards from "../dashboard/ClassCards";
import EarningsChart from "../dashboard/EarningsChart";
import Recent from "../dashboard/Recent";
import RecentForum from "../dashboard/RecentForum";
import TopStats from "../dashboard/TopStats";

export default function Dashboard() {
  return (
    <section
      className="
        w-full 
        max-w-[1174px] 
        mx-auto 
        px-4 sm:px-6 lg:px-0
      "
    >
      {/* GREETING */}
      <p className="w-full max-w-[213px] h-[36px] font-semibold text-[22px] text-[#081E37]">
        Good Morning, Rana!
      </p>

      {/* TOP STATS */}
      <div className="mt-[20px]">
        <TopStats />
      </div>

      {/* CHART + RECENT FORUM */}
      <div
        className="
          flex 
          flex-col lg:flex-row 
          mt-[24px] 
          gap-[19px] 
          w-full
        "
      >
        <EarningsChart />

        <RecentForum />
      </div>

      {/* CLASS CARDS */}
      <div className="mt-[24px] w-full">
        <ClassCards />
      </div>

      {/* RECENT TABLE */}
      <div className="mt-[24px] w-full">
        <Recent />
      </div>
    </section>
  );
}
