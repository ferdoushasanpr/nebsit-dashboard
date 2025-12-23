import {
  ChevronLeft,
  Calendar,
  Upload,
  Paperclip,
  X,
  ChevronDown,
  Check,
} from "lucide-react";

export default function NoticeBoard() {
  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans">
      {/* Top Navigation */}
      <div className="flex items-center gap-4 mb-6">
        <button className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition shadow-sm">
          <ChevronLeft size={20} className="text-slate-600" />
        </button>
        <h1 className="text-xl font-bold text-slate-800">Create a Notice</h1>
      </div>

      {/* Main Form Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
            Please fill in the details below
          </h2>
        </div>

        <div className="p-8 space-y-8">
          {/* Target Audience Row */}
          <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              <span className="text-red-500 mr-1">*</span> Target Department(s)
              or Individual
            </label>
            <div className="relative">
              <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-sky-500 font-medium appearance-none focus:ring-2 focus:ring-sky-100 outline-none transition cursor-pointer">
                <option>Individual</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-3 text-slate-400 pointer-events-none"
                size={18}
              />
            </div>
          </div>

          {/* Notice Title */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              <span className="text-red-500 mr-1">*</span> Notice Title
            </label>
            <input
              type="text"
              placeholder="Write the Title of Notice"
              className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-orange-100 focus:border-orange-500 outline-none transition"
            />
          </div>

          {/* Employee Info Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                <span className="text-red-500 mr-1">*</span> Select Employee ID
              </label>
              <div className="relative">
                <select className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-400 appearance-none focus:ring-2 focus:ring-orange-100 outline-none transition">
                  <option>Select employee designation</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-3 text-slate-400 pointer-events-none"
                  size={18}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                <span className="text-red-500 mr-1">*</span> Employee Name
              </label>
              <input
                type="text"
                placeholder="Enter employee full name"
                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-orange-100 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                <span className="text-red-500 mr-1">*</span> Position
              </label>
              <input
                type="text"
                placeholder="Select employee department"
                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-orange-100 outline-none transition"
              />
            </div>
          </div>

          {/* Type and Date Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                <span className="text-red-500 mr-1">*</span> Notice Type
              </label>
              <div className="relative">
                <select className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-400 appearance-none outline-none transition">
                  <option>Select Notice Type</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-3 text-slate-400 pointer-events-none"
                  size={18}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                <span className="text-red-500 mr-1">*</span> Publish Date
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Select Publishing Date"
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none transition"
                />
                <Calendar
                  className="absolute right-3 top-2.5 text-slate-400"
                  size={18}
                />
              </div>
            </div>
          </div>

          {/* Notice Body */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Notice Body
            </label>
            <textarea
              rows={4}
              placeholder="Write the details about notice"
              className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-orange-100 outline-none transition resize-none"
            />
          </div>

          {/* Upload Section */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Upload Attachments (optional)
            </label>
            <div className="border-2 border-dashed border-emerald-300 rounded-xl p-8 bg-emerald-50/20 flex flex-col items-center justify-center cursor-pointer hover:bg-emerald-50 transition">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-3">
                <Upload className="text-emerald-500" size={24} />
              </div>
              <p className="text-sm text-slate-600">
                <span className="text-sky-500 font-semibold cursor-pointer">
                  Upload
                </span>{" "}
                nominee profile image or drag and drop.
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Accepted File Type: jpg, png
              </p>
            </div>

            {/* Uploaded File Chip */}
            <div className="mt-4 inline-flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
              <Paperclip size={14} className="text-slate-500" />
              <span className="text-xs text-slate-600 font-medium">
                Policy_Document.pdf
              </span>
              <button className="text-red-400 hover:text-red-600 transition">
                <X size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex justify-end gap-3 mt-8">
        <button className="px-10 py-2.5 border border-slate-400 rounded-full text-sm font-medium text-slate-600 hover:bg-slate-100 transition">
          Cancel
        </button>
        <button className="px-10 py-2.5 border border-sky-500 bg-sky-50 rounded-full text-sm font-medium text-sky-600 hover:bg-sky-100 transition">
          Save as Draft
        </button>
        <button className="px-10 py-2.5 bg-orange-600 text-white rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-orange-700 transition shadow-md shadow-orange-100">
          <Check size={18} /> Publish Notice
        </button>
      </div>
    </div>
  );
}
