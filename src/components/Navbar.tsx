import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 shadow-sm">
      {/* Left Section: Greeting and Date */}
      <div className="flex flex-col">
        <h2 className="text-xl font-medium text-[#1E293B]">
          Good Afternoon Ferdous
        </h2>
        <p className="text-sm text-[#64748B] font-medium">13 June, 2026</p>
      </div>

      {/* Right Section: Actions and Profile */}
      <div className="flex items-center gap-6">
        {/* Notification Bell with Badge */}
        <div className="relative p-2 hover:bg-slate-50 rounded-full cursor-pointer transition-colors">
          <Bell size={24} className="text-[#64748B]" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
        </div>

        {/* Divider */}
        <div className="h-10 w-[1px] bg-slate-200"></div>

        {/* User Profile Section */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right">
            <p className="text-base font-bold text-[#1E293B] leading-none group-hover:text-sky-500 transition-colors">
              Ferdous Hasan
            </p>
            <p className="text-sm text-[#64748B] font-medium mt-1">Hr</p>
          </div>

          {/* Profile Image Container */}
          <div className="w-12 h-12 rounded-full border-2 border-orange-100 p-0.5 overflow-hidden shadow-sm">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Asif"
              alt="User Profile"
              className="w-full h-full object-cover rounded-full bg-slate-100"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
