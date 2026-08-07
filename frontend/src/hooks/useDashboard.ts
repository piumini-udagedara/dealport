import { useQuery } from "@tanstack/react-query";
import { fetchDashboardStats, fetchWeeklyReport, fetchCardStats } from "@/hooks/api/dashboard";
import type { DaySales, DashboardStats, CardStats } from "@/hooks/api/dashboard";

export type { DaySales, DashboardStats, CardStats };

export const dashboardKeys = {
  all: ["dashboard"] as const,
  stats: () => [...dashboardKeys.all, "stats"] as const,
  cardStats: () => [...dashboardKeys.all, "card-stats"] as const,
  weeklyReport: (week: "this" | "last") => [...dashboardKeys.all, "weekly-report", week] as const,
};

export function useCardStats() {
  return useQuery<CardStats>({
    queryKey: dashboardKeys.cardStats(),
    queryFn: fetchCardStats,
    staleTime: 30_000,
  });
}

export function useDashboardStats() {
  return useQuery<DashboardStats>({
    queryKey: dashboardKeys.stats(),
    queryFn: fetchDashboardStats,
    staleTime: 30_000,
  });
}

export function useWeeklyReport(week: "this" | "last") {
  return useQuery<DaySales[]>({
    queryKey: dashboardKeys.weeklyReport(week),
    queryFn: () => fetchWeeklyReport(week),
    staleTime: 30_000,
  });
}
