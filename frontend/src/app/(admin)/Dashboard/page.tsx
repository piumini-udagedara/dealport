"use client";

import { FC } from "react";
import { StatCards } from "@/components/dashboard/StatCards";
import { WeeklyReport } from "@/components/dashboard/WeeklyReport";
import { UsersPanel } from "@/components/dashboard/UsersPanel";
import { TransactionTable } from "@/components/dashboard/TransactionTable";
import { TopProducts } from "@/components/dashboard/TopProducts";
import { BestSellingProducts } from "@/components/dashboard/BestSellingProducts";
import { AddNewProduct } from "@/components/dashboard/AddNewProduct";

const Dashboard: FC = () => {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <StatCards />

      <div className="flex items-stretch self-stretch gap-6">
        <WeeklyReport />
        <UsersPanel />
      </div>

      <div className="flex items-stretch self-stretch gap-6">
        <TransactionTable />
        <TopProducts />
      </div>

      <div className="flex items-stretch self-stretch gap-6">
        <BestSellingProducts />
        <AddNewProduct />
      </div>
    </div>
  );
};

export default Dashboard;
