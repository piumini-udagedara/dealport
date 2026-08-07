import type { ReactNode } from "react";

interface IconSquareButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export function IconSquareButton({
  icon,
  label,
  onClick,
  className = "",
  type = "button",
}: IconSquareButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border border-dealport-border text-slate-700 hover:bg-slate-50 ${className}`.trim()}
    >
      {icon}
    </button>
  );
}
