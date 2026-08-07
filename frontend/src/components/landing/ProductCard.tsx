import { StarRating } from "./StarRating";
import { PillButton } from "./PillButton";

interface ProductCardProps {
  title: string;
  description: string;
  reviewsText: string;
  priceText: string;
  discountText: string;
}

export function ProductCard({
  title,
  description,
  reviewsText,
  priceText,
  discountText,
}: ProductCardProps) {
  return (
    <article className="effect-ambient-6 w-full max-w-[272px] rounded-xl bg-white p-3">
      <div className="relative mb-5 h-[180px] rounded-xl border border-[#ECF1F4] bg-[#F7FBF8]">
        <button
          type="button"
          className="absolute right-[10px] top-[10px] flex h-6 w-6 items-center justify-center rounded-full bg-white text-black/60"
        >
          ♡
        </button>
        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
          Image
        </div>
      </div>
      <div className="space-y-5">
        <div className="space-y-2">
          <h3 className="text-[22px] font-bold leading-[26px] text-black">{title}</h3>
          <p className="text-[16px] leading-[22px] text-black/60">{description}</p>
          <div className="flex items-center gap-2">
            <StarRating />
            <span className="text-[14px] font-bold leading-5 text-[#6B7280]">{reviewsText}</span>
          </div>
          <div className="flex items-end gap-3">
            <span className="text-[22px] font-bold leading-[26px] text-dealport-primary">
              {priceText}
            </span>
            <span className="text-[16px] font-bold leading-[19px] text-black">{discountText}</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5">
          <button type="button" className="text-[16px] leading-[19px] text-dealport-info">
            View Details
          </button>
          <PillButton
            label="Add to cart"
            variant="primary"
            className="h-[39px] w-[120px] px-5 py-2.5"
          />
        </div>
      </div>
    </article>
  );
}
