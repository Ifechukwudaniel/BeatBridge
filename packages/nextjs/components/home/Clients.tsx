import React from "react";
import Image from "next/image";

/**
 * Home Page Blog  Section
 */
export const Clients = () => {
  return (
    <section className="relative mt-16">
      <div className="container mx-auto flex flex-col items-center text-center w-3/5 py-32">
        <p className="text-primary text-lg font-bold"> OUR TRACK RECORD</p>
        <h1 className="text-4xl font-bold leading-[1.3]">
          Join us at BeatBridge and be part of a musical revolution where every beat, every share, and every connection
          matters.
        </h1>
      </div>
      <div className="absolute top-[-16rem] w-[38%] left-[13%]">
        <Image src={"/assets/donut.png"} alt="3d donut" width={594} height={484} />
      </div>
    </section>
  );
};
