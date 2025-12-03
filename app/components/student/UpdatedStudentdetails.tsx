// app/components/student/UpdatedStudentDetails.tsx
"use client";

import { useParams } from "react-router-dom";
import { useStudents } from "./StudentContext";
import { img6 } from "~/utils/images/temp.image"; // Your fixed avatar

export default function UpdatedStudentDetails() {
  const { id } = useParams();
  const { students } = useStudents();

  const student = students.find(s => s.id === id || s.id === Number(id));

  if (!student) {
    return <div className="text-center py-10 text-gray-500">Student not found</div>;
  }

  return (
    <div className="h-[662px] bg-[#F5F7FB] rounded-[16px] p-[24px] flex flex-col">
      
      {/* Title */}
      <h2 className="font-medium text-[20px] text-[#081E37] mb-[22px]">
        General Information
      </h2>

      {/* Main Content */}
      <div className="flex-1">

        <div className="flex-col gap-[40px]">

          {/* Avatar */}
          <div className="flex-shrink-0 mb-[22px] ">
            <div className="w-[96px] h-[96px] rounded-full overflow-hidden border-[3px] border-[#F5F5F5]">
              <img 
                src={img6} 
                alt="Student" 
                className="object-cover"
              />
            </div>
          </div>

          {/* Details Grid - Two Columns */}
          <div className="flex-1 grid grid-cols-2 gap-x-[32px]">

            {/* Left Column */}
            <div className="space-y-[22px]">
              <div>
                <p className="font-medium text-[18px] text-[#081E37] mb-[8px]">Full Name</p>
                <p className="font-light text-[16px] text-[#081E37]">
                  {student.fullName || student.name || "Md Forhad Alam"}
                </p>
              </div>

              <div>
                <p className="font-medium text-[18px] text-[#081E37] mb-[8px]">Phone Number</p>
                <p className="font-light text-[16px] text-[#081E37]">
                  {student.phoneNumber || student.phone || "+82 01815790063"}
                </p>
              </div>

              <div>
                <p className="font-medium text-[18px] text-[#081E37] mb-[8px]">Nationality</p>
                <p className="font-light text-[16px] text-[#081E37]">
                  {student.nationality || "South Korea"}
                </p>
              </div>

              <div>
                <p className="font-medium text-[18px] text-[#081E37] mb-[8px]">Status</p>
                <span className={`font-light text-[16px] text-[#081E37] `}>
                  {student.status || "Active"}
                </span>
              </div>

              <div>
                <p className="font-medium text-[18px] text-[#081E37] mb-[8px]">Joining Date</p>
                <p className="font-light text-[16px] text-[#081E37]">
                  {student.joinDate || "2025/01/03"}
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-[22px]">
              <div>
                <p className="font-medium text-[18px] text-[#081E37] mb-[8px]">Email Address</p>
                <p className="font-light text-[16px] text-[#081E37]">
                  {student.email || "forhad@potentialai.com"}
                </p>
              </div>

              <div>
                <p className="font-medium text-[18px] text-[#081E37] mb-[8px]">Date of Birth</p>
                <p className="font-light text-[16px] text-[#081E37]">
                  {student.dateOfBirth || "2000/05/12"}
                </p>
              </div>

              <div>
                <p className="font-medium text-[18px] text-[#081E37] mb-[8px]">Class Number</p>
                <p className="font-light text-[16px] text-[#081E37]">
                  {student.classNumber || "23-001"}
                </p>
              </div>

              <div>
                <p className="font-medium text-[18px] text-[#081E37] mb-[8px]">Subscribed</p>
                <span className={`font-light text-[16px] text-[#081E37]`}>
                  {student.subscribed === "Yes" || student.subscribed === true ? "Yes" : "No"}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}