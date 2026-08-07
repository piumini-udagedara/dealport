"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useCategories, useTags } from "@/hooks/useCategoriesAndTags";
import { useCreateProduct } from "@/hooks/useProducts";
import { Button } from "@/components/ui/Button";
import { Toggle } from "@/components/ui/Toggle";
import type { ProductStatus } from "@/lib/types";

const COLORS = ["#A8D5A2", "#F4A7B9", "#A8C8E8", "#F9E4A0", "#3D3D3D"];

export default function AddProductPage() {
  const { data: categories = [], isLoading: loadingCats } = useCategories();
  const { data: tags = [], isLoading: loadingTags } = useTags();
  const createMutation = useCreateProduct();

  const saving = createMutation.isPending;
  const loadingMeta = loadingCats || loadingTags;

  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [compareAt, setCompareAt] = useState("");
  const [taxIncluded, setTaxIncluded] = useState(true);
  const [stock, setStock] = useState("");
  const [unlimited, setUnlimited] = useState(false);
  const [featured, setFeatured] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const [tagIds, setTagIds] = useState<string[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [selectedColor, setSelectedColor] = useState(COLORS[4]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (categories.length > 0 && !categoryId) setCategoryId(categories[0].id);
  }, [categories, categoryId]);

  const salePrice = (() => {
    const p = Number(price || 0);
    const c = Number(compareAt || 0);
    return c > 0 ? p + c : 0;
  })();

  function toggleTag(id: string) {
    setTagIds((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]));
  }

  function resolveImageSrc(source: string) {
    const placeholder = "https://placehold.co/560x352.png?text=Image";
    if (!source || !source.trim()) {
      return { src: placeholder, useNextImage: true };
    }

    try {
      const parsed = new URL(
        source,
        typeof window !== "undefined" ? window.location.href : undefined
      );
      const sameOrigin = typeof window !== "undefined" && parsed.origin === window.location.origin;
      if (sameOrigin) {
        return { src: `${parsed.pathname}${parsed.search}${parsed.hash}`, useNextImage: true };
      }

      const allowedHosts = new Set([
        "storage.googleapis.com",
        "placehold.co",
        "images.unsplash.com",
        "ideabeam.com",
        "www.ideabeam.com",
        "www.buyzone.lk",
      ]);
      if (allowedHosts.has(parsed.hostname)) {
        return { src: parsed.href, useNextImage: true };
      }

      return { src: parsed.href, useNextImage: false };
    } catch {
      return { src: placeholder, useNextImage: true };
    }
  }

  /**
   * Submit the product form.
   * Performs client-side validation, then calls the create mutation to save the product.
   * @param {ProductStatus} status - Either 'PUBLISHED' or 'DRAFT'
   */
  function resetForm() {
    setName("");
    setDescription("");
    setPrice("");
    setCompareAt("");
    setTaxIncluded(true);
    setStock("");
    setUnlimited(false);
    setFeatured(false);
    setCategoryId(categories.length > 0 ? categories[0].id : "");
    setTagIds([]);
    setImageUrls([]);
    setNewImageUrl("");
    setSelectedColor(COLORS[4]);
    setFieldErrors({});
    setError("");
  }

  async function submit(status: ProductStatus) {
    setError("");
    setSuccess("");
    setFieldErrors({});
    if (!validate()) {
      setError("Please fix validation errors before submitting.");
      return;
    }
    try {
      await createMutation.mutateAsync({
        name,
        description: description || undefined,
        price: Number(price),
        compareAt: compareAt ? Number(compareAt) : undefined,
        stock: unlimited ? 9999 : Number(stock),
        status,
        categoryId,
        tagIds,
        // keep `imageUrl` for backward compatibility (first image)
        imageUrl: imageUrls[0] || undefined,
        // send full list as `images` — backend may ignore unknown fields but it's useful
        images: imageUrls.length ? imageUrls : undefined,
      });
      setSuccess(status === "PUBLISHED" ? "Product published." : "Saved as draft.");
      resetForm();
    } catch {
      setError("Failed to save product.");
    }
  }

  /**
   * Validate form fields and populate `fieldErrors`.
   * Returns `true` when the form is valid.
   */
  function validate(): boolean {
    const next: Record<string, string> = {};
    if (!name || !name.trim()) next.name = "Product name is required";
    const p = Number(price);
    if (Number.isNaN(p) || p < 0) next.price = "Price must be a non-negative number";
    if (!unlimited) {
      const s = Number(stock);
      if (stock === "" || Number.isNaN(s) || s < 0)
        next.stock = "Stock must be a non-negative number";
    }
    if (!categoryId) next.categoryId = "Please select a category";
    // validate all existing image URLs in the list
    if (imageUrls.length) {
      for (let i = 0; i < imageUrls.length; i++) {
        const u = imageUrls[i];
        try {
          new URL(u);
        } catch {
          try {
            if (typeof window !== "undefined") {
              // will throw if still invalid
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const _ = new URL(u, window.location.href);
            }
          } catch {
            next.imageUrl = `Image URL #${i + 1} is invalid`;
            break;
          }
        }
      }
    }
    setFieldErrors(next);
    return Object.keys(next).length === 0;
  }

  return (
    <div className="flex flex-1 flex-col gap-5">
      {/* Sub-header */}
      <div className="flex items-center gap-4 ">
        <span
          className=" font-bold text-[#023337] mr-auto "
          style={{
            fontWeight: 700,
            fontStyle: "Bold",
            fontSize: "22px",
          }}
        >
          Add New Product
        </span>
        <div className="w-[300px] flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 ">
          <Image src="./search.svg" width={16} height={16} alt="" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search product for add"
            className="flex-1 bg-transparent text-sm text-[#23272E] placeholder-[#8a94a4] outline-none"
          />
        </div>
        <Button
          variant="primary"
          onClick={() => submit("PUBLISHED")}
          disabled={saving || loadingMeta}
        >
          Publish Product
        </Button>
        <Button
          variant="secondary"
          onClick={() => submit("DRAFT")}
          disabled={saving || loadingMeta}
          className="gap-2"
        >
          <Image src="./save.svg" width={16} height={16} alt="" className="opacity-60" />
          Save to draft
        </Button>
        <button className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-[#023337] hover:">
          +
        </button>
      </div>

      {(error || success) && (
        <div
          className={`rounded-lg px-4 py-3 text-sm ${error ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}`}
        >
          {error || success}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_300px]">
        {/* Left panel */}
        <div className="flex flex-col gap-5">
          {/* Basic Details */}
          <div className="rounded-lg bg-white p-6 shadow-[0_1px_3px_#00000033]">
            <h3 className="mb-5 text-lg font-bold text-[#23272E]">Basic Details</h3>
            <div className="mb-4 space-y-2">
              <label className="text-sm font-bold text-[#023337]">Product Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="iPhone 15"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm"
              />
              {fieldErrors.name && <span className="text-xs text-red-600">{fieldErrors.name}</span>}
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#023337]">Product Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm"
              />
            </div>
          </div>

          {/* Pricing */}
          <div className="rounded-lg bg-white p-6 shadow-[0_1px_3px_#00000033]">
            <h3 className="mb-5 text-lg font-bold text-[#23272E]">Pricing</h3>
            <div className="mb-4 space-y-2">
              <label className="text-sm font-bold text-[#023337]">Product Price</label>
              <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3">
                <span className="text-sm text-gray-500">$</span>
                <input
                  type="number"
                  step="0.01"
                  min={0}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="flex-1 bg-transparent py-2.5 text-sm outline-none"
                />
                {fieldErrors.price && (
                  <span className="text-xs text-red-600">{fieldErrors.price}</span>
                )}
                <span className="flex items-center gap-1 text-xs text-gray-400">🇺🇸 USD ▾</span>
              </div>
            </div>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#023337]">
                  Discounted Price <span className="font-normal text-gray-400">(Optional)</span>
                </label>
                <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3">
                  <span className="text-sm text-gray-500">$</span>
                  <input
                    type="number"
                    step="0.01"
                    min={0}
                    value={compareAt}
                    onChange={(e) => setCompareAt(e.target.value)}
                    className="flex-1 bg-transparent py-2.5 text-sm outline-none"
                  />
                </div>
                {Number(compareAt) > 0 && (
                  <span className="text-xs text-gray-400">Sale= ${salePrice.toFixed(2)}</span>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#023337]">Tax Included</label>
                <div className="flex flex-col gap-2 pt-1">
                  <div className="flex items-center ">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 "
                      checked={taxIncluded}
                      onChange={() => setTaxIncluded(true)}
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="select-none ms-2 text-sm font-medium text-[#023337]"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="default-radio-2"
                      className="w-4 h-4 "
                      type="radio"
                      value=""
                      name="default-radio"
                      checked={!taxIncluded}
                      onChange={() => setTaxIncluded(false)}
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="select-none ms-2 text-sm font-medium text-[#023337]"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#023337]">Expiration</label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm"
                  placeholder="Start"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#023337] opacity-0">End</label>
                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm"
                  placeholder="End"
                />
              </div>
            </div>

            <h3 className="mb-5 text-lg font-bold text-[#23272E]">Inventory</h3>
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#023337]">Stock Quantity</label>
                <input
                  type="number"
                  min={0}
                  value={unlimited ? "" : stock}
                  onChange={(e) => setStock(e.target.value)}
                  disabled={unlimited}
                  placeholder={unlimited ? "Unlimited" : "0"}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm disabled:text-gray-400"
                />
                {fieldErrors.stock && (
                  <span className="text-xs text-red-600">{fieldErrors.stock}</span>
                )}
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#023337]">Stock Status</label>
                <select className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm">
                  <option>In Stock</option>
                  <option>Out of Stock</option>
                  <option>Pre-order</option>
                </select>
                {fieldErrors.categoryId && (
                  <span className="text-xs text-red-600">{fieldErrors.categoryId}</span>
                )}
              </div>
            </div>
            <div className="mb-3">
              <Toggle checked={unlimited} onChange={setUnlimited} label="Unlimited" />
            </div>
            <label className="flex items-center gap-2 text-sm text-[#023337]">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
              />
              Highlight this product in a featured section.
            </label>
            <div className="flex justify-end gap-3">
              <Button
                variant="secondary"
                onClick={() => submit("DRAFT")}
                disabled={saving || loadingMeta}
                className="gap-2"
              >
                <Image src="./save.svg" width={16} height={16} alt="" className="opacity-60" />
                Save to draft
              </Button>
              <Button
                variant="primary"
                onClick={() => submit("PUBLISHED")}
                disabled={saving || loadingMeta}
              >
                Publish Product
              </Button>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex flex-col gap-5">
          {/* Image upload */}
          <div className="rounded-lg bg-white p-5 shadow-[0_1px_3px_#00000033]">
            <h3 className="mb-4 text-lg font-bold text-[#23272E]">Upload Product Image</h3>
            <label className="mb-3 text-sm font-bold text-[#023337]">Product Image</label>
            <div className="mb-3 overflow-hidden rounded-xl border border-gray-200 relative h-44 w-full">
              {(() => {
                const main = imageUrls[0];
                const { src, useNextImage } = resolveImageSrc(main || "");
                return useNextImage ? (
                  <Image
                    src={src}
                    alt={main ? "Product preview" : "Placeholder image"}
                    fill
                    className="object-cover"
                    priority={false}
                  />
                ) : (
                  <img
                    src={src}
                    alt={main ? "Product preview" : "Placeholder image"}
                    className="h-full w-full object-cover"
                  />
                );
              })()}
            </div>
            <div className="mb-4 flex gap-2">
              <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 py-1.5 text-xs text-gray-600 hover:">
                📁 Browse
              </button>
              <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-gray-200 py-1.5 text-xs text-gray-600 hover:">
                🔄 Replace
              </button>
            </div>
            <div className="mb-2 space-y-2">
              <label className="text-xs text-gray-400">Image URL</label>
              <div className="flex gap-2">
                <input
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  placeholder="https://..."
                  className="flex-1 rounded-lg border border-gray-200  px-3 py-2 text-xs"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (!newImageUrl || !newImageUrl.trim()) return;
                    setImageUrls((prev) => [...prev, newImageUrl.trim()]);
                    setNewImageUrl("");
                  }}
                  className="px-3 py-2 rounded-lg bg-gray-100"
                >
                  Add
                </button>
              </div>
              {fieldErrors.imageUrl && (
                <span className="text-xs text-red-600">{fieldErrors.imageUrl}</span>
              )}
            </div>
            <div className="flex gap-2">
              {imageUrls.filter(Boolean).map((u, i) => {
                const placeholderSmall = "https://placehold.co/80x80.png?text=Img";
                const { src, useNextImage } = resolveImageSrc(u);
                return (
                  <div
                    key={i}
                    className="h-14 w-14 rounded-lg border border-gray-200 overflow-hidden relative"
                  >
                    {useNextImage ? (
                      <Image
                        src={src}
                        alt={`Image ${i + 1}`}
                        width={56}
                        height={56}
                        className="object-cover"
                      />
                    ) : (
                      <img
                        src={src}
                        alt={`Image ${i + 1}`}
                        width={56}
                        height={56}
                        className="object-cover"
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => setImageUrls((prev) => prev.filter((_, idx) => idx !== i))}
                      className="absolute top-0 right-0 bg-white rounded-bl px-1 text-xs"
                    >
                      ×
                    </button>
                  </div>
                );
              })}
              <button className="flex h-14 w-14 items-center justify-center rounded-lg border-2 border-dashed border-[#4EA674] text-[#4EA674] hover:bg-[#f0faf0]">
                +
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="rounded-lg bg-white p-5 shadow-[0_1px_3px_#00000033]">
            <h3 className="mb-4 text-lg font-bold text-[#23272E]">Categories</h3>
            <div className="mb-4 space-y-2">
              <label className="text-sm font-bold text-[#023337]">Product Categories</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                disabled={loadingMeta}
                className="w-full rounded-lg border border-gray-200  px-3 py-2.5 text-sm"
              >
                <option value="">Select your product</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4 space-y-2">
              <label className="text-sm font-bold text-[#023337]">Product Tag</label>
              <select
                disabled={loadingMeta}
                className="w-full rounded-lg border border-gray-200  px-3 py-2.5 text-sm"
                onChange={(e) => {
                  const id = e.target.value;
                  if (id) toggleTag(id);
                }}
              >
                <option value="">Select your product</option>
                {tags.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name}
                    {tagIds.includes(t.id) ? " ✓" : ""}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#023337]">Select your color</label>
              <div className="flex gap-2">
                {COLORS.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setSelectedColor(c)}
                    aria-pressed={selectedColor === c}
                    className={
                      `h-9 w-9 rounded-full transition-transform focus:outline-none focus:ring-2 focus:ring-[#023337] hover:scale-110 ` +
                      (selectedColor === c
                        ? "ring-2 ring-[#023337]"
                        : "border-2 border-transparent shadow-sm")
                    }
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
