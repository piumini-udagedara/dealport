import { axiosClient } from "@/lib/axios-client";
import type { Category } from "@/lib/types";

export async function fetchCategories(): Promise<Category[]> {
  const res = await axiosClient.get<Category[]>("/categories");
  return res.data;
}
