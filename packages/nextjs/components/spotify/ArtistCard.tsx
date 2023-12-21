import React from "react";
import Rating from "./Rating";
import millify from "millify";

interface IProps {
  name: string;
  followers: number;
  albums: number;
  location: string;
  popularity: number;
  biography: string;
  following?: boolean;
}

export default function ArtistCard({ name, followers, albums, location, popularity, biography, following }: IProps) {
  return (
    <div className="container w-4/5 mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex mb-4 gap-3">
          <div className="text-center">
            <h1 className="text-2xl font-bold">{millify(followers)}</h1>
            <p>Followers</p>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold">{millify(albums)}</h1>
            <p>Albums</p>
          </div>
        </div>
        <div>
          <button className={`bg-lightgreen text-black px-8 py-2 rounded bg-[#9DFF94] text-sm font-bold `}>
            {" "}
            {following ? "Unfollow" : "Follow"}
          </button>
        </div>
      </div>
      <div className="text-center py-8">
        <h2 className="text-3xl">{name}</h2>
        <p className="text-sm uppercase">{location}</p>
        <Rating rating={popularity} />
        <p className="mt-4 leading-[1.7]"> {biography}</p>
      </div>
    </div>
  );
}
