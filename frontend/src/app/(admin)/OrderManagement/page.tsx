"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const OrderManagementPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const orders = [
    {
      id: 1,
      orderId: "#ORD0001",
      product: "Wireless Bluetooth Headphones",
      date: "01-01-2025",
      price: "49.99",
      payment: "Paid",
      status: "Delivered",
      image:
        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/xmxeorob_expires_30_days.png",
    },
    {
      id: 2,
      orderId: "#ORD0002",
      product: "Men's T-Shirt",
      date: "01-01-2025",
      price: "14.99",
      payment: "Unpaid",
      status: "Pending",
      image:
        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/1nug9uk5_expires_30_days.png",
    },
    {
      id: 3,
      orderId: "#ORD0003",
      product: "Men's Leather Wallet",
      date: "01-01-2025",
      price: "49.99",
      payment: "Paid",
      status: "Delivered",
      image:
        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/b8hxprgb_expires_30_days.png",
    },
    {
      id: 4,
      orderId: "#ORD0004",
      product: "Memory Foam Pillow",
      date: "01-01-2025",
      price: "39.99",
      payment: "Paid",
      status: "Shipped",
      image:
        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/9dgi48oc_expires_30_days.png",
    },
    {
      id: 5,
      orderId: "#ORD0005",
      product: "Coffee Maker",
      date: "01-01-2025",
      price: "79.99",
      payment: "Unpaid",
      status: "Cancelled",
      image:
        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/liwusf8r_expires_30_days.png",
    },
  ];

  const filteredOrders = orders.filter((o) => {
    if (activeTab === "all") return true;
    if (activeTab === "completed") return /deliv|shipp|complete/i.test(o.status);
    if (activeTab === "pending") return /pend/i.test(o.status);
    if (activeTab === "canceled") return /cancel/i.test(o.status);
    return true;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const pageCount = Math.max(1, Math.ceil(filteredOrders.length / pageSize));

  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const pageNumbers = (() => {
    const total = pageCount;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const delta = 2;
    let left = Math.max(1, currentPage - delta);
    let right = Math.min(total, currentPage + delta);
    if (currentPage - 1 <= delta) right = 1 + delta * 2;
    if (total - currentPage <= delta) left = total - delta * 2;
    const nums: (number | string)[] = [];
    if (left > 1) {
      nums.push(1);
      if (left > 2) nums.push("left-ellipsis");
    }
    for (let i = left; i <= right; i++) nums.push(i);
    if (right < total) {
      if (right < total - 1) nums.push("right-ellipsis");
      nums.push(total);
    }
    return nums;
  })();

  const tabs = [
    { key: "all", label: "All order", count: 240 },
    { key: "completed", label: "Completed" },
    { key: "pending", label: "Pending" },
    { key: "canceled", label: "Canceled" },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[980px] lg:min-w-0">
        <div className="flex-1">
          <div className="flex justify-between items-start self-stretch mb-6">
            <p className="text-[#023337] text-2xl font-bold" style={{ fontSize: 22 }}>
              Order List
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <Button variant="primary" onClick={() => alert("Pressed!")} size="medium">
                <Image src="/add-square-04.svg" width={20} height={20} alt="Add order" />
                <span className="text-white text-[15px] font-bold">Add Order</span>
              </Button>
              <button
                className="flex shrink-0 items-center bg-white text-left py-[8px] px-[22px] gap-[7px] rounded-lg border border-solid border-gray-200"
                onClick={() => alert("Pressed!")}
              >
                <span className="text-[#023337] text-[15px] font-bold">More Action</span>
                <Image src="./dotsHorizontal.svg" width={16} height={16} alt="More action" />
              </button>
            </div>
          </div>
          <div className="flex items-center self-stretch mb-5 gap-[15px]">
            <div
              className="flex flex-1 flex-col items-start bg-white py-[17px] pr-4 rounded-lg"
              style={{
                boxShadow: "0px 1px 3px #00000033",
              }}
            >
              <div className="flex justify-between items-center self-stretch mb-4 ml-4">
                <span className="text-[#23272E] text-lg font-bold">{"Total Orders"}</span>
                <Image src="./dotsHorizontal.svg" width={16} height={16} alt="More action" />
              </div>
              <div className="flex items-start mb-2 ml-4 gap-3">
                <span className="text-[#023337] text-[32px] font-bold">{"1,240"}</span>
                <div className="flex shrink-0 items-center mt-3.5">
                  <Image
                    src="./arrow-downward-rounded.svg"
                    width={16}
                    height={16}
                    alt="More action"
                  />

                  <span className="text-[#21C45D] text-sm">{"14.4%"}</span>
                </div>
              </div>
              <span className="text-[#6A717F] text-sm ml-4">{"Last 7 days"}</span>
            </div>
            <div
              className="flex flex-1 flex-col items-start bg-white py-[17px] pr-4 rounded-lg"
              style={{
                boxShadow: "0px 1px 3px #00000033",
              }}
            >
              <div className="flex justify-between items-center self-stretch mb-4 ml-4">
                <span className="text-[#23272E] text-lg font-bold">{"New Orders"}</span>
                <Image src="./dotsHorizontal.svg" width={16} height={16} alt="More action" />
              </div>
              <div className="flex items-start mb-2 ml-4 gap-[11px]">
                <span className="text-[#023337] text-[32px] font-bold">{"240"}</span>
                <div className="flex shrink-0 items-center mt-3.5">
                  <Image
                    src="./arrow-downward-rounded.svg"
                    width={16}
                    height={16}
                    alt="More action"
                  />
                  <span className="text-[#21C45D] text-sm">{"20%"}</span>
                </div>
              </div>
              <span className="text-[#6A717F] text-sm ml-4">{"Last 7 days"}</span>
            </div>
            <div
              className="flex flex-1 flex-col items-start bg-white py-[17px] pr-4 rounded-lg"
              style={{
                boxShadow: "0px 1px 3px #00000033",
              }}
            >
              <div className="flex justify-between items-center self-stretch mb-4 ml-4">
                <span className="text-[#23272E] text-lg font-bold">{"Completed Orders"}</span>
                <Image src="./dotsHorizontal.svg" width={16} height={16} alt="More action" />
              </div>
              <div className="flex items-start mb-2 ml-4 gap-[11px]">
                <span className="text-[#023337] text-[32px] font-bold">{"960"}</span>
                <span className="text-[#21C45D] text-sm mt-3.5">{"85%"}</span>
              </div>
              <span className="text-[#6A717F] text-sm ml-4">{"Last 7 days"}</span>
            </div>
            <div
              className="flex flex-1 flex-col items-start bg-white py-[17px] pr-4 rounded-lg"
              style={{
                boxShadow: "0px 1px 3px #00000033",
              }}
            >
              <div className="flex justify-between items-center self-stretch mb-4 ml-4">
                <span className="text-[#23272E] text-lg font-bold">{"Canceled Orders"}</span>
                <Image src="./dotsHorizontal.svg" width={16} height={16} alt="More action" />
              </div>
              <div className="flex items-start mb-2 ml-4 gap-3">
                <span className="text-[#023337] text-[32px] font-bold">{"87"}</span>
                <div className="flex shrink-0 items-center mt-3.5">
                  <Image
                    src="./arrow-upward-rounded.svg"
                    width={16}
                    height={16}
                    alt="More action"
                  />
                  <span className="text-[#EF4343] text-sm">{"5%"}</span>
                </div>
              </div>
              <span className="text-[#6A717F] text-sm ml-4">{"Last 7 days"}</span>
            </div>
          </div>
          <div
            className="self-stretch bg-white p-6 rounded-lg"
            style={{
              boxShadow: "0px 1px 3px #00000033",
            }}
          >
            <div className="flex justify-between items-center self-stretch mb-10">
              <div className="flex shrink-0 items-center bg-[#EAF8E7] rounded-lg px-2 py-2 gap-2">
                {tabs.map((tab) => {
                  const active = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveTab(tab.key)}
                      className={`flex shrink-0 items-center rounded-lg px-4 py-2 text-sm font-semibold transition ${
                        active
                          ? "bg-white text-[#023337] shadow"
                          : "bg-transparent text-[#6A717F] hover:bg-white/80"
                      }`}
                    >
                      <span>{tab.label}</span>
                      {tab.count !== undefined && (
                        <span className="ml-2 rounded-full bg-[#E6F7ED] px-2 py-0.5 text-xs font-semibold text-[#21C45D]">
                          {`(${tab.count})`}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <button
                  className="flex shrink-0 items-center bg-gray-50 text-left py-2 px-3 rounded-lg border-0"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#6A717F] text-sm mr-[102px]">Search order report</span>
                  <Image width={16} height={16} alt="" src="./search.svg" />
                </button>
                <div
                  className="w-10 h-10 flex items-center justify-center bg-gray-50"
                  style={{ border: "1px solid #D1D5DB" }}
                >
                  <Image width={16} height={16} alt="" src="./filter.svg" />
                </div>
                <div
                  className="w-10 h-10 flex items-center justify-center bg-gray-50"
                  style={{ border: "1px solid #D1D5DB" }}
                >
                  <Image width={16} height={16} alt="" src="./arrow-up-down-outline.svg" />
                </div>
                <div
                  className="w-10 h-10 flex items-center justify-center bg-gray-50"
                  style={{ border: "1px solid #D1D5DB" }}
                >
                  <Image width={16} height={16} alt="" src="./dots-Horizontal.svg" />
                </div>
              </div>
            </div>

            <div className="mb-[50px]">
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-[#EAF8E7]">
                      <th className="text-left py-3 px-4 text-sm text-[#023337]">No.</th>
                      <th className="text-left py-3 px-4 text-sm text-[#023337]">Order Id</th>
                      <th className="text-left py-3 px-4 text-sm text-[#023337]">Product</th>
                      <th className="text-left py-3 px-4 text-sm text-[#023337]">Date</th>
                      <th className="text-left py-3 px-4 text-sm text-[#023337]">Price</th>
                      <th className="text-left py-3 px-4 text-sm text-[#023337]">Payment</th>
                      <th className="text-left py-3 px-4 text-sm text-[#023337]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedOrders.map((o, idx) => (
                      <tr key={o.id} className="odd:bg-white even:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <div className="bg-white w-5 h-5 rounded border border-solid border-[#EAF8E7]"></div>
                            <span className="text-black text-[15px]">
                              {(currentPage - 1) * pageSize + idx + 1}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-black text-[15px]">{o.orderId}</span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <Image src={o.image} width={40} height={40} alt={o.product} />
                            <span className="text-black text-[15px] truncate w-48">
                              {o.product}
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-black text-[15px]">{o.date}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-black text-[15px]">{o.price}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-black text-[15px]">{o.payment}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`font-medium ${
                              /deliv|complete|shipp/i.test(o.status)
                                ? "text-[#21C45D]"
                                : /pend/i.test(o.status)
                                  ? "text-[#F59F0A]"
                                  : /cancel/i.test(o.status)
                                    ? "text-[#EF4343]"
                                    : "text-black"
                            }`}
                          >
                            {o.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-between items-center self-stretch mb-[47px]">
              <button
                className="flex shrink-0 items-center bg-white text-left py-[9px] px-2 gap-1 rounded-lg border-0"
                style={{ boxShadow: "0px 1px 3px #00000033" }}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <Image src="./arrow-left-sm.svg" width={24} height={24} alt="Previous" />
                <span className="text-black text-[15px]">Previous</span>
              </button>
              <div className="flex shrink-0 items-center gap-3">
                {pageNumbers.map((p) =>
                  typeof p === "number" ? (
                    <button
                      key={p}
                      className={`flex flex-col shrink-0 items-start py-[9px] px-[13px] rounded border ${
                        p === currentPage
                          ? "bg-[#C1E6BA] border-0"
                          : "bg-transparent border-gray-300"
                      }`}
                      onClick={() => setCurrentPage(p)}
                    >
                      <span className="text-[#023337] text-[15px] font-bold">{p}</span>
                    </button>
                  ) : (
                    <span key={p as string} className="text-[#023337] text-[15px]">
                      …
                    </span>
                  )
                )}
              </div>
              <button
                className="flex shrink-0 items-center bg-white text-left py-[9px] px-3 gap-[7px] rounded-lg border-0"
                style={{ boxShadow: "0px 1px 3px #00000033" }}
                onClick={() => setCurrentPage((p) => Math.min(pageCount, p + 1))}
                disabled={currentPage === pageCount}
              >
                <span className="text-black text-[15px]">Next</span>
                <Image
                  src="./arrow-right-sm.svg"
                  width={24}
                  height={24}
                  className="w-6 h-6 rounded-lg object-fill"
                  alt={""}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManagementPage;
