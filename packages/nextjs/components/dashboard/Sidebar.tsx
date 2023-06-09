import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-[#1A1D1F] text-[#ffffff90] w-1/6 p-6 py-12">
      <ul className="ml-6 bg-[#1A1D1F] h-[100%]">
        <li className="mb-8">
          <a href="#">Dashboard</a>
        </li>
        <li className="mb-8">
          <a href="#">Access</a>
        </li>
        <li className="mb-8">
          <a href="#">Followers</a>
        </li>
        <li className="mb-8">
          <a href="#">Rewards</a>
        </li>
        <li className="mb-8">
          <a href="#">Messages</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
