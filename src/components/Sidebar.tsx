import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Receipt,
  CalendarCheck,
  Send,
  Database,
  FileText,
  ClipboardList,
  History,
  LogOut,
  User,
  ChevronDown,
  X, // Added for mobile close button
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  {
    name: "Employee",
    icon: Users,
    path: "/employees",
    hasDropdown: true,
    subItems: [
      { name: "Employee Database", path: "/employees/database" },
      { name: "Add New Employee", path: "/employees/add" },
      { name: "Performance Report", path: "/employees/performance-report" },
      { name: "Performance History", path: "/employees/performance-history" },
    ],
  },
  { name: "Payroll", icon: CreditCard },
  { name: "Pay Slip", icon: Receipt },
  { name: "Attendance", icon: CalendarCheck },
  { name: "Request Center", icon: Send },
  { name: "Career Database", icon: Database, hasDropdown: true },
  { name: "Document manager", icon: FileText },
  { name: "Notice Board", icon: ClipboardList, path: "/noticeboard" },
  { name: "Activity Log", icon: History },
  { name: "Exit Interview", icon: LogOut },
  { name: "Profile", icon: User },
];

interface SidebarProps {
  onClose?: () => void; // Prop to handle closing mobile drawer
}

export default function Sidebar({ onClose }: SidebarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>("Employee");

  // Helper to close sidebar on mobile after clicking a link
  const handleLinkClick = () => {
    if (window.innerWidth < 768 && onClose) {
      onClose();
    }
  };

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col font-sans relative">
      <div className="p-6 flex items-center justify-between gap-2">
        <img src={Logo} alt="Nebsit Logo" className="h-6 w-auto" />

        {/* Mobile-only Close Button */}
        <button
          onClick={onClose}
          className="md:hidden p-1 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 px-4 overflow-y-auto pb-8">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.path ? (
                <div className="flex flex-col">
                  <NavLink
                    to={item.path}
                    onClickCapture={() => {
                      if (item.hasDropdown) {
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name
                        );
                      }
                    }}
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      `w-full flex items-center justify-between p-3 rounded-lg transition-colors group ${
                        isActive ||
                        (item.hasDropdown && openDropdown === item.name)
                          ? "bg-slate-50 text-slate-900 border-r-4 border-orange-500 rounded-r-none"
                          : "text-slate-500 hover:bg-gray-50 hover:text-slate-900"
                      }`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <item.icon size={20} strokeWidth={1.5} />
                      <span className="text-sm font-medium">{item.name}</span>
                    </div>

                    {item.hasDropdown && (
                      <ChevronDown
                        size={16}
                        className={`text-gray-400 transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </NavLink>

                  {/* Dropdown Content */}
                  {item.hasDropdown &&
                    openDropdown === item.name &&
                    item.subItems && (
                      <ul className="mt-1 space-y-1">
                        {item.subItems.map((sub) => (
                          <li key={sub.name}>
                            <NavLink
                              to={sub.path}
                              onClick={handleLinkClick} // Close on mobile
                              className={({ isActive }) =>
                                `block py-2.5 pl-11 pr-4 text-sm font-medium transition-colors rounded-lg ${
                                  isActive
                                    ? "text-slate-900 bg-slate-50"
                                    : "text-slate-500 hover:text-slate-900 hover:bg-gray-50"
                                }`
                              }
                            >
                              {sub.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                </div>
              ) : (
                /* Static buttons for items without paths */
                <button
                  className="w-full flex items-center gap-3 p-3 text-slate-500 hover:bg-gray-50 rounded-lg"
                  onClick={() =>
                    item.hasDropdown &&
                    setOpenDropdown(
                      openDropdown === item.name ? null : item.name
                    )
                  }
                >
                  <item.icon size={20} />
                  <span className="text-sm font-medium">{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      size={16}
                      className={`ml-auto text-gray-400 transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
