import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-[#1A1D1F] p-4 px-12">
      <div className="font-bold flex justify-between items-center">
        <input
          type="text"
          placeholder="Search"
          className="input rounded-none input-bordered w-full max-w-xs bg-[#111315]"
        />{" "}
        <div>22</div>
      </div>
    </header>
  );
};

export default Header;
