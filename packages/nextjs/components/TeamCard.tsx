import React from "react";
import Image from "next/image";

export const TeamCard = () => {
  return (
    <div className="rounded-2 bg-[#ffffff15] rounded-b-xl">
      <div className="p-4 bg-primary rounded-t-xl">
        <div className="w-3/5 mx-auto my-1">
          <Image width={382} height={57} src={"/assets/logo-dark.png"} alt="beatbridge logo dark" />
        </div>
      </div>
      <div className="p-4 flex flex-col items-center rounded-b-xl">
        <div className="w-[50%] m-auto my-6">
          <Image width={300} height={304} src={"/assets/simon.png"} alt="image of simon" />
        </div>
        <h2 className="text-2xl text-[#CB7232]">Simon Cyril</h2>
        <p>Frontend Developer</p>
        <button className="mt-16 mb-4 text-sm font-bold cursor-pointer">View Info</button>
        <div className="w-[80%] m-auto pb-6">
          <Image alt="bar code" src={"/assets/codebar.png"} width={492} height={96} />
        </div>
      </div>
    </div>
  );
};
