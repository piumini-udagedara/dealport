"use client";

import Image from "next/image";

const categories = [
  {
    img: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/k7zb8nag_expires_30_days.png",
    label: "Electronic",
  },
  {
    img: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/17zxpqsg_expires_30_days.png",
    label: "Fashion",
  },
  {
    img: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/821rwji4_expires_30_days.png",
    label: "Home",
  },
];

const quickAddProducts = [
  {
    img: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/c3wjlv6c_expires_30_days.png",
    name: "Smart Fitness Tracker",
    price: "$39.99",
  },
  {
    img: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/pwaahxvo_expires_30_days.png",
    name: "Leather Wallet",
    price: "$19.99",
  },
  {
    img: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/x6ep7qix_expires_30_days.png",
    name: "Electric Hair Trimmer",
    price: "$34.99",
  },
];

export function AddNewProduct() {
  return (
    <div
      className="flex flex-col items-start bg-white w-[361px] py-5 rounded-lg"
      style={{ boxShadow: "0px 1px 3px #00000033" }}
    >
      {/* Header */}
      <div className="flex justify-between items-center self-stretch mb-2 mx-5">
        <span className="text-[#23272E] text-lg font-bold">Add New Product</span>
        <div className="flex shrink-0 items-center gap-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            width={20}
            height={20}
            src="./add-square.svg"
            className="w-5 h-5 object-fill"
            alt=""
          />
          <span className="text-[#6467F2] text-sm">Add New</span>
        </div>
      </div>

      {/* Categories */}
      <span className="text-[#6A717F] text-sm mb-4 ml-5">Categories</span>
      {categories.map((c) => (
        <button
          key={c.label}
          className="flex items-center bg-white text-left p-1.5 mb-3 ml-5 rounded-md border-0 w-[89%]"
          style={{ boxShadow: "0px 1px 3px #00000033" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={c.img} className="w-[46px] h-[46px] mr-3 rounded object-fill" alt={c.label} />
          <span className="text-black text-lg flex-1 text-left">{c.label}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            width={20}
            height={20}
            src="./chevron-right.svg"
            className="w-5 h-5 rounded-md object-fill"
            alt=""
          />
        </button>
      ))}
      <div className="flex flex-col items-center self-stretch mb-3">
        <span className="text-[#6467F2] text-sm">See more</span>
      </div>

      {/* Quick-add products */}
      <span className="text-[#6A717F] text-sm mb-4 ml-5">Product</span>
      <div className="flex flex-col items-start self-stretch mb-3 mx-5 gap-3">
        {quickAddProducts.map((p) => (
          <div
            key={p.name}
            className="flex flex-col self-stretch gap-3"
            style={{ borderBottom: "1px solid #E5E7EB", paddingBottom: "12px" }}
          >
            <div className="flex justify-between items-center self-stretch">
              <div className="flex shrink-0 items-center gap-3">
                <img src={p.img} className="w-[46px] h-[46px] rounded object-fill" alt={p.name} />
                <div className="flex flex-col shrink-0 items-start gap-1.5">
                  <span className="text-black text-sm">{p.name}</span>
                  <span className="text-[#4EA674] text-sm font-bold">{p.price}</span>
                </div>
              </div>
              <button className="flex shrink-0 items-center bg-[#4EA674] text-left py-1.5 px-2 gap-1 rounded-[50px] border-0">
                <Image
                  width={16}
                  height={16}
                  src="./add-square-04.svg"
                  className="w-4 h-4 rounded-[50px] object-fill"
                  alt=""
                />
                <span className="text-white text-xs">Add</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center self-stretch">
        <span className="text-[#6467F2] text-sm">See more</span>
      </div>
    </div>
  );
}
