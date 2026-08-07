"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { useDashboardStats, useWeeklyReport } from "@/hooks/useDashboard";

type Week = "this" | "last";

interface ChartRow {
  day: string;
  "This week": number;
  "Last week": number;
}

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const fallback: ChartRow[] = DAYS.map((day, i) => ({
  day,
  "This week": [12000, 28000, 22000, 35000, 30000, 42000, 38000][i],
  "Last week": [8000, 19000, 17000, 29000, 25000, 34000, 31000][i],
}));

function fmt(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return String(n);
}

function pctChange(current: number, previous: number): string {
  if (previous === 0) return "—";
  const diff = ((current - previous) / previous) * 100;
  return `${diff >= 0 ? "+" : ""}${diff.toFixed(1)}%`;
}

export function WeeklyReport() {
  const [activeWeek, setActiveWeek] = useState<Week>("this");

  const { data: statsData } = useDashboardStats();
  const { data: thisWeekData, isFetching: fetchingThis } = useWeeklyReport("this");
  const { data: lastWeekData, isFetching: fetchingLast } = useWeeklyReport("last");

  const loading = fetchingThis || fetchingLast;

  const stats = statsData
    ? [
        { label: "Customers", value: fmt(statsData.customers) },
        { label: "Total Products", value: fmt(statsData.totalProducts) },
        { label: "Stock Products", value: fmt(statsData.stockProducts) },
        { label: "Out of Stock", value: fmt(statsData.outOfStock) },
        { label: "Revenue", value: `$${fmt(statsData.revenue)}` },
      ]
    : [
        { label: "Customers", value: "—" },
        { label: "Total Products", value: "—" },
        { label: "Stock Products", value: "—" },
        { label: "Out of Stock", value: "—" },
        { label: "Revenue", value: "—" },
      ];

  const chartData: ChartRow[] = (() => {
    if (!thisWeekData && !lastWeekData) return fallback;
    const merged = DAYS.map((day, i) => ({
      day,
      "This week": thisWeekData?.[i]?.sales ?? 0,
      "Last week": lastWeekData?.[i]?.sales ?? 0,
    }));
    return merged.some((r) => r["This week"] || r["Last week"]) ? merged : fallback;
  })();

  const thisTotal = thisWeekData?.reduce((s, r) => s + r.sales, 0) ?? 0;
  const lastTotal = lastWeekData?.reduce((s, r) => s + r.sales, 0) ?? 0;
  const showComparison = !!(thisWeekData && lastWeekData);

  return (
    <div className="flex-1 bg-white py-[23px] rounded-lg" style={{ boxShadow: "0px 1px 3px #00000033" }}>
      {/* Header */}
      <div className="flex items-center self-stretch mb-5 ml-5 mr-[31px]">
        <span className="text-[#23272E] text-lg font-bold">Report for this week</span>
        {showComparison && (
          <span
            className={`ml-3 text-xs font-semibold px-2 py-0.5 rounded-full ${
              thisTotal >= lastTotal ? "bg-[#EAF8E7] text-[#4EA674]" : "bg-red-50 text-red-500"
            }`}
          >
            {pctChange(thisTotal, lastTotal)} vs last week
          </span>
        )}
        <div className="flex-1 self-stretch" />
        <div className="flex shrink-0 items-center bg-[#EAF8E7] p-1 mr-2 gap-1 rounded-xl">
          <button
            className={`flex flex-col shrink-0 items-start text-left py-2 px-3 rounded-lg border-0 transition-colors ${
              activeWeek === "this" ? "bg-white" : "bg-transparent"
            }`}
            onClick={() => setActiveWeek("this")}
          >
            <span className={`text-xs ${activeWeek === "this" ? "text-[#4EA674]" : "text-[#6A717F]"}`}>
              This week
            </span>
          </button>
          <button
            className={`flex flex-col shrink-0 items-start text-left py-2 px-3 rounded-lg border-0 transition-colors ${
              activeWeek === "last" ? "bg-white" : "bg-transparent"
            }`}
            onClick={() => setActiveWeek("last")}
          >
            <span className={`text-xs ${activeWeek === "last" ? "text-[#4EA674]" : "text-[#6A717F]"}`}>
              Last week
            </span>
          </button>
        </div>
        <Image width={20} height={20} src="./dotsHorizontal.svg" className="w-5 h-5 object-fill" alt="" />
      </div>

      {/* Stats row */}
      <div className="flex justify-center items-center self-stretch mb-[47px] mx-6 gap-5">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col shrink-0 items-start py-[15px] pl-2 pr-6 gap-2">
            <span className="text-[#23272E] text-2xl font-bold">{s.value}</span>
            <span className="text-[#8A909A] text-[13px]">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Chart — shows only the active week */}
      <div className={`self-stretch mb-6 mx-5 h-[280px] transition-opacity ${loading ? "opacity-40" : "opacity-100"}`}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData.map((r) => ({ day: r.day, sales: activeWeek === "this" ? r["This week"] : r["Last week"] }))}
            margin={{ top: 8, right: 16, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="gradActive" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={"#4EA674"} stopOpacity={0.7} />
                <stop offset="95%" stopColor={"#4EA674"} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
            <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#023337" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fill: "#023337" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ fontSize: 12, borderRadius: 8, border: "none", boxShadow: "0 2px 8px #0002" }}
              formatter={(v) => `$${(v as number).toLocaleString()}`}
            />
            <Area
              type="monotone"
              dataKey="sales"
              stroke={ "#4EA674" }
              strokeWidth={2.5}
              fill="url(#gradActive)"
              dot={false}
              activeDot={{ r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
