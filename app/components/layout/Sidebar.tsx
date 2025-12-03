import { NavLink } from "react-router-dom";
import {
  classes, dashboard, forum, payment_Subscription,
  promotion, schedule, settings, student, text, tutor
} from "~/utils/images/icon.image";
import { logo } from "~/utils/images/logo.image";

const menuItems = [
  { name: "Dashboard", path: "/", icon: dashboard },
  { name: "My Schedule", path: "/schedule", icon: schedule },
  { name: "Student Management", path: "/students", icon: student },
  { name: "Tutor Management", path: "/tutors", icon: tutor },
  { name: "Class Management", path: "/classes", icon: classes },
  { name: "Text Book Management", path: "/books", icon: text },
  { name: "Payment Management", path: "/payments", icon: payment_Subscription },
  { name: "Forum Management", path: "/forum", icon: forum },
  { name: "Subscription Management", path: "/subscription", icon: payment_Subscription },
  { name: "Promotion", path: "/promotion", icon: promotion },
  { name: "Site Setting", path: "/settings", icon: settings },
];

export default function Sidebar({
  collapsed,
  onSelect,
}: {
  collapsed: boolean;
  onSelect?: () => void;
}) {
  return (
    <aside
      className={`
        ${collapsed ? "w-[90px]" : "w-[314px]"}
        h-screen lg:h-[1678px]
        bg-white border-r border-gray-200
        rounded-tr-[16px] rounded-br-[16px]
        flex flex-col overflow-y-auto
        transition-all duration-300
      `}
    >
      {/* Logo section */}
      <div className={`px-[20px] pt-[44.69px] pb-[48.26px] ${collapsed ? "flex justify-center" : ""}`}>
        {!collapsed && (
          <div className="w-[173px] h-[32.05px]">
            <img src={logo} alt="logo" className="w-full h-full object-contain" />
          </div>
        )}
      </div>

      {/* Menu */}
      <nav className="flex-1 px-[20px] space-y-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            onClick={() => onSelect && onSelect()}   // <-- ONLY ADDED THIS
            className={({ isActive }) =>
              `
              flex items-center ${collapsed ? "justify-center w-[60px]" : "w-[274px]"}
              h-[56px] gap-[8px] px-[12px] py-[16px] mb-[8px]
              rounded-[16px] transition-all
              ${isActive
                ? "bg-[#D7E9FF] text-[#144B8A] font-semibold text-[16px]"
                : "text-[#717680] text-[16px]"
              }
            `
            }
          >
            <img src={item.icon} className="w-[24px] h-[24px]" />
            {!collapsed && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="h-[35px]" />
    </aside>
  );
}
