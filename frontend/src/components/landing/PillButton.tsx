interface PillButtonProps {
  label: string;
  variant: "primary" | "primaryDark" | "secondary" | "accent" | "gradient";
  className?: string;
}

const variantClassMap: Record<PillButtonProps["variant"], string> = {
  primary: "bg-dealport-primary text-white h-[42px] w-[181px] px-5 py-2.5 text-[16px] font-bold",
  primaryDark:
    "bg-dealport-primary-dark text-white h-[48px] w-[181px] px-[33px] py-4 text-[16px] font-bold",
  secondary:
    "bg-dealport-accent text-dealport-primary-dark h-[42px] w-[181px] px-3 py-2 text-[16px] font-bold",
  accent: "border border-black text-black h-[42px] w-[181px] px-6 py-3 text-[16px] font-normal",
  gradient:
    "effect-ambient-3 bg-gradient-to-r from-[#173FAB] to-[#8E3A9A] text-white h-[42px] w-[181px] px-3 py-2 text-[16px] font-bold",
};

export function PillButton({ label, variant, className = "" }: PillButtonProps) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center rounded-[200px] ${variantClassMap[variant]} ${className}`.trim()}
    >
      {label}
    </button>
  );
}
