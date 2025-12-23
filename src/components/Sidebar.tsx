import { NavLink } from "react-router-dom";
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
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "Employee", icon: Users, path: "/employees", hasDropdown: true },
  { name: "Payroll", icon: CreditCard },
  { name: "Pay Slip", icon: Receipt },
  { name: "Attendance", icon: CalendarCheck },
  { name: "Request Center", icon: Send },
  { name: "Career Database", icon: Database, hasDropdown: true },
  { name: "Document manager", icon: FileText },
  { name: "Notice Board", icon: ClipboardList },
  { name: "Activity Log", icon: History },
  { name: "Exit Interview", icon: LogOut },
  { name: "Profile", icon: User },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col font-sans">
      {/* Logo */}
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
          <span className="text-orange-500 font-black text-xl">N</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-800">
          Nebs-IT
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.path ? (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `w-full flex items-center justify-between p-3 rounded-lg transition-colors group ${
                      isActive
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
                    <ChevronDown size={16} className="text-gray-400" />
                  )}
                </NavLink>
              ) : (
                <button className="w-full flex items-center gap-3 p-3 text-slate-500">
                  <item.icon size={20} />
                  <span className="text-sm">{item.name}</span>
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
