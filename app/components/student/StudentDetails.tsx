// app/components/student/StudentDetails.tsx
"use client";

import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useParams } from "react-router-dom";
import { useStudents } from "./StudentContext";
import { useState, useEffect } from "react";
import { Edit3, Calendar } from "lucide-react";
import { img6 } from "~/utils/images/temp.image"; // Your fixed avatar

export default function StudentDetails() {
  const { id } = useParams();
  const { students, updateStudent } = useStudents();
  const navigate = useNavigate(); // Initialize the navigate function

  const student = students.find((s) => s.id === id || s.id === Number(id));

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    nationality: "",
    joinDate: "",
    status: "Active",
    subscribed: "Yes",
  });

  useEffect(() => {
    if (student) {
      setForm({
        fullName: student.fullName || student.name || "",
        email: student.email || "",
        phoneNumber: student.phoneNumber || student.phone || "",
        dateOfBirth: student.dateOfBirth || "",
        nationality: student.nationality || "South Korea",
        joinDate: student.joinDate || "",
        status: student.status || "Active",
        subscribed: student.subscribed || "Yes",
      });
    }
  }, [student]);

  const handleUpdate = () => {
    updateStudent(student?.id || id, form);
    setTimeout(() => {
      navigate(`/students/${student?.id}/details`);  // Redirect after delay
    }, 1000); // Adjust the delay (in milliseconds) as needed
  };
  if (!student)
    return (
      <div className="text-center py-10 text-gray-500">Student not found</div>
    );

  return (
    <div className="h-[665px] bg-[#F5F7FB] rounded-[16px] ">
      <div className="p-[24px] ">
        {/* Title */}
        <h2 className="font-medium text-[20px] text-[#081E37] ">
          General Information
        </h2>

        <div className="pt-[22px]">
          <div className="flex-col">
            {/* Avatar - Always shows img6 */}
            <div className="relative flex-shrink-0">
              <div className="w-[96px] h-[96px] rounded-full overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={img6}
                  alt="Student Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0.5 left-15 bg-white rounded-full p-2 shadow-lg border border-gray-300 hover:bg-gray-50 transition">
                <Edit3 className="w-[16px] h-[16px] text-gray-600" />
              </button>
            </div>

            {/* Form Grid */}
            <div className="flex-1 grid grid-cols-2 pt-[22px] gap-x-[24px] gap-y-[22px] ">
              {/* Full Name */}
              <div>
                <label className="block font-medium text-[18px] text-[#081E37] mb-[8px] ">
                  Full Name
                </label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  className="w-full h-[44px] px-[16px] py-[10px] bg-[#FFFFFF] ring-[1px] ring-[#E2E8F0] rounded-[8px] font-light text-[16px] text-[#081E37] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition"
                  placeholder="Md Forhad Alam"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium text-[18px] text-[#081E37] mb-[8px]">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full h-[44px] px-[16px] py-[10px] bg-[#FFFFFF] ring-[1px] ring-[#E2E8F0] rounded-[8px] font-light text-[16px] text-[#081E37] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block font-medium text-[18px] text-[#081E37] mb-[8px]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={form.phoneNumber}
                  onChange={(e) =>
                    setForm({ ...form, phoneNumber: e.target.value })
                  }
                  className="w-full h-[44px] px-[16px] py-[10px] bg-[#FFFFFF] ring-[1px] ring-[#E2E8F0] rounded-[8px] font-light text-[16px] text-[#081E37] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition"
                />
              </div>

              {/* Date of Birth */}
              <div className="relative">
                <label className="block font-medium text-[18px] text-[#081E37] mb-[8px]">
                  Date of Birth
                </label>
                <input
                  type="date"
                  value={form.dateOfBirth}
                  onChange={(e) =>
                    setForm({ ...form, dateOfBirth: e.target.value })
                  }
                  className="w-full h-[44px] px-[16px] py-[10px] bg-[#FFFFFF] ring-[1px] ring-[#E2E8F0] rounded-[8px] font-light text-[16px] text-[#081E37] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition"
                />
                <Calendar className="absolute right-4 top-11 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Nationality */}
              <div>
                <label className="block font-medium text-[18px] text-[#081E37] mb-[8px]">
                  Nationality
                </label>
                <select
                  value={form.nationality}
                  onChange={(e) =>
                    setForm({ ...form, nationality: e.target.value })
                  }
                  className="w-full h-[44px] px-[16px] py-[10px] bg-[#FFFFFF] ring-[1px] ring-[#E2E8F0] rounded-[8px] font-light text-[16px] text-[#081E37] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition"
                >
                  <option>South Korea</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Join Date */}
              <div>
                <label className="block font-medium text-[18px] text-[#081E37] mb-[8px]">
                  Join Date
                </label>
                <input
                  type="date"
                  value={form.joinDate}
                  onChange={(e) =>
                    setForm({ ...form, joinDate: e.target.value })
                  }
                  className="w-full h-[44px] px-[16px] py-[10px] bg-[#FFFFFF] ring-[1px] ring-[#E2E8F0] rounded-[8px] font-light text-[16px] text-[#081E37] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block font-medium text-[18px] text-[#081E37] mb-[8px]">
                  Status
                </label>
                <select
                  value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value })}
                  className="w-full h-[44px] px-[16px] py-[10px] bg-[#FFFFFF] ring-[1px] ring-[#E2E8F0] rounded-[8px] font-light text-[16px] text-[#081E37] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              {/* Subscribed */}
              <div>
                <label className="block font-medium text-[18px] text-[#081E37] mb-[8px]">
                  Subscribed
                </label>
                <select
                  value={form.subscribed}
                  onChange={(e) =>
                    setForm({ ...form, subscribed: e.target.value })
                  }
                  className="w-full h-[44px] px-[16px] py-[10px] bg-[#FFFFFF] ring-[1px] ring-[#E2E8F0] rounded-[8px] font-light text-[16px] text-[#081E37] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Update Button */}
        <div className="py-[22px] flex justify-end mb-[24px]">
          <button
            onClick={handleUpdate}
            className="px-[16px] py-[8px] w-[140px] h-[44px] rounded-[50px] bg-[#144B8A] text-[#FFFFFF] text-[18px] font-bold"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
