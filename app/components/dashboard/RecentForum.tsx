import { Eye } from "lucide-react";

export default function RecentForum() {
  const forums = [
    {
      date: "2025-01-03",
      subject: "Beginner's Corner",
      description: "A welcoming space for beginners to share their...",
    },
    {
      date: "2025-01-03",
      subject: "Beginner's Corner",
      description: "A welcoming space for beginners to share their...",
    },
    {
      date: "2025-01-03",
      subject: "Beginner's Corner",
      description: "A welcoming space for beginners to share their...",
    },
    {
      date: "2025-01-03",
      subject: "Beginner's Corner",
      description: "A welcoming space for beginners to share their...",
    },
  ];

  return (
    <section className="w-full sm:w-[478px] h-auto sm:h-[407px] p-[20px] rounded-[16px] bg-[#FFFFFF]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-4">
        <h2 className="font-semibold text-[18px] text-[#081E37]">Recent School Forum</h2>
        <button
          type="button"
          className="w-full sm:w-[99px] h-[35px] px-[24px] py-[8px] rounded-[50px] bg-[#144B8A] font-medium text-[14px] text-[#FFFFFF]"
        >
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[400px] bg-white">
          <thead className="bg-[#ECECEC] rounded-[8px]">
            <tr className="font-medium text-[14px] text-[#081E37]">
              <th className="w-[25%] py-[12px] px-[8px] text-left">Date</th>
              <th className="w-[25%] py-[12px] px-[8px] text-left">Subject</th>
              <th className="w-[45%] py-[12px] px-[8px] text-left">Description</th>
              <th className="w-[5%] py-[12px] px-[8px] text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {forums.map((forum, index) => (
              <tr key={index} className="h-[58px] border-b border-[#E0E0E0]">
                <td className="text-[#535862] text-[14px] font-normal py-[12px] px-[8px] break-words">
                  {forum.date}
                </td>
                <td className="text-[#535862] text-[14px] font-normal py-[12px] px-[8px]">
                  {forum.subject}
                </td>
                <td className="text-[#535862] text-[14px] font-normal py-[12px] px-[8px]">
                  {forum.description}
                </td>
                <td className="text-center py-[12px] px-[8px]">
                  <button className="inline-flex items-center justify-center w-[32px] h-[32px] rounded-[8px] p-[6px] bg-[#E9EAEB]">
                    <Eye className="w-[20px] h-[20px] text-[#6B7280]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
