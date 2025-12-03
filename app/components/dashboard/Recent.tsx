import { Eye } from "lucide-react";

export default function Recent() {
  const registeredStudents = [
    { date: "2025-01-03", name: "Forhad Alam", classType: "Korean Course 1-A" },
    { date: "2025-01-03", name: "Forhad Alam", classType: "Korean Course 2-B" },
    { date: "2025-01-03", name: "Forhad Alam", classType: "Korean Course 2-B" },
  ];

  const forumPosts = [
    { date: "2025-01-03", courseName: "Korean Course 1-A", subject: "Beginner's Corner" },
    { date: "2025-01-03", courseName: "Korean Course 1-A", subject: "Beginner's Corner" },
    { date: "2025-01-03", courseName: "Korean Course 1-A", subject: "Beginner's Corner" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-[17px]">
      {/* Recent Registered Student */}
      <section className="flex-1 w-full lg:w-[575px] h-[315px] bg-[#FFFFFF] rounded-[16px] p-[20px]">
        <div className="flex items-center justify-between mb-[16px]">
          <h2 className="text-[18px] font-semibold text-[#081E37]">Recent Registered Student</h2>
          <button className="px-[24px] py-[8px] w-[99px] h-[35px] bg-[#144B8A] text-white text-[14px] font-medium rounded-[50px]">
            View All
          </button>
        </div>

        <table className="w-full h-[224px]">
          <thead className="bg-[#F6F6F6] text-[#081E37] text-[14px] font-medium">
            <tr>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Class Type</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-[#535862] text-[14px] font-normal">
            {registeredStudents.map((item, i) => (
              <tr key={i} className="border-t border-[#E5E7EB]">
                <td className="py-4 px-4">{item.date}</td>
                <td className="py-4 px-4 font-medium">{item.name}</td>
                <td className="py-4 px-4">{item.classType}</td>
                <td className="py-4 px-4 text-center">
                  <button className="w-[32px] h-[32px] rounded-[8px] p-[6px] bg-[#E9EAEB] flex items-center justify-center">
                    <Eye className="w-[20px] h-[20px] text-[#6B7280]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Recent Class Forum */}
      <section className="flex-1 w-full lg:w-[575px] h-[315px] bg-[#FFFFFF] rounded-[16px] p-[20px]">
        <div className="flex items-center justify-between mb-[16px]">
          <h2 className="text-[18px] font-semibold text-[#081E37]">Recent Class Forum</h2>
          <button className="px-[24px] py-[8px] w-[99px] h-[35px] bg-[#144B8A] text-white text-[14px] font-medium rounded-[50px]">
            View All
          </button>
        </div>

        <table className="w-full h-[224px]">
          <thead className="bg-[#F6F6F6] text-[#081E37] text-[14px] font-medium">
            <tr>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Course Name</th>
              <th className="py-3 px-4 text-left">Subject</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-[#535862] text-[14px] font-normal">
            {forumPosts.map((item, i) => (
              <tr key={i} className="border-t border-[#E5E7EB]">
                <td className="py-4 px-4">{item.date}</td>
                <td className="py-4 px-4 font-medium">{item.courseName}</td>
                <td className="py-4 px-4">{item.subject}</td>
                <td className="py-4 px-4 text-center">
                  <button className="w-[32px] h-[32px] rounded-[8px] p-[6px] bg-[#E9EAEB] flex items-center justify-center">
                    <Eye className="w-[20px] h-[20px] text-[#6B7280]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
