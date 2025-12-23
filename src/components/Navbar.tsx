import { Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-4 md:px-8 shadow-sm shrink-0">
      <div className="flex flex-col">
        <h2 className="text-lg md:text-xl font-medium text-[#1E293B] line-clamp-1">
          <span className="hidden sm:inline">Good Afternoon, </span>Ferdous
        </h2>
        <p className="text-xs md:text-sm text-[#64748B] font-medium">
          13 June, 2026
        </p>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="relative p-2 hover:bg-slate-50 rounded-full cursor-pointer transition-colors">
          <Bell size={20} className="md:w-6 md:h-6 text-[#64748B]" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
        </div>

        <div className="h-8 w-[1px] bg-slate-200"></div>

        <div className="flex items-center gap-2 md:gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm md:text-base font-bold text-[#1E293B] leading-none">
              Ferdous Hasan
            </p>
            <p className="text-xs text-[#64748B] font-medium mt-1">Hr</p>
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-orange-100 p-0.5 overflow-hidden">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Asif"
              alt="User"
              className="w-full h-full rounded-full bg-slate-100"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
