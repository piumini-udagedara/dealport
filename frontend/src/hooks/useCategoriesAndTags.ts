import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "@/hooks/api/categories";
import { fetchTags } from "@/hooks/api/tags";

export const categoryKeys = {
  all: ["categories"] as const,
};

export const tagKeys = {
  all: ["tags"] as const,
};

export function useCategories() {
  return useQuery({
    queryKey: categoryKeys.all,
    queryFn: fetchCategories,
    staleTime: 5 * 60_000,
  });
}

export function useTags() {
  return useQuery({
    queryKey: tagKeys.all,
    queryFn: fetchTags,
    staleTime: 5 * 60_000,
  });
}
