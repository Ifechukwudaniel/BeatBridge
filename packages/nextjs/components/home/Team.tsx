import React from "react";
import Link from "next/link";

/**
 * Home Page About  Section
 */
export const Team = () => {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-2 py-16 gap-6">
        <div>
          <p className="text-primary uppercase font-bold"> OUR Team</p>
          <h2 className="text-3xl">The Brains Behind the Operation</h2>
          <p>
            At Beatbridge, we are proud to have a talented and diverse team of professionals dedicated to
            revolutionizing the way musical fans engage with artists
          </p>
          <p>
            Our team includes experienced project managers, full stack developers, UI/UX designers, and NFT designers,
            all of whom have a proven track record in the industry.
          </p>
          <Link href="/team" className="btn btn-md  btn-primary font-changa capitalize text-base px-12 mt-8">
            More about us
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <img src="/assets/team.png" alt="" />
        </div>
      </div>
    </section>
  );
};
