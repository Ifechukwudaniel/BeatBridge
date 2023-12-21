interface IProps {
  rating: number;
}

export default function Rating({ rating }: IProps) {
  console.log(rating);
  return (
    <div className="rating rating-lg">
      <input type="radio" name="rating-9" className="rating-hidden" checked={rating <= 0} />
      <input type="radio" name="rating-9" className="mask mask-star-2  bg-[#9DFF94]" checked={rating <= 20} />
      <input type="radio" name="rating-9" className="mask mask-star-2  bg-[#9DFF94] ml-3" checked={rating <= 40} />
      <input type="radio" name="rating-9" className="mask mask-star-2  bg-[#9DFF94] ml-3" checked={rating <= 60} />
      <input type="radio" name="rating-9" className="mask mask-star-2  bg-[#9DFF94] ml-3" checked={rating <= 80} />
      <input type="radio" name="rating-9" className="mask mask-star-2  bg-[#9DFF94] ml-3" checked={rating <= 100} />
    </div>
  );
}
