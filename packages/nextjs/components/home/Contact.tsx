import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

/**
 * Home Page Contact Section
 */
/* eslint-disable react/no-unescaped-entities */

export const Contact = () => {
  return (
    <div className="flex lg:flex-row flex-col p-5 md:p-8 lg:p-16 justify-between">
      <div className="flex flex-col lg:w-1/2 lg:mr-14 p-2 md:p-4 lg:p-7 relative  ">
        <p className="font-baloo-bhai-2 text-primary tracking-widest uppercase">
          Ready to take your project to the next level with?
        </p>
        <h1 className="font-bakbak-one text-3xl">
          Contact us today to discuss your project and learn more about how we can help you design, develop, and pitch a
          trusted web3 brand.
        </h1>
        <p className="font-abel">
          We&apos;ll get back to you as soon as possible to schedule a consultation and discuss how we can support your
          project.
        </p>
        <div className="w-64 h-64 bg-primary absolute z-10 blur-3xl opacity-10 -bottom-10 -left-28 "></div>
      </div>
      <div className="flex flex-col justify-between p-2 md:p-4 lg:p-1 lg:w-1/2 ">
        <div className=" flex lg:flex-row flex-col justify-between">
          <div className="w-full lg:mr-1 p-2">
            <label htmlFor="name" className="label">
              <span className="label-text font-abhaya-libre ">Name</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Oliver"
              className="input input-bordered w-full font-abhaya-libre "
            />
          </div>
          <div className="w-full p-2">
            <label htmlFor="email" className="label">
              <span className="label-text font-abhaya-libre">Email </span>
            </label>
            <input
              id="email"
              type="text"
              placeholder="example@abc.com"
              className="input input-bordered w-full  font-abhaya-libre"
            />
          </div>
        </div>
        <div className="w-full p-2">
          <label htmlFor="description" className="label">
            <span className="label-text  font-abhaya-libre">Description</span>
          </label>
          <textarea
            id="description"
            className="textarea input-bordered w-full font-abhaya-libre "
            placeholder="Type Here"
          ></textarea>
        </div>
        <div className="w-full p-2">
          <button className="btn btn-block  btn-primary flex flex-row items-center font-acme capitalize  text-base  ">
            Send Message <PaperAirplaneIcon className="w-5 h-5 ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
