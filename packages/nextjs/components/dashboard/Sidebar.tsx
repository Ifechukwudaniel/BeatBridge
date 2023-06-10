import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-[#1A1D1F] text-[#ffffff90] w-1/6 px-6 ">
      <Link className="logo py-6 cursor-pointer" href="/">
        <img src="/assets/logo.png" alt="Logo" className="pt-6" />
      </Link>
      <ul className="ml-6 bg-[#1A1D1F] h-[100%] py-12">
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
