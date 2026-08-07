"use client";

import Image from "next/image";
import { useCardStats } from "@/hooks/useDashboard";
import { Button } from "@/components/ui/Button";

function StatCard({
  title,
  period,
  children,
}: {
  title: string;
  period: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-1 flex-col items-start bg-white py-5 rounded-lg"
      style={{ boxShadow: "0px 1px 3px #00000033" }}
    >
      <div className="flex justify-between items-center self-stretch mb-2 mx-5">
        <span className="text-[#23272E] text-lg font-bold">{title}</span>
        <Image width={20} height={20} src="./dotsHorizontal.svg" className="w-5 h-5 object-fill" alt="" />
      </div>
      <span className="text-[#6A717F] text-sm mb-5 ml-5">{period}</span>
      {children}
    </div>
  );
}

function fmt(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`;
  return `$${n}`;
}

function fmtCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return String(n);
}

function pct(current: number, prev: number): string {
  if (prev === 0) return "—";
  return `${(((current - prev) / prev) * 100).toFixed(1)}%`;
}

export function StatCards() {
  const { data, isLoading } = useCardStats();

  const totalSales = data?.totalSales ?? 0;
  const totalSalesPrev = data?.totalSalesPrev ?? 0;
  const totalOrders = data?.totalOrders ?? 0;
  const totalOrdersPrev = data?.totalOrdersPrev ?? 0;
  const pendingOrders = data?.pendingOrders ?? 0;
  const canceledOrders = data?.canceledOrders ?? 0;

  return (
    <div className="flex items-center self-stretch gap-4">
      {/* Total Sales */}
      <StatCard title="Total Sales" period="Last 7 days">
        <div className="flex items-center mb-2 ml-5 gap-[18px]">
          <span className="text-[#023337] text-[32px] font-bold">
            {isLoading ? "…" : fmt(totalSales)}
          </span>
          <div className="flex shrink-0 items-center gap-1.5">
            <span className="text-black text-base">Sales</span>
            <div className="flex shrink-0 items-center">
              <Image src="./arrow-downward-rounded.svg" className="w-4 h-4 object-fill" alt="" width={16} height={16} />
              <span className="text-[#21C45D] text-sm">
                {isLoading ? "—" : pct(totalSales, totalSalesPrev)}
              </span>
            </div>
          </div>
        </div>
        <span className="text-[#6A717F] text-sm mb-4 ml-5">
          Previous 7days ({isLoading ? "…" : fmt(totalSalesPrev)})
        </span>
        <div className="flex flex-col items-end self-stretch px-5">
          <Button variant="outline">Details</Button>
        </div>
      </StatCard>

      {/* Total Orders */}
      <StatCard title="Total Orders" period="Last 7 days">
        <div className="flex items-center mb-2 ml-[19px] gap-[18px]">
          <span className="text-[#023337] text-[32px] font-bold">
            {isLoading ? "…" : fmtCount(totalOrders)}
          </span>
          <div className="flex shrink-0 items-center gap-1">
            <span className="text-black text-base">order</span>
            <div className="flex shrink-0 items-center">
              <Image src="./arrow-downward-rounded.svg" className="w-4 h-4 object-fill" alt="" width={16} height={16} />
              <span className="text-[#21C45D] text-sm">
                {isLoading ? "—" : pct(totalOrders, totalOrdersPrev)}
              </span>
            </div>
          </div>
        </div>
        <span className="text-[#6A717F] text-sm mb-4 ml-[19px]">
          Previous 7days ({isLoading ? "…" : fmtCount(totalOrdersPrev)})
        </span>
        <div className="flex flex-col items-end self-stretch px-5">
          <Button variant="outline">Details</Button>
        </div>
      </StatCard>

      {/* Pending & Canceled */}
      <StatCard title="Pending & Canceled" period="Last 7 days">
        <div className="flex justify-center items-center self-stretch mb-[33px] mx-5 gap-11">
          <div className="flex flex-col items-start w-[138px] pr-[29px] gap-[7px]">
            <span className="text-black text-sm">Pending</span>
            <div className="flex items-center self-stretch gap-[8px]">
              <span className="text-[#023337] text-2xl font-bold">{isLoading ? "…" : pendingOrders}</span>
            </div>
          </div>
          <div className="flex flex-col items-start w-[138px] pr-[49px] gap-[7px]">
            <span className="text-black text-sm">Canceled</span>
            <div className="flex items-center gap-[9px]">
              <span className="text-[#EF4343] text-[22px] font-bold">
                {isLoading ? "…" : canceledOrders}
              </span>
              <div className="flex shrink-0 items-center">
                <Image src="./arrow-upward-rounded.svg" className="w-4 h-4 object-fill" alt="" width={16} height={16} />
                <span className="text-[#F87272] text-sm">—</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end self-stretch px-5">
          <Button variant="outline">Details</Button>
        </div>
      </StatCard>
    </div>
  );
}
