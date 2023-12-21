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
      <div className="transition duration-300 p-3 rounded cursor-pointer hover:bg-[#282828] bg-[#00000090] border-2 border-[#ffffff30]">
        {images.length > 0 ? (
          <img
            src={images[0].url}
            alt={altTitle}
            width={50}
            height={50}
            className={`object-cover w-full h-36 rounded ${imageRounded ? "" : ""}`}
          />
        ) : (
          <div className="w-full h-40">
            <RiMusic2Fill className="w-full h-full bg-paper " />
          </div>
        )}
        <h3 className="mt-5 font-bold truncate">{heading}</h3>
        {subheading && <h6 className="text-sm truncate text-gray capitalize">{subheading}</h6>}
      </div>
    </Link>
  );
}
