import React from "react";
import type { NextPage } from "next";
import { TeamCard } from "~~/components/TeamCard";
import { Clients, HomeFooter, HomeHeader } from "~~/components/home";

const Team: NextPage = () => {
  return (
    <section data-theme="home" className="min-h-screen">
      <HomeHeader />
      <div
        className="container mx-auto pb-32 
       pt-12 bg-inherit md:px-0 px-8"
      >
        <h1 className="md:text-3xl text-center ">The Brains Behind the Operation</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 py-16">
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
      <Clients />
      <HomeFooter />
    </section>
  );
};

export default Team;
