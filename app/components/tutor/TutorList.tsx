/* app/components/tutor/TutorList.tsx */

import { ChevronDown, Edit, Eye, Search, Trash2 } from "lucide-react";
import { useTutors } from "./TutorContext";

export default function TutorList() {
  const { tutors } = useTutors();

  return (
    <div>
      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-[24px] flex-wrap gap-4">
        {/* LEFT GROUP */}
        <div className="flex flex-wrap gap-[20px] w-full lg:w-auto">
          <div className="flex flex-wrap gap-[29px] w-full lg:w-auto">
            {/* SEARCH */}
            <div className="flex items-center h-[42px] w-[260px] rounded-full gap-2 ring-1 ring-[#E5E7EB] px-3">
              <Search className="w-[18px] h-[18px] text-[#A4A7AE]" />
              <input
                type="text"
                placeholder="Search Tutor"
                className="font-normal text-[14px] text-[#A4A7AE] outline-none w-full"
              />
            </div>

            {/* DATE */}
            <div className="flex items-center w-[126px] h-[42px] gap-2 rounded-full ring-1 ring-[#E5E7EB] px-3">
              <span className="font-normal text-[14px] text-[#A4A7AE]">
                Date range
              </span>
              <ChevronDown className="w-[18px] h-[18px] text-[#A4A7AE]" />
            </div>

            {/* SORT */}
            <div className="flex items-center w-[126px] h-[42px] gap-2 rounded-full ring-1 ring-[#E5E7EB] px-3">
              <span className="font-normal text-[14px] text-[#A4A7AE]">
                Sort by
              </span>
              <ChevronDown className="w-[18px] h-[18px] text-[#A4A7AE]" />
            </div>
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <div className="flex items-center">
          <button
            type="button"
            className="w-[156px] h-[48px] px-[24px] py-[8px] rounded-full bg-[#144B8A] font-semibold text-[16px] text-[#FFFFFF]"
          >
            + Add Tutor
          </button>
        </div>
      </div>

      {/* TABLE */}

      <div className="w-full rounded-lg">
        <table className="w-full bg-white">
          <thead className="bg-[#ECECEC]">
            <tr
              className="text-left font-medium text-[#081E37]
                     text-[12px] md:text-[14px] lg:text-[16px]"
            >
              <th className="py-2 md:py-3 lg:py-[10px]">Join Date</th>
              <th className="py-2 md:py-3 lg:py-[10px]">Full Name</th>
              <th className="py-2 md:py-3 lg:py-[10px]">Email</th>
              <th className="py-2 md:py-3 lg:py-[10px]">Phone</th>
              <th className="py-2 md:py-3 lg:py-[10px]">Status</th>
              <th className="py-2 md:py-3 lg:py-[10px]">Action</th>
            </tr>
          </thead>

          <tbody>
            {tutors.map((tutor) => (
              <tr
                key={tutor.id}
                className="
            border-b 
            h-[40px] md:h-[46px] lg:h-[52px]
            text-[10px] md:text-[14px] lg:text-[16px]
            text-[#535862]
          "
              >
                <td>{tutor.joinDate}</td>
                <td>{tutor.name}</td>
                <td>{tutor.email}</td>
                <td>{tutor.phone}</td>

                <td>
                  <span
                    className={`
                inline-flex items-center justify-center
                rounded-full
                px-2 py-1               
                md:px-3 md:py-1.5       
                lg:w-[108px] lg:h-[34px] lg:px-0 lg:py-0 /* desktop original */

                text-[10px] md:text-[12px] lg:text-[16px]

                ${
                  tutor.status === "Active"
                    ? "bg-[#ECFDF3] text-[#17B26A]"
                    : "bg-[#FAE9EB] text-[#D01F34]"
                }
              `}
                  >
                    {tutor.status}
                  </span>
                </td>

                <td className="flex pt-2 md:pt-3 lg:pt-4 gap-2 md:gap-3 lg:gap-[12px] items-center">
                  {/* VIEW */}
                  <button
                    className="
              bg-[#E9EAEB] rounded-[6px]
              w-[24px] h-[24px] p-[4px]
              md:w-[28px] md:h-[28px] md:p-[5px]
              lg:w-[32px] lg:h-[32px] lg:p-[6px]
            "
                  >
                    <Eye className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-[20px] lg:h-[20px]" />
                  </button>

                  {/* EDIT */}
                  <button
                    className="
              bg-[#D4FFE9] rounded-[6px]
              w-[24px] h-[24px] p-[4px]
              md:w-[28px] md:h-[28px] md:p-[5px]
              lg:w-[32px] lg:h-[32px] lg:p-[6px]
            "
                  >
                    <Edit className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-[20px] lg:h-[20px] text-[#2ABC73]" />
                  </button>

                  {/* DELETE */}
                  <button
                    className="
              bg-[#FFEBEB] rounded-[6px]
              w-[24px] h-[24px] p-[4px]
              md:w-[28px] md:h-[28px] md:p-[5px]
              lg:w-[32px] lg:h-[32px] lg:p-[6px]
            "
                  >
                    <Trash2 className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-[20px] lg:h-[20px] text-[#E31E27]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
