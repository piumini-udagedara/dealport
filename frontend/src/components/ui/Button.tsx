import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline" | "outline-full" | "secondary" | "submit";
type ButtonSize = "small" | "medium" | "large";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const styles: Record<ButtonVariant, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 bg-[#4EA674] text-white text-sm px-3 rounded-lg border-0 cursor-pointer transition-opacity hover:opacity-90 disabled:opacity-50",
  outline:
    "inline-flex items-center justify-center bg-transparent text-[#6467F2] text-sm px-6 rounded-[50px] border border-solid border-[#6467F2] cursor-pointer transition-colors hover:bg-[#6467F210] disabled:opacity-50",
  "outline-full":
    "flex items-center justify-center self-stretch w-full bg-transparent text-[#6467F2] text-sm px-6 rounded-[50px] border border-solid border-[#6467F2] cursor-pointer transition-colors hover:bg-[#6467F210] disabled:opacity-50",
  secondary:
    "inline-flex items-center justify-center bg-white text-[#023337] text-sm px-4 rounded-lg border border-gray-200 cursor-pointer transition-colors hover:bg-gray-50 disabled:opacity-50",
  submit:
    "w-full inline-flex items-center justify-center bg-[#023337] text-white text-sm font-semibold px-4 rounded-lg border-0 cursor-pointer transition-opacity hover:opacity-90 disabled:opacity-60",
};

const sizes: Record<ButtonSize, string> = {
  small:  "h-8 text-xs",
  medium: "h-9 text-sm",
  large:  "h-12 text-base px-6",
};

export function Button({ variant = "outline", size = "medium", children, className = "", ...props }: ButtonProps) {
  return (
    <button className={`${styles[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}
