import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  ChevronLeft,
  Upload,
  Paperclip,
  X,
  ChevronDown,
  Check,
  Loader2,
} from "lucide-react";

interface FormData {
  target: string;
  title: string;
  employeeId: string;
  employeeName: string;
  position: string;
  noticeType: string[];
  publishDate: string;
  body: string;
}

type ModalType = "success" | null;

export default function NoticeBoard() {
  const [formData, setFormData] = useState<FormData>({
    target: "Individual",
    title: "",
    employeeId: "",
    employeeName: "",
    position: "",
    noticeType: [],
    publishDate: "",
    body: "",
  });

  const [showNoticeType, setShowNoticeType] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const noticeTypeOptions: string[] = [
    "Warning / Disciplinary",
    "Performance Improvement",
    "Appreciation / Recognitio",
    "Attendance / Leave Issue",
    "Payroll / Compensation",
    "Contract / Role Update",
    "Advisory / Personal Reminder",
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleNoticeType = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      noticeType: prev.noticeType.includes(type)
        ? prev.noticeType.filter((t) => t !== type)
        : [...prev.noticeType, type],
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Submitting Notice Data:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setActiveModal("success");
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    /* Relative positioning here ensures the absolute modal stays inside this div */
    <div className="relative overflow-hidden">
      {/* Navigation Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          type="button"
          className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 shadow-sm transition-all"
        >
          <ChevronLeft size={20} className="text-slate-600" />
        </button>
        <h1 className="text-xl font-bold text-slate-800">Create a Notice</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
      >
        <div className="p-6 border-b border-slate-100 bg-slate-50/50 text-sm font-semibold text-slate-600 uppercase tracking-wider">
          Please fill in the details below
        </div>

        <div className="p-8 space-y-8">
          {/* Target Selection */}
          <div className="bg-slate-50/50 p-4 rounded-xl border border-slate-100">
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              <span className="text-red-500 mr-1">*</span> Target Department(s)
              or Individual
            </label>
            <div className="relative">
              <select
                name="target"
                value={formData.target}
                onChange={handleChange}
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-sky-500 font-medium appearance-none outline-none cursor-pointer"
              >
                <option value="Individual">Individual</option>
                <option value="Sales Team">Sales Team</option>
                <option value="Finance">Finance</option>
                <option value="All Department">All Department</option>
              </select>
              <ChevronDown
                className="absolute right-3 top-3 text-slate-400 pointer-events-none"
                size={18}
              />
            </div>
          </div>

          {/* Title Input */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              <span className="text-red-500 mr-1">*</span> Notice Title
            </label>
            <input
              required
              name="title"
              value={formData.title}
              onChange={handleChange}
              type="text"
              placeholder="Write the Title of Notice"
              className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-orange-500 transition-colors"
            />
          </div>

          {/* Employee Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                <span className="text-red-500 mr-1">*</span> Select Employee ID
              </label>
              <div className="relative">
                <select
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-500 appearance-none outline-none"
                >
                  <option value="">Select employee designation</option>
                  <option value="EMP001">EMP-1020</option>
                  <option value="EMP002">EMP-1021</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-3 text-slate-400 pointer-events-none"
                  size={18}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Employee Name
              </label>
              <input
                name="employeeName"
                value={formData.employeeName}
                onChange={handleChange}
                type="text"
                placeholder="Enter employee full name"
                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Position
              </label>
              <input
                name="position"
                value={formData.position}
                onChange={handleChange}
                type="text"
                placeholder="Select employee department"
                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none"
              />
            </div>
          </div>

          {/* Notice Type Dropdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                <span className="text-red-500 mr-1">*</span> Notice Type
              </label>
              <div
                onClick={() => setShowNoticeType(!showNoticeType)}
                className="w-full flex justify-between items-center border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-400 cursor-pointer bg-white"
              >
                <span className="truncate">
                  {formData.noticeType.length > 0
                    ? formData.noticeType.join(", ")
                    : "Select Notice Type"}
                </span>
                <ChevronDown size={18} />
              </div>
              {showNoticeType && (
                <div className="absolute z-20 mt-1 w-full bg-white border border-slate-200 rounded-lg shadow-xl py-2 max-h-56 overflow-y-auto">
                  {noticeTypeOptions.map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-slate-50 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.noticeType.includes(type)}
                        onChange={() => toggleNoticeType(type)}
                        className="w-4 h-4 rounded border-slate-300 text-orange-500"
                      />
                      <span className="text-sm text-slate-600">{type}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Publish Date
              </label>
              <input
                name="publishDate"
                value={formData.publishDate}
                onChange={handleChange}
                type="date"
                className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none"
              />
            </div>
          </div>

          {/* Notice Body */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Notice Body
            </label>
            <textarea
              name="body"
              value={formData.body}
              onChange={handleChange}
              rows={4}
              placeholder="Write the details about notice"
              className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm outline-none resize-none focus:border-orange-500"
            />
          </div>

          {/* Upload Attachments */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Upload Attachments (optional)
            </label>
            <div className="border-2 border-dashed border-emerald-300 rounded-xl p-10 bg-emerald-50/20 text-center cursor-pointer hover:bg-emerald-50/40 transition-all">
              <Upload className="mx-auto text-emerald-500 mb-3" size={28} />
              <p className="text-sm text-slate-600">
                <span className="text-sky-500 font-bold">Upload</span> file or
                drag and drop.
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Accepted File Type: jpg, png
              </p>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
              <Paperclip size={14} className="text-slate-500" />
              <span className="text-xs text-slate-600 font-medium">
                Policy_Document.pdf
              </span>
              <X
                size={14}
                className="text-red-400 hover:text-red-600 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-8 flex justify-end items-center gap-4 bg-slate-50/30 border-t border-slate-100">
          <button
            type="button"
            className="px-10 py-2.5 border border-slate-400 rounded-full text-sm font-medium text-slate-600 hover:bg-white"
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-10 py-2.5 border border-sky-500 bg-sky-50 rounded-full text-sm font-medium text-sky-600 hover:bg-sky-100"
          >
            Save as Draft
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-10 py-2.5 bg-orange-600 text-white rounded-full text-sm font-bold flex items-center gap-2 hover:bg-orange-700 disabled:opacity-70 transition-all"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <Check size={18} className="stroke-[3px]" />
            )}
            Publish Notice
          </button>
        </div>
      </form>

      {/* SUCCESS MODAL - BOUND TO COMPONENT */}
      {activeModal === "success" && (
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-[0.5rem] px-14 py-12 max-w-2xl w-full text-center shadow-xl animate-in fade-in zoom-in duration-300">
            {/* Success Icon Circle */}
            <div className="w-24 h-24 bg-[#10B981] rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg shadow-emerald-100">
              <Check size={56} className="text-white stroke-[4px]" />
            </div>

            <h2 className="text-[2.25rem] font-semibold text-[#1E293B] mb-5 leading-tight">
              Notice Published Successfully
            </h2>
            <p className="text-[#64748B] mb-12 text-lg leading-relaxed">
              Your notice{" "}
              <span className="font-bold text-[#334155]">
                “{formData.title || "Holiday Schedule – November 2025"}”
              </span>{" "}
              has been published and is now visible to all selected departments.
            </p>

            {/* Styled Modal Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto px-10 py-2.5 border border-[#3B82F6] text-[#3B82F6] rounded-full font-semibold text-base hover:bg-blue-50 transition-colors"
              >
                View Notice
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveModal(null);
                  setFormData({
                    target: "Individual",
                    title: "",
                    employeeId: "",
                    employeeName: "",
                    position: "",
                    noticeType: [],
                    publishDate: "",
                    body: "",
                  });
                }}
                className="w-full sm:w-auto px-10 py-2.5 border border-[#F97316] text-[#F97316] rounded-full font-semibold text-base flex items-center justify-center gap-2 hover:bg-orange-50 transition-colors"
              >
                <span className="text-xl">+</span> Create Another
              </button>

              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto px-10 py-2.5 border border-[#334155] text-[#334155] rounded-full font-semibold text-base hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
