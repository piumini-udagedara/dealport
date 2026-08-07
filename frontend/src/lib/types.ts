export type UserRole = "ADMIN" | "SELLER";
export type ProductStatus = "DRAFT" | "PUBLISHED";

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Tag {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  sku: string | null;
  price: number;
  compareAt: number | null;
  stock: number;
  status: ProductStatus;
  imageUrl: string | null;
  imageUrls?: string[];
  salesCount: number;
  categoryId: string;
  category: Category;
  tags: Tag[];
  images?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedProducts {
  data: Product[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}
