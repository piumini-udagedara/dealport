import { StarRating } from "./StarRating";

interface ReviewCardProps {
  name: string;
  body: string;
  variant: "selected" | "normal";
}

export function ReviewCard({ name, body, variant }: ReviewCardProps) {
  const selected = variant === "selected";

  return (
    <article
      className={
        selected
          ? "rounded-[13px] bg-dealport-accent p-[22px] shadow-[0px_8px_10px_1px_rgba(0,0,0,0.14)]"
          : "effect-ambient-1 rounded-xl border border-[#E5E7EB] bg-white p-5"
      }
    >
      <div className="mb-3 flex items-center gap-3">
        <div
          className={`${selected ? "h-[53px] w-[53px] rounded-[13px] bg-dealport-secondary" : "h-12 w-12 rounded-xl bg-[#dce7ef]"}`}
        />
        <div>
          <p
            className={`${selected ? "text-[24px] leading-[29px]" : "text-[22px] leading-[26px]"} font-bold text-dealport-primary-dark`}
          >
            {name}
          </p>
          <StarRating sizeClassName={selected ? "h-[18px] w-[18px]" : "h-[17px] w-[17px]"} />
        </div>
      </div>
      <p
        className={`${selected ? "text-[17px] leading-[25px]" : "text-[16px] leading-[23px]"} text-black`}
      >
        {body}
      </p>
    </article>
  );
}
