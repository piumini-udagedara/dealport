import { axiosClient } from "@/lib/axios-client";
import type { Tag } from "@/lib/types";

export async function fetchTags(): Promise<Tag[]> {
  const res = await axiosClient.get<Tag[]>("/tags");
  return res.data;
}
