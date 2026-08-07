/* eslint-disable prettier/prettier */
"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useProducts, useDeleteProduct } from "@/hooks/useProducts";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import type { Product } from "@/lib/types";

function currency(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

export default function ProductListPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const query = useMemo(() => ({ page, limit: 10, search: search || undefined }), [page, search]);

  const { data, isFetching, isError } = useProducts(query);
  const deleteMutation = useDeleteProduct();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState<string | null>(null);
  const [deleteItemName, setDeleteItemName] = useState("");

  const items: Product[] = data?.data ?? [];
  const totalPages = data?.meta.totalPages ?? 1;
  const canPrev = page > 1;
  const canNext = page < totalPages;

  const openDeleteModal = (id: string, name: string) => {
    setDeleteItemId(id);
    setDeleteItemName(name);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setDeleteItemId(null);
    setDeleteItemName("");
  };

  const confirmDelete = () => {
    if (!deleteItemId) return;
    deleteMutation.mutate(deleteItemId);
    closeDeleteModal();
  };

  return (
    <div className="flex flex-1 flex-col gap-5">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-[#023337] text-2xl font-bold">Product List</h1>
        <div className="ml-auto flex w-full items-center gap-3 sm:w-auto">
          <div className="flex w-full max-w-[340px] items-center rounded-[4px] border border-[#E5ECF2] bg-white px-3 py-2 shadow-sm">
            <Image
              width={20}
              height={20}
              src="./search.svg"
              className="h-5 w-5 text-[#6A717F]"
              alt="Search icon"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setPage(1);
                setSearch(e.target.value);
              }}
              placeholder="Search product by name, sku..."
              className="ml-2 flex-1 border-none bg-transparent text-sm text-[#23272E] placeholder-[#6A717F] outline-none"
            />
          </div>
        </div>
      </div>

      {isError && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          Failed to load products.
        </div>
      )}

      <div className="rounded-lg bg-white p-4 shadow-[0_1px_3px_#00000033]">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="bg-[#EAF8E7] rounded-lg border-b border-[#e8edf2] text-sm text-[#6A717F]">
                <th className="py-4 px-4">Name</th>
                <th className="py-4 px-4">Category</th>
                <th className="py-4 px-4">Price</th>
                <th className="py-4 px-4">Stock</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-4">Created</th>
                <th className="py-4 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {isFetching && (
                <tr>
                  <td colSpan={7} className="py-6 text-sm text-[#6A717F]">
                    Loading products...
                  </td>
                </tr>
              )}

              {!isFetching && items.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-6 text-sm text-[#6A717F]">
                    No products found.
                  </td>
                </tr>
              )}

              {items.map((item) => (
                <tr key={item.id} className="border-b border-[#f1f4f7] text-sm">
                  <td className="py-4 px-4 font-semibold text-[#023337]">{item.name}</td>
                  <td className="py-4 px-4 text-[#6A717F]">{item.category?.name ?? "-"}</td>
                  <td className="py-4 px-4 font-semibold text-[#023337]">{currency(item.price)}</td>
                  <td className="py-4 px-4 text-[#023337]">{item.stock}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${
                        item.status === "PUBLISHED"
                          ? "bg-[#e9f8e6] text-[#21C45D]"
                          : "bg-[#fff4da] text-[#c28a1f]"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-[#6A717F]">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-4">
                    <button
                      type="button"
                      className="rounded-lg border border-[#F5D3D3] bg-[#FFF1F2] px-3 py-1 text-xs text-[#D64545] hover:bg-[#FDE8E8]"
                      onClick={() => openDeleteModal(item.id, item.name)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-[#6A717F]">
            Page {page} of {totalPages}
          </span>
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              disabled={!canPrev || isFetching}
              onClick={() => setPage((p) => p - 1)}
            >
              Previous
            </Button>
            <Button
              variant="secondary"
              disabled={!canNext || isFetching}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>
        </div>
      </div>

      <Modal
        open={deleteModalOpen}
        title="Delete product"
        description={`Are you sure you want to delete "${deleteItemName}"? This action cannot be undone.`}
        confirmLabel="Delete"
        cancelLabel="Cancel"
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
