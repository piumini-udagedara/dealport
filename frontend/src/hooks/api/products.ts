import { axiosClient } from "@/lib/axios-client";
import type { Product, PaginatedProducts } from "@/lib/types";

export async function fetchProducts(
  params?: Record<string, string | number | undefined>
): Promise<PaginatedProducts> {
  const search = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== "") search.set(k, String(v));
    });
  }
  const qs = search.toString();
  const res = await axiosClient.get<PaginatedProducts>(`/products${qs ? `?${qs}` : ""}`);
  return res.data;
}

export async function fetchTopProducts(limit = 5): Promise<Product[]> {
  const res = await axiosClient.get<Product[]>(`/products/top?limit=${limit}`);
  return res.data;
}

export async function fetchProduct(id: string): Promise<Product> {
  const res = await axiosClient.get<Product>(`/products/${id}`);
  return res.data;
}

export async function createProduct(data: object): Promise<Product> {
  const res = await axiosClient.post<Product>("/products", data);
  return res.data;
}

export async function updateProduct(id: string, data: object): Promise<Product> {
  const res = await axiosClient.patch<Product>(`/products/${id}`, data);
  return res.data;
}

export async function deleteProduct(id: string): Promise<{ deleted: boolean }> {
  const res = await axiosClient.delete<{ deleted: boolean }>(`/products/${id}`);
  return res.data;
}
