import { Plus, FileEdit } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">Dashboard</h1>
          <div className="flex gap-4 mt-1 text-sm">
            <span className="text-emerald-500 font-medium">
              Active Notices: 8
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-amber-500 font-medium">Draft Notice: 04</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition shadow-sm">
            <Plus size={18} /> Create Notice
          </button>
          <button className="flex items-center gap-2 border border-amber-500 text-amber-500 px-4 py-2 rounded-lg hover:bg-amber-50 transition">
            <FileEdit size={18} /> All Draft Notice
          </button>
        </div>
      </div>
    </>
  );
}
