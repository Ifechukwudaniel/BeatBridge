import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedCube from "../AnimatedCube";

/**
 * Home Page Hero Section
 */
export const Hero = () => {
  return (
    <div className="grid md:grid-cols-2  h-[95vh] justify-center p-5 md:p-8 lg:p-0 home-hero relative">
      <div className="flex flex-col  relative justify-center ">
        <div className="absolute w-full lg:left-32 lg:top-48 lg:p-0 top-10">
          <h1 className="font-bakbak-one md:text-5xl text-3xl leading-[1.3]">
            Experience Music on a Deeper Level. Connect, Support, and Amplify Your Favourite Artists
          </h1>
          <p className="font-abel mt-6"> Elevate your favorite artists while shaping the music scene of tomorrow.. </p>
          <div className="mt-10">
            <Link href="/login" className="btn btn-md  btn-primary font-changa capitalize  text-sm px-12">
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
      <div>
        {/*    <div className=" absolute h-full w-[60vw] right-0  bg-[url('/assets/background.png')] bg-[length:100%_100%] " /> */}
        <AnimatedCube />
      </div>

      <div className="absolute right-0 top-[-17rem] w-[40%]">
        <Image src="/assets/bg-blur.png" alt="blur" width={880} height={600} />
      </div>
    </div>
  );
};
