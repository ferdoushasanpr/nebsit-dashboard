import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

type MainComponentProps = {
  children: React.ReactNode;
};

export default function MainComponent({ children }: MainComponentProps) {
  return (
    <div className="h-screen flex overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col bg-gray-100 h-screen">
        <Navbar />
        <div className="p-8 bg-slate-50 font-sans flex-1 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
