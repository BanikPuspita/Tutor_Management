import {
  Search,
  Filter,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { img1, img2, img3, img4, img5 } from "~/utils/images/temp.image";

const avatarImages = [img1, img2, img3, img4, img5];

export default function ClassCards() {
  const classes = [
    {
      startDate: "18-02-2025",
      days: ["Tue", "Thu", "Sat"],
      time: "11:00",
      classNumber: "23-002",
      classType: "K-talk Live G-6",
      tutor: "Kim Hwan-hee",
      level: "ILK Volume 1, Lesson 6, Page 1",
      students: ["Abdullah Al Noman", "Shamim Hossain", "Meherab Hossain", "Foysal Alam", "Rifat Hossain", "Saiful Islam"],
    },
    {
      startDate: "05-02-2025",
      days: ["Tue", "Thu", "Sat"],
      time: "11:00",
      classNumber: "24-114",
      classType: "K-Junior",
      tutor: "Kim Monjur kim",
      level: "Beginner Volume 5, Lesson 10, Page 145",
      students: ["Abdullah Al Noman", "Shamim Hossain", "Meherab Hossain", "Foysal Alam", "Rifat Hossain", "Saiful Islam"],
    },
    {
      startDate: "10-01-2025",
      days: ["Tue", "Thu", "Sat"],
      time: "11:00",
      classNumber: "25-220",
      classType: "Privet Class",
      tutor: "Hwan kee",
      level: "Advance Korean,Vol 8,Lesson 5,Page 178",
      students: ["Abdullah Al Noman", "Shamim Hossain", "Meherab Hossain", "Foysal Alam", "Rifat Hossain", "Saiful Islam"],
    },
    {
      startDate: "15-01-2025",
      days: ["Tue", "Thu"],
      time: "11:00",
      classNumber: "22-115",
      classType: "K-talk Live",
      tutor: "Kim Hwan-hee",
      level: "Intermediate Book, Vol 7, Lesson 3, Page 89",
      students: ["Abdullah Al Noman", "Shamim Hossain", "Meherab Hossain", "Foysal Alam", "Rifat Hossain", "Saiful Islam"],
    },
  ];

  return (
    <div className="w-full max-w-[1174px] rounded-[16px] bg-[#FFFFFF] p-[20px]">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full lg:w-auto">
          <h1 className="font-semibold text-[18px] text-[#081E37]">Our All Class</h1>

          <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-6 w-full sm:w-auto">
            {/* Search */}
            <div className="flex items-center h-[42px] flex-1 sm:flex-none rounded-[50px] gap-[4px] ring-1 ring-[#E5E7EB] px-[10px] py-[12px]">
              <Search className="w-[18px] h-[18px] text-[#A4A7AE]" />
              <input
                type="text"
                placeholder="Search Course"
                className="font-normal text-[14px] text-[#A4A7AE] outline-none w-full"
              />
            </div>

            {/* Date range */}
            <div className="flex items-center w-[126px] h-[42px] gap-[6px] rounded-[50px] ring-1 ring-[#E5E7EB] px-[10px] py-[12px]">
              <span className="font-normal text-[14px] text-[#A4A7AE]">Date range</span>
              <ChevronDown className="w-[18px] h-[18px] text-[#A4A7AE]" />
            </div>

            {/* Sort by */}
            <div className="flex items-center w-[126px] h-[42px] gap-[6px] rounded-[50px] ring-1 ring-[#E5E7EB] px-[10px] py-[12px]">
              <span className="font-normal text-[14px] text-[#A4A7AE]">Sort by</span>
              <ChevronDown className="w-[18px] h-[18px] text-[#A4A7AE]" />
            </div>
          </div>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-[16px] mt-2 lg:mt-0">
          <button className="w-[99px] h-[35px] rounded-[50px] bg-[#144B8A] text-white font-medium text-[14px]">View All</button>
          <button className="w-[33px] h-[33px] rounded-full ring-[0.5px] ring-[#144B8A] flex items-center justify-center hover:bg-gray-100">
            <ArrowLeft className="w-[16px] h-[16px] text-[#144B8A]" />
          </button>
          <button className="w-[33px] h-[33px] rounded-full bg-[#144B8A] flex items-center justify-center hover:bg-[#0f3d70]">
            <ArrowRight className="w-[16px] h-[16px] text-white" />
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        {classes.map((cls, index) => (
          <div
            key={index}
            className="bg-white rounded-[16px] ring-[0.8px] ring-[#E9EAEB] shadow-[0_4px_10px_#0000000A] p-[20px] flex flex-col hover:shadow-[0_8px_20px_#00000014] transition-shadow h-[484px]"
          >
            {/* Start Date */}
            <div className="text-[#144B8A] bg-[#EEF6FF] font-normal text-[14px] w-[180px] h-[28px] rounded-[50px] px-[12px] py-[4px] mb-[12px]">
              Start Date : {cls.startDate}
            </div>

            {/* Days & Time */}
            <div className="flex flex-wrap gap-2 mb-[12px]">
              {cls.days.map((day) => (
                <span
                  key={day}
                  className="text-[#144B8A] bg-[#EEF6FF] font-normal text-[12.5px] rounded-[50px] px-[6px] py-[4px]"
                >
                  {day} : {cls.time}
                </span>
              ))}
            </div>

            {/* Class Info */}
            <div className="font-normal text-[16px] text-[#535862] space-y-[4px] mb-[4px]">
              <p>Class Number : {cls.classNumber}</p>
              <p>Class Type : {cls.classType}</p>
              <p>Tutor : {cls.tutor}</p>
            </div>

            {/* Level */}
            <p className="font-semibold text-[#081E37] text-[18px] mb-[4px]">
              Level: {cls.level}
            </p>

            {/* Students List */}
            <div className="flex-1 space-y-[4px] overflow-y-auto">
              {cls.students.map((student, i) => {
                const avatarSrc = avatarImages[i] || avatarImages[i % avatarImages.length];
                return (
                  <div key={i} className="flex items-center gap-[8px]">
                    <img
                      src={avatarSrc}
                      alt={student}
                      className="w-[24px] h-[24px] rounded-full object-cover border-[1px] border-[#FFFFFF]"
                    />
                    <span className="text-[16px] text-[#081E37] truncate">{student}</span>
                  </div>
                );
              })}
            </div>

            {/* View Details Button */}
            <button className="mt-auto w-full py-[12px] px-[24px] ring-[1px] ring-[#144B8A] bg-[#F5F7FB] text-[16px] text-[#144B8A] rounded-[50px] font-semibold">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
