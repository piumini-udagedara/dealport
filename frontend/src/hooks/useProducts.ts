import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchProducts,
  fetchTopProducts,
  fetchProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "@/hooks/api/products";

export const productKeys = {
  all: ["products"] as const,
  list: (params?: object) => [...productKeys.all, "list", params] as const,
  top: (limit?: number) => [...productKeys.all, "top", limit] as const,
  detail: (id: string) => [...productKeys.all, id] as const,
};

export function useProducts(params?: Record<string, string | number | undefined>) {
  return useQuery({
    queryKey: productKeys.list(params),
    queryFn: () => fetchProducts(params),
  });
}

export function useTopProducts(limit = 5) {
  return useQuery({
    queryKey: productKeys.top(limit),
    queryFn: () => fetchTopProducts(limit),
  });
}

export function useProduct(id: string) {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => fetchProduct(id),
    enabled: !!id,
  });
}

export function useCreateProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: object) => createProduct(data),
    onSuccess: () => qc.invalidateQueries({ queryKey: productKeys.all }),
  });
}

export function useUpdateProduct(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (data: object) => updateProduct(id, data),
    onSuccess: () => qc.invalidateQueries({ queryKey: productKeys.all }),
  });
}

export function useDeleteProduct() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteProduct(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: productKeys.all }),
  });
}
