import React from "react";
import ClaimNFT from "./ClaimNft";

const ArtistCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-100 px-0 my-32">
      <div className="bg-[#1A1D1F] rounded-lg w-4/5 text-[#A0AEC0] p-6">
        <div className="container w-4/5 mx-auto">
          <div className="flex justify-between">
            <div className="flex mb-4 gap-3">
              <div className="text-center">
                <h1 className="text-2xl font-bold">22</h1>
                <p>Friends</p>
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold">10</h1>
                <p>Badges</p>
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-bold">89</h1>
                <p>Comments</p>
              </div>
            </div>

            <div className="mb-4">
              <img src="/assets/profile.png" alt="Artist Image" className="w-24 h-24 rounded-full" />
            </div>

            <div>
              <button className="bg-lightgreen text-black px-8 py-2 rounded bg-[#9DFF94] text-sm font-bold">
                Follow
              </button>
            </div>
          </div>

          <div className="text-center py-8">
            <h2 className="text-3xl">SZA</h2>
            <p className="text-sm uppercase">LOS ANGELES, CALIFORNIA</p>
            <div className="rating rating-lg">
              <input type="radio" name="rating-9" className="rating-hidden" />
              <input type="radio" name="rating-9" className="mask mask-star-2  bg-[#9DFF94]" />
              <input type="radio" name="rating-9" className="mask mask-star-2  bg-[#9DFF94]" checked />
              <input type="radio" name="rating-9" className="mask mask-star-2  bg-[#9DFF94]" />
              <input type="radio" name="rating-9" className="mask mask-star-2  bg-[#9DFF94]" />
              <input type="radio" name="rating-9" className="mask mask-star-2  bg-[#9DFF94]" />
            </div>
            <p className="mt-4 leading-[1.7]">
              An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy
              writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove
              structure. An artist of considerable range.
              <span className="text-green-500 cursor-pointer block">Show More</span>
            </p>
          </div>
        </div>

        {/*  */}
        <ClaimNFT />
      </div>
    </div>
  );
};

export default ArtistCard;
