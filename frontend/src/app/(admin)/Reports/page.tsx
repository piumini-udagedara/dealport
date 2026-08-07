"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { useDashboardStats, useWeeklyReport } from "@/hooks/useDashboard";
import { Button } from "@/components/ui/Button";

type Week = "this" | "last";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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

const STAT_CARD_COLORS = ["#4EA674", "#6467F2", "#F59E0B", "#EF4343", "#023337"];

export default function ReportsPage() {
  const [activeWeek, setActiveWeek] = useState<Week>("this");

  const { data: statsData, isLoading: loadingStats } = useDashboardStats();
  const { data: thisWeekData, isFetching: fetchingThis } = useWeeklyReport("this");
  const { data: lastWeekData, isFetching: fetchingLast } = useWeeklyReport("last");

  const loading = fetchingThis || fetchingLast;

  const statCards = statsData
    ? [
        { label: "Customers", value: fmt(statsData.customers) },
        { label: "Total Products", value: fmt(statsData.totalProducts) },
        { label: "In Stock", value: fmt(statsData.stockProducts) },
        { label: "Out of Stock", value: fmt(statsData.outOfStock) },
        { label: "Revenue", value: `$${fmt(statsData.revenue)}` },
      ]
    : Array(5).fill({ label: "—", value: "—" });

  const chartData = DAYS.map((day, i) => ({
    day,
    "This week": thisWeekData?.[i]?.sales ?? 0,
    "Last week": lastWeekData?.[i]?.sales ?? 0,
  }));

  const thisTotal = thisWeekData?.reduce((s, r) => s + r.sales, 0) ?? 0;
  const lastTotal = lastWeekData?.reduce((s, r) => s + r.sales, 0) ?? 0;

  return (
    <div className="flex flex-col gap-6 p-1">
      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {statCards.map((card, i) => (
          <div
            key={card.label}
            className="flex flex-col gap-1 rounded-xl bg-white p-5"
            style={{ boxShadow: "0px 1px 3px #00000033" }}
          >
            <div
              className="h-1 w-8 rounded-full mb-2"
              style={{ background: STAT_CARD_COLORS[i] }}
            />
            <span className="text-2xl font-bold text-[#23272E]">
              {loadingStats ? "…" : card.value}
            </span>
            <span className="text-sm text-[#8A909A]">{card.label}</span>
          </div>
        ))}
      </div>

      {/* Weekly comparison area chart */}
      <div className="rounded-xl bg-white p-5" style={{ boxShadow: "0px 1px 3px #00000033" }}>
        <div className="mb-4 flex items-center gap-3">
          <span className="text-lg font-bold text-[#23272E]">Weekly Sales Comparison</span>
          {!!(thisWeekData && lastWeekData) && (
            <span
              className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                thisTotal >= lastTotal ? "bg-[#EAF8E7] text-[#4EA674]" : "bg-red-50 text-red-500"
              }`}
            >
              {pctChange(thisTotal, lastTotal)} vs last week
            </span>
          )}
          <div className="ml-auto flex items-center gap-1 rounded-xl bg-[#EAF8E7] p-1">
            {(["this", "last"] as Week[]).map((w) => (
              <button
                key={w}
                onClick={() => setActiveWeek(w)}
                className={`rounded-lg border-0 px-3 py-2 text-xs transition-colors ${
                  activeWeek === w ? "bg-white text-[#4EA674]" : "bg-transparent text-[#6A717F]"
                }`}
              >
                {w === "this" ? "This week" : "Last week"}
              </button>
            ))}
          </div>
        </div>
        <div className={`h-[240px] transition-opacity ${loading ? "opacity-40" : "opacity-100"}`}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="rGradThis" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4EA674" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="#4EA674" stopOpacity={0.05} />
                </linearGradient>
                <linearGradient id="rGradLast" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6467F2" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#6467F2" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
              <XAxis
                dataKey="day"
                tick={{ fontSize: 12, fill: "#023337" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis tick={{ fontSize: 12, fill: "#023337" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  fontSize: 12,
                  borderRadius: 8,
                  border: "none",
                  boxShadow: "0 2px 8px #0002",
                }}
                formatter={(v) => `$${(v as number).toLocaleString()}`}
              />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
              <Area
                type="monotone"
                dataKey="Last week"
                stroke="#6467F2"
                strokeWidth={activeWeek === "last" ? 2.5 : 1.5}
                strokeOpacity={activeWeek === "last" ? 1 : 0.35}
                fill="url(#rGradLast)"
                fillOpacity={activeWeek === "last" ? 1 : 0.3}
                dot={false}
                activeDot={{ r: 5 }}
              />
              <Area
                type="monotone"
                dataKey="This week"
                stroke="#4EA674"
                strokeWidth={activeWeek === "this" ? 2.5 : 1.5}
                strokeOpacity={activeWeek === "this" ? 1 : 0.35}
                fill="url(#rGradThis)"
                fillOpacity={activeWeek === "this" ? 1 : 0.3}
                dot={false}
                activeDot={{ r: 5 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Side-by-side bar chart */}
      <div className="rounded-xl bg-white p-5" style={{ boxShadow: "0px 1px 3px #00000033" }}>
        <span className="mb-4 block text-lg font-bold text-[#23272E]">Day-by-Day Breakdown</span>
        <div className={`h-[220px] transition-opacity ${loading ? "opacity-40" : "opacity-100"}`}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 8, right: 16, left: 0, bottom: 0 }}
              barGap={4}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" vertical={false} />
              <XAxis
                dataKey="day"
                tick={{ fontSize: 12, fill: "#023337" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis tick={{ fontSize: 12, fill: "#023337" }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{
                  fontSize: 12,
                  borderRadius: 8,
                  border: "none",
                  boxShadow: "0 2px 8px #0002",
                }}
                formatter={(v) => `$${(v as number).toLocaleString()}`}
              />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="Last week" fill="#6467F2" radius={[4, 4, 0, 0]} maxBarSize={20} />
              <Bar dataKey="This week" fill="#4EA674" radius={[4, 4, 0, 0]} maxBarSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
