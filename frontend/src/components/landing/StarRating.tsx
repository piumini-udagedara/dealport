interface StarRatingProps {
  sizeClassName?: string;
}

export function StarRating({ sizeClassName = "h-4 w-4" }: StarRatingProps) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className={`${sizeClassName} inline-block rounded-full bg-[#FBBD23]`} />
      ))}
    </div>
  );
}
