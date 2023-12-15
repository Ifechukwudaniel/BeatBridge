import React from "react";
import Header from "../spotify/Header";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-full dashboard">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />
        <main className="px-12 py-8 bg-black min-h-full h-full overflow-y-auto pb-20">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
