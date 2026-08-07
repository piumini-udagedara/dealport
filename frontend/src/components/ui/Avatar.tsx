"use client";

import { useState } from "react";

type AvatarProps = {
  src?: string;
  name?: string;
  className?: string;
};

export default function Avatar({ src, name = "", className = "" }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

  if (src && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={name} className={className} onError={() => setFailed(true)} />
    );
  }

  return (
    <span
      aria-label={name}
      className={`flex items-center justify-center bg-[#4EA674] font-semibold text-white ${className}`}
    >
      {initials || "?"}
    </span>
  );
}
