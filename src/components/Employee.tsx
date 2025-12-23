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
    <>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Notice Management
          </h1>
          <div className="flex gap-4 mt-1 text-sm">
            <span className="text-emerald-500 font-medium">
              Active Notices: {activeCount}
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-amber-500 font-medium">
              Draft Notice: {draftCount}
            </span>
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

      <div className="p-4 rounded-xl mb-6 flex flex-wrap items-center gap-4 justify-end">
        <span className="text-sm font-semibold text-slate-600">Filter by:</span>
        <select className="border border-slate-200 rounded-md px-3 py-2 text-sm text-slate-500 outline-none focus:ring-2 focus:ring-orange-500">
          <option>Departments or individuals</option>
        </select>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
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
        <button
          onClick={() => {
            setSearchTerm("");
            fetchNotices();
          }}
          className="flex items-center gap-2 text-blue-500 border border-blue-100 bg-blue-50 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-100"
        >
          Reset Filters
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden relative min-h-[400px]">
        {loading && (
          <div className="absolute inset-0 bg-white/60 z-20 flex items-center justify-center">
            <Loader2 className="animate-spin text-orange-600" size={32} />
          </div>
        )}

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              <th className="p-4 w-12">
                <input type="checkbox" className="rounded text-orange-600" />
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
                <td className="p-4 text-sm font-medium">
                  <span style={{ color: notice.color }}>{notice.target}</span>
                </td>
                <td className="p-4 text-sm text-slate-400">{notice.date}</td>
                <td className="p-4">
                  <button
                    onClick={() => handleToggleStatus(notice.id, notice.status)}
                    className={`px-3 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
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

      <div className="flex justify-center items-center gap-2 mt-8">
        <button className="p-2 text-slate-400 hover:text-slate-600">
          <ChevronLeft size={20} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded border border-blue-500 bg-blue-50 text-blue-600 text-sm font-medium">
          1
        </button>
        <button className="p-2 text-slate-400 hover:text-slate-600">
          <ChevronRight size={20} />
        </button>
      </div>
    </>
  );
}
