import {
  Plus,
  FileEdit,
  Users,
  Megaphone,
  Clock,
  CheckCircle,
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

interface RecentNotice {
  id: number;
  title: string;
  time: string;
  category: string;
}

export default function Dashboard() {
  const recentNotices: RecentNotice[] = [
    {
      id: 1,
      title: "Annual General Meeting rescheduled to next Monday",
      time: "2 hours ago",
      category: "General",
    },
    {
      id: 2,
      title: "New health insurance policy documents available",
      time: "5 hours ago",
      category: "HR",
    },
    {
      id: 3,
      title: "IT Maintenance: Servers down from 12 AM to 4 AM",
      time: "Yesterday",
      category: "IT",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Dashboard Overview
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Welcome back, here's what's happening today.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition shadow-sm">
            <Plus size={18} /> Create Notice
          </button>
          <button className="flex items-center gap-2 border border-amber-500 text-amber-500 px-4 py-2 rounded-lg hover:bg-amber-50 transition">
            <FileEdit size={18} /> All Drafts
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Active Notices"
          value="08"
          icon={<Megaphone size={20} />}
          color="bg-emerald-500"
        />
        <StatCard
          title="Pending Drafts"
          value="04"
          icon={<FileEdit size={20} />}
          color="bg-amber-500"
        />
        <StatCard
          title="Total Employees"
          value="124"
          icon={<Users size={20} />}
          color="bg-blue-500"
        />
        <StatCard
          title="Target Reached"
          value="92%"
          icon={<CheckCircle size={20} />}
          color="bg-indigo-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">
            Recently Published
          </h3>
          <div className="space-y-4">
            {recentNotices.map((notice) => (
              <div
                key={notice.id}
                className="flex items-center justify-between p-4 border border-slate-50 rounded-lg hover:bg-slate-50 transition"
              >
                <div className="flex gap-4 items-center">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                    <Megaphone size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-700">
                      {notice.title}
                    </h4>
                    <span className="text-xs text-slate-400">
                      {notice.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <Clock size={14} />
                  {notice.time}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition">
            View All Activity
          </button>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl text-white shadow-lg">
          <h3 className="text-lg font-medium mb-4">System Status</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2 text-slate-300">
                <span>Server Uptime</span>
                <span>99.9%</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-[99.9%]"></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2 text-slate-300">
                <span>Storage Used</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                <div className="bg-orange-400 h-full w-[65%]"></div>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-700">
              <p className="text-xs text-slate-400 italic">
                "Keep your dashboard clean by archiving old notices."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color }: StatCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
      <div className={`${color} text-white p-3 rounded-lg`}>{icon}</div>
      <div>
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h2 className="text-2xl font-bold text-slate-800">{value}</h2>
      </div>
    </div>
  );
}
