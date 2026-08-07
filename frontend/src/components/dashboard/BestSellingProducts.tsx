"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useProducts } from "@/hooks/useProducts";

export function BestSellingProducts() {
  const { data, isLoading } = useProducts({ sortBy: "salesCount", sortOrder: "desc", limit: 5 });
  const products = data?.data ?? [];
  return (
    <div className="flex-1 bg-white py-5 rounded-lg" style={{ boxShadow: "0px 1px 3px #00000033" }}>
      {/* Header */}
      <div className="flex justify-between items-center self-stretch mb-5 mx-5">
        <span className="text-[#23272E] text-lg font-bold">Best selling product</span>
        <Button variant="primary">
          <span className="text-white text-sm">Filter</span>
          <Image width={20} height={20} src="/sort.svg" className="w-5 h-5 rounded-lg object-fill" alt="" />
        </Button>
      </div>

      {/* Borderless table */}
      <div className="overflow-x-auto mx-5">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-[#EAF8E7] rounded-lg">
              <th className="px-4 py-3 text-[13px] font-medium text-[#6A717F] rounded-l-lg">Product</th>
              <th className="px-4 py-3 text-[13px] font-medium text-[#6A717F]">Total Order</th>
              <th className="px-4 py-3 text-[13px] font-medium text-[#6A717F]">Status</th>
              <th className="px-4 py-3 text-[13px] font-medium text-[#6A717F] rounded-r-lg">Price</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={4} className="px-4 py-4 text-sm text-[#6A717F]">Loading…</td>
              </tr>
            )}
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    {p.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.imageUrl} className="w-[46px] h-[46px] rounded-xl object-cover shrink-0" alt={p.name} />
                    ) : (
                      <div className="w-[46px] h-[46px] rounded-xl bg-gray-100 flex items-center justify-center text-xs text-gray-400 shrink-0">{p.name[0]}</div>
                    )}
                    <span className="font-bold text-[#023337]">{p.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-[#23272E]">{p.salesCount}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${p.stock > 0 ? "text-[#21C45D]" : "text-[#EF4343]"}`}>
                    <span className={`w-2 h-2 rounded-full ${p.stock > 0 ? "bg-[#21C45D]" : "bg-[#EF4343]"}`} />
                    {p.stock > 0 ? "Stock" : "Stock out"}
                  </span>
                </td>
                <td className="px-4 py-3 font-bold text-[#023337]">${Number(p.price).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col items-end self-stretch  px-5">
        <Button variant="outline">Details</Button>
      </div>
    </div>
  );
}
