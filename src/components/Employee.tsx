import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import {
  Plus,
  FileEdit,
  Eye,
  Pencil,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Loader2,
  Search,
} from "lucide-react";

interface Notice {
  id: number;
  title: string;
  type: string;
  target: string;
  date: string;
  status: "Published" | "Unpublished" | "Draft";
  color: string;
}

export default function Employee() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fetchNotices = async () => {
    try {
      setLoading(true);
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${baseUrl}/api/notices`);
      if (!response.ok) throw new Error("Network response was not ok");
      const data: Notice[] = await response.json();
      setNotices(data);
    } catch (error) {
      console.error("Error fetching notices:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const handleToggleStatus = async (
    id: number,
    currentStatus: Notice["status"]
  ) => {
    if (currentStatus === "Draft") return;
    const newStatus: Notice["status"] =
      currentStatus === "Published" ? "Unpublished" : "Published";

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${baseUrl}/api/notices/${id}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (response.ok) {
        setNotices((prev) =>
          prev.map((n) => (n.id === id ? { ...n, status: newStatus } : n))
        );
      }
    } catch (error) {
      console.error("Failed to update status", error);
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const activeCount = notices.filter((n) => n.status === "Published").length;
  const draftCount = notices.filter((n) => n.status === "Draft").length;

  return (
    <div className="max-w-full overflow-hidden px-1 md:px-0">
      {/* Header Section - Stacked on mobile */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-slate-800">
            Notice Management
          </h1>
          <div className="flex gap-4 mt-1 text-xs md:text-sm">
            <span className="text-emerald-500 font-medium">
              Active Notices: {activeCount}
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-amber-500 font-medium">
              Draft Notice: {draftCount}
            </span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <button className="flex items-center justify-center gap-2 bg-orange-600 text-white px-4 py-2.5 rounded-lg hover:bg-orange-700 transition shadow-sm text-sm font-medium">
            <Plus size={18} /> Create Notice
          </button>
          <button className="flex items-center justify-center gap-2 border border-amber-500 text-amber-500 px-4 py-2.5 rounded-lg hover:bg-amber-50 transition text-sm font-medium">
            <FileEdit size={18} /> All Draft Notice
          </button>
        </div>
      </div>

      {/* Filter Section - Wrap items on smaller screens */}
      <div className="p-2 md:p-4 rounded-xl mb-6 flex flex-wrap items-center gap-3 md:gap-4 justify-start md:justify-end bg-slate-50/50 border border-slate-100">
        <span className="text-sm font-semibold text-slate-600 w-full md:w-auto">
          Filter by:
        </span>

        <select className="flex-1 md:flex-none border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-500 outline-none focus:ring-2 focus:ring-orange-500 bg-white min-w-[140px]">
          <option>Departments</option>
        </select>

        <div className="relative flex-1 md:flex-none min-w-[180px]">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Employee Id or Name"
            className="w-full border border-slate-200 rounded-md pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-orange-500"
          />
          <Search
            className="absolute left-3 top-2.5 text-slate-400"
            size={16}
          />
        </div>

        <select className="flex-1 md:flex-none border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-500 outline-none focus:ring-2 focus:ring-orange-500 bg-white">
          <option>Status</option>
        </select>

        <div className="relative flex-1 md:flex-none min-w-[150px]">
          <input
            type="text"
            placeholder="Published on"
            className="w-full border border-slate-200 rounded-md px-3 py-2 text-sm outline-none pr-10 focus:ring-2 focus:ring-orange-500"
          />
          <Calendar
            className="absolute right-3 top-2.5 text-slate-400"
            size={16}
          />
        </div>

        <button
          onClick={() => {
            setSearchTerm("");
            fetchNotices();
          }}
          className="w-full md:w-auto flex items-center justify-center gap-2 text-blue-500 border border-blue-100 bg-blue-50 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-100"
        >
          Reset Filters
        </button>
      </div>

      {/* Table Section - Overflow X scroll enabled */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 relative min-h-[400px]">
        {loading && (
          <div className="absolute inset-0 bg-white/60 z-20 flex items-center justify-center">
            <Loader2 className="animate-spin text-orange-600" size={32} />
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="p-4 w-12 text-center">
                  <input type="checkbox" className="rounded text-orange-600" />
                </th>
                <th className="p-4 text-sm font-semibold text-slate-600">
                  Title
                </th>
                <th className="p-4 text-sm font-semibold text-slate-600">
                  Notice Type
                </th>
                <th className="p-4 text-sm font-semibold text-slate-600">
                  Target
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
              {notices.length > 0
                ? notices.map((notice) => (
                    <tr
                      key={notice.id}
                      className="hover:bg-slate-50 transition-colors"
                    >
                      <td className="p-4 text-center">
                        <input type="checkbox" className="rounded" />
                      </td>
                      <td className="p-4 text-sm text-slate-700 max-w-[200px] truncate md:max-w-xs">
                        {notice.title}
                      </td>
                      <td className="p-4 text-sm text-slate-400">
                        {notice.type}
                      </td>
                      <td className="p-4 text-sm font-medium">
                        <span style={{ color: notice.color }}>
                          {notice.target}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-slate-400">
                        {notice.date}
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() =>
                            handleToggleStatus(notice.id, notice.status)
                          }
                          className={`px-3 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors whitespace-nowrap ${
                            notice.status === "Published"
                              ? "bg-emerald-50 text-emerald-600"
                              : notice.status === "Unpublished"
                              ? "bg-slate-100 text-slate-600"
                              : "bg-amber-50 text-amber-600"
                          }`}
                        >
                          {notice.status}
                        </button>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-3 text-slate-400">
                          <button className="hover:text-blue-500 transition-colors">
                            <Eye size={18} />
                          </button>
                          <button className="hover:text-emerald-500 transition-colors">
                            <Pencil size={18} />
                          </button>
                          <button className="hover:text-slate-600 transition-colors">
                            <MoreVertical size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                : !loading && (
                    <tr>
                      <td
                        colSpan={7}
                        className="p-10 text-center text-slate-400"
                      >
                        No notices found matching your criteria.
                      </td>
                    </tr>
                  )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination - Centered */}
      <div className="flex justify-center items-center gap-2 mt-8 mb-4">
        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <ChevronLeft size={20} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded border border-blue-500 bg-blue-50 text-blue-600 text-sm font-medium">
          1
        </button>
        <button className="p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
