"use client";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const usersPerMinuteData = [
  { min: "0", users: 35 },
  { min: "2", users: 17 },
  { min: "4", users: 22 },
  { min: "6", users: 9 },
  { min: "8", users: 28 },
  { min: "10", users: 22 },
  { min: "12", users: 17 },
  { min: "14", users: 31 },
  { min: "16", users: 6 },
  { min: "18", users: 14 },
  { min: "20", users: 22 },
  { min: "22", users: 9 },
  { min: "24", users: 28 },
  { min: "26", users: 4 },
  { min: "28", users: 19 },
  { min: "30", users: 25 },
];

const salesByCountry = [
  {
    flag: "./country/US.png",
    country: "US",
    sales: "30k",
    pct: "25.8%",
    positive: true,
    barWidth: "w-[76px]",
    trendIcon:
      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/6azpg294_expires_30_days.png",
  },
  {
    flag: "./country/Brazil.png",
    country: "Brazil",
    sales: "30k",
    pct: "15.8%",
    positive: false,
    barWidth: "w-[53px]",
    trendIcon:
      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/f2r0rh2c_expires_30_days.png",
  },
  {
    flag: "./country/Australia.png",
    country: "Australia",
    sales: "25k",
    pct: "35.8%",
    positive: true,
    barWidth: "w-[90px]",
    trendIcon:
      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/p8swu52w_expires_30_days.png",
  },
];

export function UsersPanel() {
  return (
    <div
      className="flex flex-col items-start bg-white w-[361px] py-[18px] rounded-lg"
      style={{ boxShadow: "0px 1px 3px #00000033" }}
    >
      {/* Header */}
      <div className="flex justify-between items-start self-stretch mb-[25px] mx-5">
        <div className="flex flex-col shrink-0 items-start gap-2">
          <span className="text-[#6467F2] text-sm">Users in last 30 minutes</span>
          <span className="text-[#23272E] text-[32px] font-bold mr-[60px]">21.5K</span>
        </div>
        <Image
          width={20}
          height={20}
          src="./dotsHorizontal.svg"
          className="w-5 h-5 object-fill"
          alt=""
        />
      </div>

      {/* Users per minute chart */}
      <span className="text-[#6A717F] text-sm mb-3 ml-5">Users per minute</span>
      <div className="self-stretch mb-6 mx-5 h-[80px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={usersPerMinuteData}
            barSize={8}
            margin={{ top: 4, right: 4, left: -30, bottom: 0 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#F0F0F0" />
            <XAxis
              dataKey="min"
              tick={{ fontSize: 10, fill: "#8A909A" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis tick={{ fontSize: 10, fill: "#8A909A" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{
                fontSize: 12,
                borderRadius: 8,
                border: "none",
                boxShadow: "0 2px 8px #0002",
              }}
              formatter={(v) => [v, "Users"]}
              labelFormatter={(l) => `Min ${l}`}
            />
            <Bar dataKey="users" fill="#4EA674" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Sales by Country */}
      <div className="flex justify-between items-center self-stretch mx-5">
        <span className="text-[#23272E] text-lg font-bold">Sales by Country</span>
        <span className="text-[#23272E] text-lg font-bold">Sales</span>
      </div>
      <div
        className="flex flex-col self-stretch bg-cover bg-center py-4 px-5 mb-[5px] gap-[26px] rounded-lg"
        style={{
          backgroundImage: "url('./expires_30_days.png')",
        }}
      >
        {salesByCountry.map((row) => (
          <div key={row.country} className="flex justify-between items-center self-stretch">
            <div className="flex shrink-0 items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={row.flag} className="w-[34px] h-[34px] object-fill" alt={row.country} />
              <div className="flex flex-col shrink-0 items-start gap-0.5">
                <span className="text-[#4B465C] text-sm font-bold">{row.sales}</span>
                <span className="text-[#8B909A] text-xs">{row.country}</span>
              </div>
            </div>
            <div className="flex flex-col w-[179px] pb-2.5 gap-[3px]">
              <div className="flex flex-col items-end self-stretch">
                <div className="flex items-center gap-[3px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={row.trendIcon} className="w-[13px] h-[13px] object-fill" alt="" />
                  <span
                    className={`text-[10px] font-bold ${row.positive ? "text-[#28C76F]" : "text-[#EF4343]"}`}
                  >
                    {row.pct}
                  </span>
                </div>
              </div>
              <div className="items-start self-stretch bg-[#F0F3FF] rounded-[10px]">
                <div className={`bg-[#6467F2] ${row.barWidth} h-1.5 rounded-[10px]`} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-end self-stretch  px-5 pt-4">
        <Button variant="outline-full">View Insight</Button>
      </div>
    </div>
  );
}
