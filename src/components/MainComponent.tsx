import React from "react";
import Sidebar from "./Sidebar";

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
          <header className="h-14 bg-gray-900 text-white flex items-center px-6 shadow-md">
            <h1 className="text-lg font-semibold">Dashboard Navbar</h1>
          </header>
          {/* Dashboard Content */}
          <div className="p-8 bg-slate-50 min-h-screen font-sans">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
