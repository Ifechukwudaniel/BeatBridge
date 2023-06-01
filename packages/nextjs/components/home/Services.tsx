import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

/**
 * Home Page Service Section
 */
export const Services = () => {
  return (
    <div className="">
      <div className="flex flex-row  p-5 md:p-8 lg:p-16 justify-between h-[70vh]">
        <div className="flex flex-col lg:w-1/2 lg:mr-14 p-2 md:p-4 lg:p-7 relative  ">
          <p className="font-baloo-bhai-2 text-primary tracking-[.25em] font-light"> Connect </p>
          <h1 className="font-bakbak-one text-6xl">In Sync with the Sound</h1>
          <p className="font-abel text-lg ">
            At BeatBridge, we believe in the transformative power of music and the unique bond between artists and fans.
            This bond is the inspiration behind BeatBridge - an innovative platform designed to bring fans and their
            favorite artists closer than ever before.
          </p>
          <div className="mt-10">
            <button className="btn btn-md btn-primary font-changa capitalize text-base px-10">
              Learn More <PaperAirplaneIcon className="w-5 h-5 ml-3" />
            </button>
          </div>
          <div className="w-64 h-64 bg-secondary absolute z-10 blur-3xl opacity-20 -bottom-10 -left-28 "> </div>
        </div>
        <div className="flex justify-center p-2 md:p-4 lg:p-5 lg:w-1/2 ">
          <div className=" object-cover w-10/12 h-full right-0  bg-[url('/assets/wing.png')] bg-[length:100%_100%] " />
        </div>
      </div>
      <div className="flex flex-row  p-5 md:p-8 lg:p-16 justify-between h-[70vh] relative overflow-hidden">
        <div className="flex justify-center p-0  lg:p-0 lg:w-1/2 ">
          <div className="w-10/12 h-full right-0  bg-[url('/assets/community.png')] bg-[length:100%_100%] " />
        </div>
        <div className="flex flex-col lg:w-1/2 lg:mr-14 p-2 md:p-4 lg:p-7 relative  ">
          <p className="font-baloo-bhai-2 text-primary tracking-[.25em] font-light"> Community </p>
          <h1 className="font-bakbak-one text-6xl">Unity in Every Beat</h1>
          <p className="font-abel text-lg ">
            BeatBridge is more than just an app; it&apos;s a musical community where shared passion becomes a symphony
            of support. It&apos;s a place where fans can actively engage with their favorite artists, promoting their
            music and supporting their journey.
          </p>
          <div className="mt-10">
            <button className="btn btn-md btn-primary font-changa capitalize text-base px-10">
              Learn More <PaperAirplaneIcon className="w-5 h-5 ml-3" />
            </button>
          </div>
        </div>
        <div className="w-64 h-64 bg-primary absolute z-10 blur-3xl opacity-30 bottom-30 -right-44 "> </div>
      </div>
      <div className="flex flex-row  p-5 md:p-8 lg:p-16 justify-between h-[70vh]">
        <div className="flex flex-col lg:w-1/2 lg:mr-14 p-2 md:p-4 lg:p-7 relative justify-center ">
          <p className="font-baloo-bhai-2 text-primary tracking-[.25em] font-light"> Track</p>
          <h1 className="font-bakbak-one text-6xl">Follow the Frequency</h1>
          <p className="font-abel text-lg ">
            The BeatBridge platform leverages cutting-edge technology to track user engagement, rewarding dedicated fans
            with NFTs that can be redeemed for exclusive merchandise, concert tickets, and unique experiences. The
            louder your support, the more you amplify your favorite artists - and the more rewards you earn
          </p>
          <div className="mt-10">
            <button className="btn btn-md btn-primary font-changa capitalize text-base px-10">
              Learn More <PaperAirplaneIcon className="w-5 h-5 ml-3" />
            </button>
          </div>
          <div className="w-64 h-64 bg-primary absolute z-10 blur-3xl opacity-20 bottom-10 -left-28 "> </div>
        </div>
        <div className=" justify-center p-2 md:p-4 lg:py-0 lg:w-1/2 hidden lg:flex relative   ">
          <div className=" absolute object-contain  w-10/12 h-full -top-12 right-20  bg-[url('/assets/track.png')] bg-[length:110%_110%]  " />
        </div>
      </div>
    </div>
  );
};
