import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

type MainComponentProps = {
  children: React.ReactNode;
};

export default function MainComponent({ children }: MainComponentProps) {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        <main className="flex-1 bg-gray-100 overflow-y-auto">
          {/* Navbar */}
          <Navbar />
          {/* Dashboard Content */}
          <div className="p-8 bg-slate-50 min-h-screen font-sans">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
