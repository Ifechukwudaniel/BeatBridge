import React from "react";
import Link from "next/link";
import type { NextPage } from "next";

const ChooseUser: NextPage = () => {
  return (
    <div
      className="flex items-center justify-center bg-cover bg-center h-screen"
      style={{ backgroundImage: `url("/assets/bg.png")`, backgroundColor: "#1A202C" }}
    >
      <Link href="/artist">User</Link>
    </div>
  );
};

export default ChooseUser;
