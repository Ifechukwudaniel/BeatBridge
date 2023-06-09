import React from "react";
import Header from "./Header";
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
        <main className="px-12 py-8 bg-[#111315] min-h-full h-full overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
