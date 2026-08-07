"use client";

import { useState } from "react";
import { useTopProducts } from "@/hooks/useProducts";

import Image from "next/image";
export function TopProducts() {
  const [query, setQuery] = useState("");
  const { data: products = [], isLoading } = useTopProducts(8);
  const filtered = products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
  return (
    <div
      className="flex flex-col bg-white w-[292px] pt-5 px-4 gap-4 rounded-lg"
      style={{ boxShadow: "0px 1px 3px #00000033" }}
    >
      <div className="flex flex-col self-stretch gap-3">
        <div className="flex justify-between items-center self-stretch">
          <span className="text-[#23272E] text-lg font-bold">Top Products</span>
          <span className="text-[#6467F2] text-xs">All product</span>
        </div>
        <div className="flex items-center self-stretch bg-gray-50 py-2 pl-2 gap-2 rounded-lg">

          <Image width={20} height={20} src="./search.svg" className="w-5 h-5 object-fill" alt="" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="flex-1 bg-transparent text-sm text-[#23272E] placeholder-[#6A717F] outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col self-stretch overflow-y-auto" style={{ height: "324px" }}>
        {isLoading && <div className="px-2 py-4 text-sm text-[#6A717F]">Loading…</div>}
        {filtered.map((p) => (
          <div
            key={p.id}
            className="flex items-center self-stretch gap-4 shrink-0"
            style={{ borderBottom: "1px solid #E9EDF2", padding: "8px 0" }}
          >
            {p.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.imageUrl} className="w-14 h-14 rounded-xl object-cover" alt={p.name} />
            ) : (
              <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center text-sm text-gray-400 shrink-0">
                {p.name[0]}
              </div>
            )}
            <div className="flex flex-col items-start flex-1 gap-1">
              <span className="text-[#023337] text-[15px]">{p.name}</span>
              <span className="text-[#8B909A] text-xs">{p.category?.name ?? "—"}</span>
            </div>
            <span className="text-[#023337] text-[15px] font-bold">
              ${Number(p.price).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
