import Image from "next/image";
import Link from "next/link";
import { RiMusic2Fill } from "react-icons/ri";

interface IProps {
  images: any;
  id: string;
  altTitle: string;
  heading: string;
  subheading?: string;
  imageRounded?: boolean;
  type: string;
}

export default function CardItem({
  images,
  id,
  altTitle,
  heading,
  subheading = "",
  imageRounded = false,
  type,
}: IProps) {
  return (
    <Link href={`/${type}/${id}`} passHref>
      <div className="transition duration-300 p-4 rounded cursor-pointer hover:bg-[#282828] bg-paper">
        {images.length > 0 ? (
          <Image
            src={images[0].url}
            alt={altTitle}
            className={`object-cover w-full h-36  ${imageRounded ? "rounded-full" : "rounded"}`}
          />
        ) : (
          <div className="w-full h-40">
            <RiMusic2Fill className="w-full h-full bg-paper " />
          </div>
        )}
        <h3 className="mt-5 font-bold truncate">{heading}</h3>
        {subheading && <h6 className="text-sm truncate text-gray">{subheading}</h6>}
      </div>
    </Link>
  );
}
