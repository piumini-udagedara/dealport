import { axiosClient } from "@/lib/axios-client";

export async function uploadProductImage(file: File): Promise<{ url: string }> {
  const formData = new FormData();
  formData.append("file", file);
  const res = await axiosClient.post<{ url: string }>("/uploads", formData);
  return res.data;
}
