import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Menu } from "lucide-react"; // Import toggle icons

type MainComponentProps = {
  children: React.ReactNode;
};

export default function MainComponent({ children }: MainComponentProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden bg-slate-50 relative">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <Sidebar onClose={() => setIsMobileMenuOpen(false)} />
      </div>

      <main className="flex-1 flex flex-col h-full min-w-0">
        {/* Navbar with Hamburger Toggle */}
        <div className="flex items-center bg-white border-b border-gray-100 md:block">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-4 md:hidden text-slate-600 hover:text-orange-500 transition-colors"
          >
            <Menu size={24} />
          </button>
          <div className="flex-1">
            <Navbar />
          </div>
        </div>

        <div className="p-4 md:p-8 flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto">{children}</div>
        </div>
      </main>
    </div>
  );
}
