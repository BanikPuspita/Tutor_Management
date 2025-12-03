import { ChevronDown, Edit, Eye, Search, Trash2, AlertTriangle } from "lucide-react";
import { useStudents } from "./StudentContext";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function StudentList() {
  const { students, deleteStudent } = useStudents();

  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const openDeleteModal = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    deleteStudent(selectedId);
    setShowModal(false);
  };

  return (
    <div className="w-full">
      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-[24px] flex-wrap gap-4">
        {/* LEFT */}
        <div className="flex flex-wrap gap-[20px] w-full lg:w-auto">
          <div className="flex flex-wrap gap-[29px] w-full lg:w-auto">
            {/* SEARCH */}
            <div className="flex items-center h-[42px] w-[260px] rounded-full gap-2 ring-1 ring-[#E5E7EB] px-3">
              <Search className="w-[18px] h-[18px] text-[#A4A7AE]" />
              <input
                type="text"
                placeholder="Search Student"
                className="font-normal text-[14px] text-[#A4A7AE] outline-none w-full"
              />
            </div>

            {/* DATE */}
            <div className="flex items-center w-[126px] h-[42px] gap-2 rounded-full ring-1 ring-[#E5E7EB] px-3">
              <span className="font-normal text-[14px] text-[#A4A7AE]">Date range</span>
              <ChevronDown className="w-[18px] h-[18px] text-[#A4A7AE]" />
            </div>

            {/* SORT */}
            <div className="flex items-center w-[126px] h-[42px] gap-2 rounded-full ring-1 ring-[#E5E7EB] px-3">
              <span className="font-normal text-[14px] text-[#A4A7AE]">Sort by</span>
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
            + Add Student
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="w-full overflow-x-auto lg:overflow-visible">
        <table className="w-full bg-white">
          <thead className="bg-[#ECECEC]">
            <tr
              className="
                text-left font-medium text-[#081E37]
                text-[12px] md:text-[14px] lg:text-[16px]
              "
            >
              <th className="py-2 md:py-3 lg:py-[10px]">Join Date</th>
              <th className="py-2 md:py-3 lg:py-[10px]">Full Name</th>
              <th className="py-2 md:py-3 lg:py-[10px]">Email</th>
              <th className="py-2 md:py-3 lg:py-[10px]">Phone</th>
              <th className="py-2 md:py-3 lg:py-[10px]">Nationality</th>
              <th className="py-2 md:py-3 lg:py-[10px]">Subscribed</th>
              <th className="py-2 md:py-3 lg:py-[10px]">Status</th>
              <th className="py-2 md:py-3 lg:py-[10px]">Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr
                key={student.id}
                className="
                  border-b 
                  h-[40px] md:h-[46px] lg:h-[52px]
                  text-[10px] md:text-[14px] lg:text-[16px]
                  text-[#535862]
                "
              >
                <td>{student.joinDate}</td>
                <td>{student.name}</td>

                {/* EMAIL (wrap small screen) */}
                <td className="break-words max-w-[120px] md:max-w-none">
                  {student.email}
                </td>

                <td>{student.phone}</td>
                <td>{student.nationality}</td>

                {/* SUBSCRIBED */}
                <td>
                  <span
                    className={`
                      inline-flex items-center justify-center       
                      px-2 py-1
                      md:px-3 md:py-1.5
                      lg:w-[70px] lg:h-[34px] lg:px-0 lg:py-0 rounded-[50px] text-[10px] md:text-[12px] lg:text-[16px]
                      ${
                        student.subscribed === "Yes"
                          ? "bg-[#ECFDF3] text-[#17B26A]"
                          : "bg-[#FAE9EB] text-[#D01F34]"
                      }
                    `}
                  >
                    {student.subscribed}
                  </span>
                </td>

                {/* STATUS */}
                <td>
                  <span
                    className={`
                      inline-flex items-center justify-center
                      px-2 py-1
                      md:px-3 md:py-1.5
                      lg:w-[108px] lg:h-[34px] lg:px-0 lg:py-0 rounded-[50px] text-[10px] md:text-[12px] lg:text-[16px]
                      ${
                        student.status === "Active"
                          ? "bg-[#ECFDF3] text-[#17B26A]"
                          : "bg-[#FAE9EB] text-[#D01F34]"
                      }
                    `}
                  >
                    {student.status}
                  </span>
                </td>

                {/* ACTION BUTTONS */}
                <td className="flex pt-2 md:pt-3 lg:pt-4 gap-2 md:gap-3 lg:gap-[12px] items-center">
                  <Link
                    to={`/students/${student.id}`}
                    className="
                      bg-[#E9EAEB] rounded-[6px]
                      w-[24px] h-[24px] p-[4px]
                      md:w-[28px] md:h-[28px] md:p-[5px]
                      lg:w-[32px] lg:h-[32px] lg:p-[6px]
                    "
                  >
                    <Eye className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-[20px] lg:h-[20px]" />
                  </Link>

                  <Link
                    to={`/students/${student.id}`}
                    className="
                      bg-[#D4FFE9] rounded-[6px]
                      w-[24px] h-[24px] p-[4px]
                      md:w-[28px] md:h-[28px] md:p-[5px]
                      lg:w-[32px] lg:h-[32px] lg:p-[6px]
                    "
                  >
                    <Edit className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] lg:w-[20px] lg:h-[20px] text-[#2ABC73]" />
                  </Link>

                  <button
                    onClick={() => openDeleteModal(student.id)}
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


      {/* DELETE CONFIRM MODAL */}
      {showModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
    <div
      className="
        bg-white rounded-[16px] shadow-lg
        w-[572px] h-[193px]
        md:w-[520px] md:h-auto
        sm:w-full sm:max-w-[572px] sm:h-[193px]
        max-sm:w-full max-sm:mx-4
      "
    >
      {/* Top Section */}
      <div className="flex items-start gap-[16px] pt-[16px] px-[24px] pb-[16px]">
        <div className="w-[48px] h-[48px] bg-[#FCE9E9] rounded-full flex items-center justify-center ">
          <AlertTriangle className="w-[24px] h-[24px] text-[#F04438]" />
        </div>

        <div className="flex-1">
          <h2 className="text-lg sm:text-[20px] font-semibold text-[#081E37] mb-[6px]">
            Delete
          </h2>
          <p className="text-[16px] sm:text-[16px] text-[#535862] font-normal leading-[20px]">
            Are you sure you want to delete this student? This action cannot be undone.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="
          flex justify-end bg-[#F9FAFB] py-[18px] px-[24px] gap-[16px]
          rounded-b-[16px]
        "
      >
        <button
          className="
            px-[32px] py-[7px] w-[110px] h-[44px]
            sm:w-auto sm:h-[40px] sm:px-[20px]
            rounded-[50px]
            ring-[1px] ring-[#808080]
            bg-white text-[#535862] text-[16px] sm:text-[14px] font-normal
          "
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>

        <button
          className="
            px-[32px] py-[7px] w-[110px] h-[44px]
            sm:w-auto sm:h-[40px] sm:px-[20px]
            bg-[#F04438] text-white text-[16px] sm:text-[14px]
            font-semibold rounded-[50px]
          "
          onClick={confirmDelete}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
