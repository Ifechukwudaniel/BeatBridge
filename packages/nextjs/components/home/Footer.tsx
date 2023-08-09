import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Home Page Footer Section
 */
export const HomeFooter = () => {
  return (
    <div className=" flex flex-row lg:flex-col p-5 md:p-8 mt-16 ">
      {/*  <div className="h-28 w-96 object-cover  right-0  bg-[url('/assets/logo.png')] bg-[length:100%_100%] " /> */}
      <div className="container mx-auto">
        <Image src={"/assets/logo.svg"} alt="beatbridge logo" width={382} height={57} />
      </div>

      <div className="container mx-auto flex flex-wrap py-16">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-sm leading-[1.5] text-[#CCCCCC]">
            As a web3 founder, you know firsthand the challenges of bringing a project to life. The road to success can
            be difficult, from finding experienced and skilled talent to dealing with project delays and cost overruns.
          </p>
        </div>

        {/* Links Column */}
        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0 md:pl-16">
          <h3 className="text-lg font-semibold mb-2">Pages For You</h3>
          <p className="text-sm leading-[1.5] text-[#CCCCCC]">Explore our pages.</p>
          <ul className="mt-12 text-sm grid grid-cols-2 text-[#cccccc]">
            <li className="mb-3">
              <Link href="/" className="border-b border-[#ccc] inline-block">
                Home
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/" className="border-b border-[#ccc] inline-block">
                Team
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/" className="border-b border-[#ccc] inline-block">
                About
              </Link>
            </li>
            <li className="mb-3">
              <Link href="/" className="border-b border-[#ccc] inline-block">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect with Us Column */}
        <div className="w-full md:w-1/3 px-4">
          <h3 className="text-lg font-semibold mb-2">Connect with Us</h3>
          <p className="text-sm mb-2 text-[#cccccc]">
            Here are the official links to our social media platform. Feel free to reach out to us through any of the
            following links below
          </p>
          <div className="flex">
            <a href="#" className="mr-4">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="mr-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto ">
        <p className="text-[#cccccc] text-sm border-[#ccc] border-b inline-block">
          © 2023 Beatbridge. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
