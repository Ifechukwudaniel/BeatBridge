import React from "react";
import Link from "next/link";

/**
 * Home Page Hero Section
 */
export const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col  h-[95vh] justify-center p-5 md:p-8 lg:p-0">
      <div className="flex flex-col lg:w-1/2  relative justify-center ">
        <div className="absolute w-full lg:left-32 lg:top-48 lg:p-0">
          <h1 className="font-bakbak-one text-5xl">
            Experience Music on a Deeper Level. Connect, Support, and Amplify Your Favourite Artists
          </h1>
          <p className="font-abel"> Elevate your favorite artists while shaping the music scene of tomorrow.. </p>
          <div className="mt-10">
            <Link href="/login" className="btn btn-md  btn-primary font-changa capitalize  text-sm px-12">
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
      <div className=" relative flex flex-col justify-between lg:w-1/2 ">
        <div className=" absolute h-full w-[60vw] right-0  bg-[url('/assets/background.png')] bg-[length:100%_100%] " />
      </div>
    </div>
  );
};
