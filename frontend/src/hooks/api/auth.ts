import { axiosClient } from "@/lib/axios-client";
import type { LoginResponse } from "@/lib/types";

export async function login(email: string, password: string): Promise<LoginResponse> {
  const res = await axiosClient.post<LoginResponse>("/auth/login", { email, password });
  return res.data;
}
