import {
  Plus,
  FileEdit,
  Eye,
  Pencil,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Calendar,
} from "lucide-react";

const notices = [
  {
    id: 1,
    title: "Office closed on Friday for maintenance.",
    type: "General / Company-Wide",
    target: "All Department",
    date: "15-Jun-2025",
    status: "Published",
    color: "blue",
  },
  {
    id: 2,
    title: "Eid al-Fitr holiday schedule.",
    type: "Holiday & Event",
    target: "Finance",
    date: "15-Jun-2025",
    status: "Published",
    color: "green",
  },
  {
    id: 3,
    title: "Updated code of conduct policy",
    type: "HR & Policy Update",
    target: "Sales Team",
    date: "15-Jun-2025",
    status: "Published",
    color: "orange",
  },
  {
    id: 4,
    title: "Payroll for October will be processed on 28th",
    type: "Finance & Payroll",
    target: "Web Team",
    date: "15-Jun-2025",
    status: "Published",
    color: "indigo",
  },
  {
    id: 5,
    title: "System update scheduled for 30 Oct (9:00-11:00 PM)",
    type: "IT / System Maintenance",
    target: "Database Team",
    date: "15-Jun-2025",
    status: "Published",
    color: "slate",
  },
  {
    id: 6,
    title: "Design team sprint review moved to Tuesday.",
    type: "Department / Team",
    target: "Admin",
    date: "15-Jun-2025",
    status: "Published",
    color: "purple",
  },
  {
    id: 7,
    title: "Unauthorized absence recorded on 18 Oct 2025",
    type: "Warning / Disciplinary",
    target: "Individual",
    date: "15-Jun-2025",
    status: "Unpublished",
    color: "cyan",
  },
  {
    id: 8,
    title: "Office closed today due to severe weather",
    type: "Emergency / Urgent",
    target: "HR",
    date: "15-Jun-2025",
    status: "Draft",
    color: "red",
  },
];

export default function Employee() {
  return (
    <>
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Notice Management
          </h1>
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

      {/* Filter Bar */}
      <div className="p-4 rounded-xl mb-6 flex flex-wrap items-center gap-4 justify-end">
        <span className="text-sm font-semibold text-slate-600">Filter by:</span>
        <select className="border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-500 outline-none focus:ring-2 focus:ring-orange-500">
          <option>Departments or individuals</option>
        </select>
        <input
          type="text"
          placeholder="Employee Id or Name"
          className="border border-slate-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500 w-48"
        />
        <select className="border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-500 outline-none focus:ring-2 focus:ring-orange-500">
          <option>Status</option>
        </select>
        <div className="relative">
          <input
            type="text"
            placeholder="Published on"
            className="border border-slate-200 rounded-md px-3 py-2 text-sm outline-none pr-10 focus:ring-2 focus:ring-orange-500"
          />
          <Calendar
            className="absolute right-3 top-2.5 text-slate-400"
            size={16}
          />
        </div>
        <button className="flex items-center gap-2 text-blue-500 border border-blue-100 bg-blue-50 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-100">
          Reset Filters
        </button>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="p-4 w-12">
                <input
                  type="checkbox"
                  className="rounded text-orange-600 focus:ring-orange-500"
                />
              </th>
              <th className="p-4 text-sm font-semibold text-slate-600">
                Title
              </th>
              <th className="p-4 text-sm font-semibold text-slate-600">
                Notice Type
              </th>
              <th className="p-4 text-sm font-semibold text-slate-600">
                Departments/Individual
              </th>
              <th className="p-4 text-sm font-semibold text-slate-600">
                Published On
              </th>
              <th className="p-4 text-sm font-semibold text-slate-600">
                Status
              </th>
              <th className="p-4 text-sm font-semibold text-slate-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {notices.map((notice) => (
              <tr
                key={notice.id}
                className="hover:bg-slate-50 transition-colors"
              >
                <td className="p-4">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="p-4 text-sm text-slate-700 max-w-xs">
                  {notice.title}
                </td>
                <td className="p-4 text-sm text-slate-400">{notice.type}</td>
                <td
                  className="p-4 text-sm font-medium"
                  style={{ color: `var(--tw-text-opacity)` }}
                >
                  <span className={`text-${notice.color}-500`}>
                    {notice.target}
                  </span>
                </td>
                <td className="p-4 text-sm text-slate-400">{notice.date}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-md text-xs font-medium ${
                      notice.status === "Published"
                        ? "bg-emerald-50 text-emerald-600"
                        : notice.status === "Unpublished"
                        ? "bg-slate-100 text-slate-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {notice.status}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-3 text-slate-400">
                    <button className="hover:text-blue-500">
                      <Eye size={18} />
                    </button>
                    <button className="hover:text-emerald-500">
                      <Pencil size={18} />
                    </button>
                    <button className="hover:text-slate-600">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <button className="p-2 text-slate-400 hover:text-slate-600">
          <ChevronLeft size={20} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded border border-blue-500 bg-blue-50 text-blue-600 text-sm font-medium">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-slate-500 text-sm hover:bg-slate-100 rounded">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-slate-500 text-sm hover:bg-slate-100 rounded">
          3
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-slate-500 text-sm hover:bg-slate-100 rounded">
          4
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-slate-500 text-sm hover:bg-slate-100 rounded">
          5
        </button>
        <button className="p-2 text-slate-400 hover:text-slate-600">
          <ChevronRight size={20} />
        </button>
      </div>
    </>
  );
}
