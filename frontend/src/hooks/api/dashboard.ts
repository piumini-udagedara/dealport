import { axiosClient } from "@/lib/axios-client";

export interface DaySales {
  day: string;
  sales: number;
}

export interface DashboardStats {
  customers: number;
  totalProducts: number;
  stockProducts: number;
  outOfStock: number;
  revenue: number;
}

export interface CardStats {
  totalSales: number;
  totalSalesPrev: number;
  totalOrders: number;
  totalOrdersPrev: number;
  pendingOrders: number;
  canceledOrders: number;
}

export async function fetchDashboardStats(): Promise<DashboardStats> {
  const res = await axiosClient.get<DashboardStats>("/dashboard/stats");
  return res.data;
}

export async function fetchCardStats(): Promise<CardStats> {
  const res = await axiosClient.get<CardStats>("/dashboard/card-stats");
  return res.data;
}

export async function fetchWeeklyReport(week: "this" | "last" = "this"): Promise<DaySales[]> {
  const res = await axiosClient.get<DaySales[]>(`/dashboard/weekly-report?week=${week}`);
  return res.data;
}
