import React from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  isActive: boolean;
  isRecommended?: boolean;
  onDetailsClick: () => void;
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  isActive,
  isRecommended = false,
  onDetailsClick,
}) => {
  const cardClasses = isActive ? "bg-[#1A1D1F]" : "bg-[#1A1D1F] hover:bg-gray-600";
  const recommendedBadge = isRecommended ? null : null;

  return (
    <div className={`rounded-md bg-[#111315] ${cardClasses}`}>
      <Image src={imageUrl} width={100} height={100} layout="responsive" alt={title} />
      <div className="p-4 border-b h-[11rem]">
        <h3 className="text-xl mb-1 mt-4">{title}</h3>
        <p className="mb-4 font-light text-[#FFFFFF90]">{description}</p>
        {recommendedBadge}
      </div>

      <button className="text-white py-4 px-6 rounded-md w-full font-light text" onClick={onDetailsClick}>
        View Details
      </button>
    </div>
  );
};

export default Card;
