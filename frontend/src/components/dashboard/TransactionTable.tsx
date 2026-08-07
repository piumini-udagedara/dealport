"use client";

import { Button } from "@/components/ui/Button";
import Image from "next/image";

const transactions = [
  { no: "1.", id: "#6545", date: "01 Oct | 11:29 am", status: "Paid", statusColor: "text-black", amount: "$64", dot: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/b7hpjjjb_expires_30_days.png" },
  { no: "2.", id: "#5412", date: "01 Oct | 11:29 am", status: "Pending", statusColor: "text-black", amount: "$557", dot: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/x4hxf9ve_expires_30_days.png" },
  { no: "3.", id: "#6622", date: "01 Oct | 11:29 am", status: "Paid", statusColor: "text-black", amount: "$156", dot: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/7kjvau84_expires_30_days.png" },
  { no: "4.", id: "#6462", date: "01 Oct | 11:29 am", status: "Paid", statusColor: "text-black", amount: "$265", dot: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/vjdo67cx_expires_30_days.png" },
  { no: "5.", id: "#6462", date: "01 Oct | 11:29 am", status: "Paid", statusColor: "text-black", amount: "$265", dot: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/2r92ueyo_expires_30_days.png" },
   { no: "6.", id: "#6545", date: "01 Oct | 11:29 am", status: "Paid", statusColor: "text-black", amount: "$64", dot: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/b7hpjjjb_expires_30_days.png" },
  { no: "7.", id: "#5412", date: "01 Oct | 11:29 am", status: "Pending", statusColor: "text-black", amount: "$55700000", dot: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/x4hxf9ve_expires_30_days.png" },
  { no: "8.", id: "#6622", date: "01 Oct | 11:29 am", status: "Paid", statusColor: "text-black", amount: "$156", dot: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/7kjvau84_expires_30_days.png" },
  
];

export function TransactionTable() {
  return (
    <div className="flex-1 bg-white py-5 rounded-lg" style={{ boxShadow: "0px 1px 3px #00000033" }}>
      {/* Header */}
      <div className="flex justify-between items-center self-stretch mb-7 mx-5">
        <span className="text-[#23272E] text-lg font-bold">Transaction</span>
        <Button variant="primary">
          <span className="text-white text-sm">Filter</span>
          <Image width={20} height={20} src="/sort.svg" className="w-5 h-5 rounded-lg object-fill" alt="" />
        </Button>
      </div>

      {/* Borderless table — fixed header, scrollable body */}
      <div className="mx-5">
        <table className="w-full text-sm text-left">
          <thead style={{ borderBottom: "1px solid #D1D1D1" }}>
            <tr className="text-[#7C7C7C] text-xs uppercase">
              <th className="px-6 py-3 font-medium">No</th>
              <th className="px-6 py-3 font-medium">Id Customer</th>
              <th className="px-6 py-3 font-medium">Order Date</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium">Amount</th>
            </tr>
          </thead>
        </table>
        <div style={{ height: "240px", overflowY: "auto" }}>
          <table className="w-full text-sm text-left">
            <tbody>
              {transactions.map((tx, i) => (
                <tr key={tx.id + i} className="bg-white hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3 text-[#6A717F]">{tx.no}</td>
                  <td className="px-6 py-3 font-medium text-[#023337]">{tx.id}</td>
                  <td className="px-6 py-3 text-[#6A717F]">{tx.date}</td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-1.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={tx.dot} className="w-2 h-2 object-fill" alt="" />
                      <span className={tx.status === "Pending" ? "text-amber-500" : "text-[#21C45D]"}>
                        {tx.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-3 font-semibold text-[#023337]">{tx.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col items-end self-stretch  px-5">
        <Button variant="outline">Details</Button>
      </div>
    </div>
  );
}
