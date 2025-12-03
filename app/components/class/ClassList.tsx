import { useState } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { bar, img1, img2, img3, img4, img5 } from "~/utils/images/temp.image";
import { Edit, Trash2 } from "lucide-react";

const avatarImages = [img1, img2, img3, img4, img5];

export default function ClassList() {
  const [openModal, setOpenModal] = useState(false);

  const [classes, setClasses] = useState([
    {
      startDate: "18-02-2025",
      days: ["Tue", "Thu", "Sat"],
      time: "11:00",
      classNumber: "23-002",
      classType: "K-talk Live G-6",
      tutor: "Kim Hwan-hee",
      level: "ILK Volume 1, Lesson 6, Page 1",
      students: [
        "Abdullah Al Noman",
        "Shamim Hossain",
        "Meherab Hossain",
        "Foysal Alam",
        "Rifat Hossain",
        "Saiful Islam",
      ],
    },
    {
      startDate: "05-02-2025",
      days: ["Tue", "Thu", "Sat"],
      time: "11:00",
      classNumber: "24-114",
      classType: "K-Junior",
      tutor: "Kim Monjur kim",
      level: "Beginner Volume 5, Lesson 10, Page 145",
      students: [
        "Abdullah Al Noman",
        "Shamim Hossain",
        "Meherab Hossain",
        "Foysal Alam",
        "Rifat Hossain",
        "Saiful Islam",
      ],
    },
    {
      startDate: "10-02-2025",
      days: ["Mon", "Wed"],
      time: "12:00",
      classNumber: "24-115",
      classType: "K-talk Live G-5",
      tutor: "Jisoo Park",
      level: "ILK Volume 1, Lesson 4, Page 2",
      students: [
        "Abdullah Al Noman",
        "Shamim Hossain",
        "Meherab Hossain",
        "Foysal Alam",
        "Rifat Hossain",
        "Saiful Islam",
      ],
    },
    {
      startDate: "12-02-2025",
      days: ["Sun", "Tue"],
      time: "10:00",
      classNumber: "24-116",
      classType: "K-Junior",
      tutor: "Lee Min",
      level: "Beginner Volume 2, Lesson 7",
      students: [
        "Abdullah Al Noman",
        "Shamim Hossain",
        "Meherab Hossain",
        "Foysal Alam",
        "Rifat Hossain",
        "Saiful Islam",
      ],
    },
    {
      startDate: "11-02-2025",
      days: ["Fri"],
      time: "09:00",
      classNumber: "24-117",
      classType: "K-talk Live",
      tutor: "Sora Kim",
      level: "Lesson 3",
      students: [
        "Abdullah Al Noman",
        "Shamim Hossain",
        "Meherab Hossain",
        "Foysal Alam",
        "Rifat Hossain",
        "Saiful Islam",
      ],
    },
    {
      startDate: "14-02-2025",
      days: ["Mon", "Wed", "Fri"],
      time: "08:30",
      classNumber: "24-118",
      classType: "K-Advanced",
      tutor: "Han Jiwoo",
      level: "Advanced Volume 1",
      students: [
        "Abdullah Al Noman",
        "Shamim Hossain",
        "Meherab Hossain",
        "Foysal Alam",
        "Rifat Hossain",
        "Saiful Islam",
      ],
    },
    {
      startDate: "15-02-2025",
      days: ["Tue", "Thu"],
      time: "01:00",
      classNumber: "24-119",
      classType: "K-talk Live G-8",
      tutor: "Eunji Kim",
      level: "Lesson 8",
      students: [
        "Abdullah Al Noman",
        "Shamim Hossain",
        "Meherab Hossain",
        "Foysal Alam",
        "Rifat Hossain",
        "Saiful Islam",
      ],
    },
    {
      startDate: "16-02-2025",
      days: ["Sat"],
      time: "03:00",
      classNumber: "24-120",
      classType: "K-Junior",
      tutor: "Mina Choi",
      level: "Starter Level",
      students: [
        "Abdullah Al Noman",
        "Shamim Hossain",
        "Meherab Hossain",
        "Foysal Alam",
        "Rifat Hossain",
        "Saiful Islam",
      ],
    },
  ]);

  // FORM STATES
  const [newClass, setNewClass] = useState({
    startDate: "",
    days: "",
    time: "",
    classNumber: "",
    classType: "",
    tutor: "",
    level: "",
  });

  const handleCreateClass = (e) => {
    e.preventDefault();

    const formatted = {
      ...newClass,
      days: newClass.days.split(",").map((d) => d.trim()),
      students: [], // empty by default
    };

    setClasses([...classes, formatted]);
    setOpenModal(false);
  };

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
                placeholder="Search Course"
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

        <button
          onClick={() => setOpenModal(true)}
          className="w-[197px] h-[48px] px-[15px] py-[12px] rounded-full bg-[#144B8A] font-semibold text-[16px] text-[#FFFFFF]"
        >
          + Create a new Class
        </button>
      </div>

      <div
        className="
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-2
    lg:grid-cols-2
    xl:grid-cols-2
    2xl:grid-cols-4
    gap-[20px]
    flex-1
  "
      >
        {classes.map((cls, index) => (
          <div
            key={index}
            className="
        bg-white 
        rounded-[16px] 
        ring-[0.8px] ring-[#E9EAEB] 
        shadow-[0_4px_10px_#0000000A] 
        p-[20px] 
        w-full 2xl:w-[274px]
        h-[516px] 
        flex flex-col 
        hover:shadow-[0_8px_20px_#00000014] 
        transition-shadow
      "
          >
            {/* Start Date */}
            <div className="flex justify-between items-center mb-[12px]">
              <div className="text-[#144B8A] bg-[#EEF6FF] text-[13px] w-[166px] h-[28px] rounded-[50px] px-[12px] py-[4px] ">
                Start Date : {cls.startDate}
              </div>

              <div className="flex gap-[5px]">
                <button className="bg-[#D4FFE9] rounded-[8px] w-[26px] h-[26px] p-[5px]">
                  <Edit className="w-[16px] h-[16px] text-[#2ABC73]" />
                </button>
                <button className="bg-[#FFEBEB] rounded-[8px] w-[26px] h-[26px] p-[5px]">
                  <Trash2 className="w-[16px] h-[16px] text-[#E31E27]" />
                </button>
              </div>
            </div>

            {/* Days */}
            <div className="flex flex-wrap gap-2">
              {cls.days.map((day) => (
                <span
                  key={day}
                  className="text-[#144B8A] bg-[#EEF6FF] text-[12.5px] rounded-[50px] px-[6px] py-[4px]"
                >
                  {day} : {cls.time}
                </span>
              ))}
            </div>

            {/* Class Details */}
            <div className="text-[16px] text-[#535862] mb-[4px]">
              <p>Class Number : {cls.classNumber}</p>
              <p>Class Type : {cls.classType}</p>
              <p>Tutor : {cls.tutor}</p>
            </div>

            <p className="font-semibold text-[#081E37] text-[18px] mb-[4px]">
              Level: {cls.level}
            </p>

            {/* Student Avatars */}
            <div className="space-y-[6px] overflow-y-auto">
              {cls.students.map((student, i) => {
                const avatarSrc =
                  avatarImages[i] || avatarImages[i % avatarImages.length];
                return (
                  <div key={i} className="flex items-center gap-[8px]">
                    <img
                      src={avatarSrc}
                      className="w-[24px] h-[24px] rounded-full border"
                    />
                    <span className="text-[16px] text-[#535862] truncate">
                      {student}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-[10px] mt-[10px]">
              <img
                src={bar}
                alt=""
                className="w-[200px] h-[20px] object-contain"
              />
              <p className="font-normal text-[16px] text-[#0D083A]">4/6</p>
            </div>

            {/* View Details */}
            <button className="mt-auto w-full py-[12px] px-[24px] ring-1 ring-[#144B8A] bg-[#F5F7FB] text-[16px] text-[#144B8A] rounded-[50px] font-semibold">
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div
            className="
      bg-[#FFFFFF] rounded-[16px] p-[32px]
      w-full max-w-[720px]
      max-h-[90vh] overflow-y-auto
    "
          >
            {/* Header */}
            <div className="border-b border-[#F0F0F0]">
              <h2 className="text-[20px] text-[#081E37] font-semibold">
                Create a new class
              </h2>
            </div>

            {/* Form */}
            <form
              onSubmit={handleCreateClass}
              className="py-[24px] space-y-[20px]"
            >
              {/* Class Type */}
              <div className="flex flex-col md:flex-row items-start gap-[12px]">
                <div className="flex-1 w-full">
                  <label className="block text-[14px] text-[#081E37] font-medium mb-[8px]">
                    Class type
                  </label>

                  <div className="relative">
                    <select
                      className="
                  w-full md:w-[569px] h-[44px]
                  px-[16px] py-[10px]
                  bg-white 
                  ring-[1px] ring-[#E2E8F0]
                  rounded-[8px] appearance-none
                  text-[14px] text-[#A4A7AE]
                "
                      onChange={(e) =>
                        setNewClass({ ...newClass, classType: e.target.value })
                      }
                    >
                      <option value="">Select</option>
                      <option value="K-talk Live G-6">K-talk Live G-6</option>
                      <option value="K-talk Live">K-talk Live</option>
                      <option value="K-Junior">K-Junior</option>
                      <option value="K-Advanced">K-Advanced</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-[14px] w-[16px] h-[16px] text-[#9EA3AE]" />
                  </div>
                </div>

                <button
                  type="button"
                  className="
              w-[63px] h-[44px] mt-2 md:mt-[30px]
              flex items-center justify-center
              bg-white ring ring-[#E2E8F0]
              rounded-[8px] text-[#9EA3AE] text-[22px]
            "
                >
                  +
                </button>
              </div>

              {/* Textbook + Class Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                <div>
                  <label className="block text-[14px] text-[#081E37] font-medium mb-[8px]">
                    Textbook
                  </label>

                  <div className="relative">
                    <select
                      className="
                  w-full md:w-[316px] h-[44px]
                  px-[16px] py-[10px]
                  bg-white ring-[1px] ring-[#E2E8F0]
                  rounded-[8px] text-[14px] text-[#A4A7AE]
                "
                      onChange={(e) =>
                        setNewClass({ ...newClass, level: e.target.value })
                      }
                    >
                      <option value="">Select</option>
                      <option value="ILK Volume 1, Lesson 6, Page 1">
                        ILK Volume 1, Lesson 6, Page 1
                      </option>
                      <option value="ILK Volume 1, Lesson 4, Page 2">
                        ILK Volume 1, Lesson 4, Page 2
                      </option>
                      <option value="Advanced Volume 1">
                        Advanced Volume 1
                      </option>
                      <option value="Starter Level">Starter Level</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-[14px] w-4 h-4 text-[#999999]" />
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] text-[#081E37] font-medium mb-[8px]">
                    Class Number
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="23-002"
                    className="
                w-full md:w-[316px] h-[44px]
                px-[16px] py-[10px]
                bg-white ring-[1px] ring-[#E2E8F0]
                rounded-[8px] text-[14px] text-[#A4A7AE]
              "
                    onChange={(e) =>
                      setNewClass({ ...newClass, classNumber: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Tutor */}
              <div>
                <label className="block text-[14px] text-[#081E37] font-medium mb-[8px]">
                  Tutor
                </label>

                <div className="relative">
                  <select
                    className="
                w-full md:w-[656px] h-[44px]
                px-[16px] py-[10px]
                bg-white ring-[1px] ring-[#E2E8F0]
                rounded-[8px] text-[14px] text-[#A4A7AE]
              "
                    onChange={(e) =>
                      setNewClass({ ...newClass, tutor: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    <option value="Kim Hwan-hee">Kim Hwan-hee</option>
                    <option value="Kim Monjur">Kim Monjur</option>
                    <option value="Jisoo Park">Jisoo Park</option>
                    <option value="Lee Min">Lee Min</option>
                    <option value="Sora Kim">Sora Kim</option>
                    <option value="Han Jiwoo">Han Jiwoo</option>
                    <option value="Eunji Kim">Eunji Kim</option>
                    <option value="Mina Choi">Mina Choi</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-[14px] w-4 h-4 text-[#999999]" />
                </div>
              </div>

              {/* Students */}
              <div>
                <label className="block text-[14px] text-[#081E37] font-medium mb-[8px]">
                  Students
                </label>

                <select
                  className="
              w-full md:w-[656px] h-[44px]
              px-[16px] py-[10px]
              bg-white ring-[1px] ring-[#E2E8F0]
              rounded-[8px] text-[14px] text-[#A4A7AE]
            "
                >
                  <option value="">Select</option>
                  <option value="Abdullah Al Noman">Abdullah Al Noman</option>
                  <option value="Shamim Hossain">Shamim Hossain</option>
                  <option value="Meherab Hossain">Meherab Hossain</option>
                  <option value="Foysal Alam">Foysal Alam</option>
                  <option value="Rifat Hossain">Rifat Hossain</option>
                  <option value="Saiful Islam">Saiful Islam</option>
                </select>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                <div>
                  <label className="block text-[14px] text-[#081E37] font-medium mb-[8px]">
                    Starting Date
                  </label>

                  <input
                    type="text"
                    placeholder="Select"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => !e.target.value && (e.target.type = "text")}
                    className="
                w-full md:w-[316px] h-[44px]
                px-[16px] py-[10px]
                bg-white ring-[1px] ring-[#E2E8F0]
                rounded-[8px] text-[14px] text-[#A4A7AE]
              "
                    onChange={(e) =>
                      setNewClass({ ...newClass, startDate: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-[14px] text-[#081E37] font-medium mb-[8px]">
                    Ending Date (Optional)
                  </label>

                  <input
                    type="text"
                    placeholder="Select"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => !e.target.value && (e.target.type = "text")}
                    className="
                w-full md:w-[316px] h-[44px]
                px-[16px] py-[10px]
                bg-white ring-[1px] ring-[#E2E8F0]
                rounded-[8px] text-[14px] text-[#A4A7AE]
              "
                  />
                </div>
              </div>

              {/* Day + Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
                <div>
                  <label className="block text-[14px] text-[#081E37] font-medium mb-[8px]">
                    Day
                  </label>

                  <select
                    className="
                w-full md:w-[316px] h-[44px]
                px-[16px] py-[10px]
                bg-white ring-[1px] ring-[#E2E8F0]
                rounded-[8px] text-[14px] text-[#A4A7AE]
              "
                    onChange={(e) =>
                      setNewClass({ ...newClass, days: e.target.value })
                    }
                  >
                    <option value="">Select</option>
                    <option value="Sun">Sunday</option>
                    <option value="Mon">Monday</option>
                    <option value="Tue">Tuesday</option>
                    <option value="Wed">Wednesday</option>
                    <option value="Thu">Thursday</option>
                    <option value="Fri">Friday</option>
                    <option value="Sat">Saturday</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[14px] text-[#081E37] font-medium mb-[8px]">
                    Time
                  </label>

                  <input
                    type="text"
                    placeholder="Select"
                    onFocus={(e) => (e.target.type = "time")}
                    onBlur={(e) => !e.target.value && (e.target.type = "text")}
                    className="
                w-full md:w-[316px] h-[44px]
                px-[16px] py-[10px]
                bg-white ring-[1px] ring-[#E2E8F0]
                rounded-[8px] text-[14px] text-[#A4A7AE]
              "
                    onChange={(e) =>
                      setNewClass({ ...newClass, time: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="block text-[14px] text-[#081E37] font-medium mb-[8px]">
                  Note (Optional)
                </label>

                <textarea
                  placeholder="Write a short description..."
                  rows={3}
                  className="
              w-full md:w-[656px]
              px-[16px] py-[10px]
              bg-white ring-[1px] ring-[#E2E8F0]
              rounded-[8px] text-[14px] text-[#A4A7AE]
            "
                />
              </div>

              {/* Zoom link */}
              <div>
                <label className="block text-[14px] text-[#081E37] font-medium mb-[8px]">
                  Zoom link
                </label>

                <input
                  type="url"
                  placeholder="Enter Zoom link"
                  className="
              w-full md:w-[656px]
              px-[16px] py-[10px]
              bg-white ring-[1px] ring-[#E2E8F0]
              rounded-[8px] text-[14px] text-[#A4A7AE]
            "
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row w-full md:w-[656px] gap-[16px] pt-[10px]">
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="
              flex-1 h-[44px]
              bg-white ring-[0.8px] ring-[#A4A7AE]
              text-[#535862] text-[16px] rounded-full
            "
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="
              flex-1 h-[44px]
              bg-[#144B8A] text-white text-[16px]
              rounded-full font-semibold
            "
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
