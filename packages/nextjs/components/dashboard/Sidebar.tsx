import React from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-[#00011e] text-[#ffffff90] w-1/6 px-6 ">
      <Link className="logo py-6 cursor-pointer" href="/">
        <img src="/assets/logo.png" alt="Logo" className="pt-6" />
      </Link>
      <ul className="ml-6 bg-[#00011e] h-[100%] py-12">
        <li className="mb-8">
          <Link href="/search"> Discovery </Link>
        </li>
        <li className="mb-8">
          <Link href="/dashboard/artists">Your Artists</Link>
        </li>
        <li className="mb-8">
          <Link href="/playlists"> Your Playlists</Link>
        </li>
        <li className="mb-8">
          <Link href="/wrapped">Wrapped</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
