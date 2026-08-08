"use client";

import Image from "next/image";
import React from "react";

const TransactionPage = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;
  const totalTransactions = 10;
  const totalPages = Math.ceil(totalTransactions / pageSize);
  const isRowVisible = (rowIndex: number) => Math.floor(rowIndex / pageSize) + 1 === currentPage;

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[980px] lg:min-w-0">
        <div className="flex flex-1 flex-col gap-5">
          <div className="flex items-center self-stretch">
            <div className="flex flex-col w-[270px] mr-5 gap-[19px]">
              <div
                className="flex flex-col items-start self-stretch bg-white py-[17px] pr-4 rounded-lg"
                style={{
                  boxShadow: "0px 1px 3px #00000033",
                }}
              >
                <div className="flex justify-between items-center self-stretch mb-4 ml-4">
                  <span className="text-[#23272E] text-lg font-bold">{"Total Revenue"}</span>
                  <Image
                    height={20}
                    width={20}
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/rbsvaaq3_expires_30_days.png"
                    }
                    className="w-5 h-5 object-fill"
                  />
                </div>
                <div className="flex items-start mb-2 ml-4 gap-[11px]">
                  <span className="text-[#023337] text-[32px] font-bold">{"$15,045"}</span>
                  <div className="flex shrink-0 items-center mt-3.5">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/th4c2v01_expires_30_days.png"
                      }
                      className="w-4 h-4 object-fill"
                    />
                    <span className="text-[#21C45D] text-sm">{"14.4%"}</span>
                  </div>
                </div>
                <span className="text-[#6A717F] text-sm ml-4">{"Last 7 days"}</span>
              </div>
              <div
                className="flex flex-col items-start self-stretch bg-white py-[17px] pr-4 rounded-lg"
                style={{
                  boxShadow: "0px 1px 3px #00000033",
                }}
              >
                <div className="flex justify-between items-center self-stretch mb-4 ml-4">
                  <span className="text-[#23272E] text-lg font-bold">{"Pending Transactions"}</span>
                  <Image
                    alt=""
                    width={20}
                    height={20}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/4v4xneoo_expires_30_days.png"
                    }
                    className="w-5 h-5 object-fill"
                  />
                </div>
                <div className="flex items-start mb-2 ml-4 gap-3">
                  <span className="text-[#023337] text-[32px] font-bold">{"150"}</span>
                  <span className="text-[#21C45D] text-sm mt-3.5">{"85%"}</span>
                </div>
                <span className="text-[#6A717F] text-sm ml-4">{"Last 7 days"}</span>
              </div>
            </div>
            <div className="flex flex-col w-[270px] mr-[17px] gap-5">
              <div
                className="flex flex-col items-start self-stretch bg-white py-[17px] pr-4 rounded-lg"
                style={{
                  boxShadow: "0px 1px 3px #00000033",
                }}
              >
                <div className="flex items-center self-stretch mb-4 ml-4 gap-[21px]">
                  <span className="text-[#23272E] text-lg font-bold">
                    {"Completed Transactions"}
                  </span>
                  <Image
                    alt=""
                    width={20}
                    height={20}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/kyrb5jt7_expires_30_days.png"
                    }
                    className="w-5 h-5 object-fill"
                  />
                </div>
                <div className="flex items-start mb-2 ml-4 gap-[11px]">
                  <span className="text-[#023337] text-[32px] font-bold">{"3,150"}</span>
                  <div className="flex shrink-0 items-center mt-3.5">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/i3qj8gtt_expires_30_days.png"
                      }
                      className="w-4 h-4 object-fill"
                    />
                    <span className="text-[#21C45D] text-sm">{"20%"}</span>
                  </div>
                </div>
                <span className="text-[#6A717F] text-sm ml-4">{"Last 7 days"}</span>
              </div>
              <div
                className="flex flex-col items-start self-stretch bg-white py-[17px] pr-4 rounded-lg"
                style={{
                  boxShadow: "0px 1px 3px #00000033",
                }}
              >
                <div className="flex justify-between items-center self-stretch mb-4 ml-4">
                  <span className="text-[#23272E] text-lg font-bold">{"Failed Transactions"}</span>
                  <Image
                    alt=""
                    width={20}
                    height={20}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/kkc9gvhm_expires_30_days.png"
                    }
                    className="w-5 h-5 object-fill"
                  />
                </div>
                <div className="flex items-start mb-2 ml-4 gap-[13px]">
                  <span className="text-[#023337] text-[32px] font-bold">{"75"}</span>
                  <span className="text-[#EF4343] text-sm mt-3.5">{"15%"}</span>
                </div>
                <span className="text-[#6A717F] text-sm ml-4">{"Last 7 days"}</span>
              </div>
            </div>
            <div
              className="flex flex-1 flex-col items-start bg-white py-3.5 pr-4 rounded-lg"
              style={{
                boxShadow: "0px 1px 3px #00000033",
              }}
            >
              <div className="flex justify-between items-center self-stretch mb-5 ml-4">
                <span className="text-[#23272E] text-lg font-bold">{"Payment Method"}</span>
                <Image
                  alt=""
                  width={20}
                  height={20}
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/ysz0gefn_expires_30_days.png"
                  }
                  className="w-5 h-5 object-fill"
                />
              </div>
              <div className="flex items-start mb-3 ml-5 gap-4">
                <div className="flex flex-col shrink-0 items-center relative">
                  <Image
                    alt=""
                    width={110}
                    height={134}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/fag32uvr_expires_30_days.png"
                    }
                    className="w-[110px] h-[134px] absolute top-0 right-0 object-fill"
                  />
                  <Image
                    alt=""
                    width={260}
                    height={163}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/m7ebbpy6_expires_30_days.png"
                    }
                    className="w-[260px] h-[163px] object-fill"
                  />
                  <Image
                    alt=""
                    width={168}
                    height={77}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/zbrq917m_expires_30_days.png"
                    }
                    className="w-[168px] h-[77px] absolute bottom-0 left-[11px] object-fill"
                  />
                </div>
                <div className="flex flex-col shrink-0 items-start gap-3">
                  <span className="text-[#6A717F] text-[15px] mr-[39px]">{"Status: Active"}</span>
                  <span className="text-[#6A717F] text-[15px]">{"Transactions: 1,250"}</span>
                  <span className="text-[#6A717F] text-[15px]">{"Revenue: $50,000"}</span>
                  <span className="text-[#6467F2] text-[15px]">{"View Transactions"}</span>
                </div>
              </div>
              <div className="flex justify-between items-center self-stretch ml-5">
                <button
                  className="flex shrink-0 items-center bg-white text-left py-[7px] px-[85px] gap-1 rounded-lg border border-solid border-gray-300"
                  onClick={() => alert("Pressed!")}
                >
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/a04zixb3_expires_30_days.png"
                    }
                    className="w-6 h-6 rounded-lg object-fill"
                  />
                  <span className="text-gray-600 text-[15px]">{"Add Card"}</span>
                </button>
                <button
                  className="flex flex-col shrink-0 items-start bg-[#FEF1F1] text-left py-[11px] px-3 rounded-lg border border-solid border-[#FEC8C8]"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#EF4343] text-[15px]">{"Deactivate"}</span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col self-stretch bg-white py-6 gap-6 rounded-lg"
            style={{
              boxShadow: "0px 1px 3px #00000033",
            }}
          >
            <div className="flex justify-between items-center self-stretch mx-6">
              <div className="flex shrink-0 items-center bg-[#EAF8E7] p-1 gap-[30px] rounded-lg">
                <button
                  className="flex shrink-0 items-center bg-white text-left py-1.5 px-3 gap-[5px] rounded-md border-0"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-black text-[15px]">{"All order"}</span>
                  <span className="text-[#4EA674] text-sm font-bold">{"(240)"}</span>
                </button>
                <div className="flex flex-col shrink-0 items-start py-1.5 px-3">
                  <span className="text-gray-600 text-base">{"Completed"}</span>
                </div>
                <div className="flex flex-col shrink-0 items-start py-1.5 px-3">
                  <span className="text-gray-600 text-[15px]">{"Pending"}</span>
                </div>
                <div className="flex flex-col shrink-0 items-start py-1.5 px-3">
                  <span className="text-gray-600 text-[15px]">{"Canceled"}</span>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <button
                  className="flex shrink-0 items-center bg-gray-50 text-left py-2 px-3 rounded-lg border-0"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#6A717F] text-sm mr-[77px]">
                    {"Search payment history"}
                  </span>
                  <Image
                    alt=""
                    width={20}
                    height={20}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/hhdj426x_expires_30_days.png"
                    }
                    className="w-6 h-6 rounded-lg object-fill"
                  />
                </button>
                <Image
                  alt=""
                  width={40}
                  height={40}
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/0qtm8776_expires_30_days.png"
                  }
                  className="w-10 h-10 rounded object-fill"
                />
                <Image
                  alt=""
                  width={40}
                  height={40}
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/9hx6kc92_expires_30_days.png"
                  }
                  className="w-10 h-10 rounded object-fill"
                />
                <Image
                  alt=""
                  width={40}
                  height={40}
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/9lot1cs2_expires_30_days.png"
                  }
                  className="w-10 h-10 rounded object-fill"
                />
              </div>
            </div>
            <div className="self-stretch bg-white rounded-lg">
              <div className="flex items-center self-stretch bg-[#EAF8E7] p-2">
                <div className="flex flex-1 flex-col items-center py-[11px] mr-4">
                  <span className="text-[#023337] text-[15px]">{"Customer Id"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-[11px] mr-4">
                  <span className="text-[#023337] text-[15px]">{"Name"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-[11px] mr-[17px]">
                  <span className="text-[#023337] text-[15px]">{"Date"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-[11px] mr-4">
                  <span className="text-[#023337] text-[15px]">{"Total"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-[11px] mr-[17px]">
                  <span className="text-[#023337] text-[15px]">{"Method"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-[11px] mr-4">
                  <span className="text-[#023337] text-[15px]">{"Status"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-[11px]">
                  <span className="text-[#023337] text-[15px]">{"Action"}</span>
                </div>
              </div>
              <div className="flex items-center self-stretch py-3 px-2" style={{ display: isRowVisible(0) ? undefined : "none" }}>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"#CUST001"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"John Doe"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"01-01-2025"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"$2,904"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"CC"}</span>
                </div>
                <div className="flex flex-1 justify-end items-center p-2.5 mr-4">
                  <Image
                    width={8}
                    height={8}
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/6bdvoso9_expires_30_days.png"
                    }
                    className="w-2 h-2 mr-2 object-fill"
                  />
                  <span className="text-[#21C45D] text-[15px] mr-3.5">{"Complete"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5">
                  <span className="text-[#6467F2] text-[15px]">{"View Details"}</span>
                </div>
              </div>
              <div className="flex items-center self-stretch py-3 px-2" style={{ display: isRowVisible(1) ? undefined : "none" }}>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"#CUST001"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"John Doe"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"01-01-2025"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"$2,904"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"PayPal"}</span>
                </div>
                <div className="flex flex-1 justify-end items-center p-2.5 mr-4">
                  <Image
                    width={8}
                    height={8}
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/eexu940c_expires_30_days.png"
                    }
                    className="w-2 h-2 mr-2 object-fill"
                  />
                  <span className="text-[#21C45D] text-[15px] mr-3.5">{"Complete"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5">
                  <span className="text-[#6467F2] text-[15px]">{"View Details"}</span>
                </div>
              </div>
              <div className="flex items-center self-stretch py-3 px-2" style={{ display: isRowVisible(2) ? undefined : "none" }}>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"#CUST001"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"John Doe"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"01-01-2025"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"$2,904"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"CC"}</span>
                </div>
                <div className="flex flex-1 justify-end items-center p-2.5 mr-4">
                  <Image
                    width={8}
                    height={8}
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/hb0qpzcs_expires_30_days.png"
                    }
                    className="w-2 h-2 mr-2 object-fill"
                  />
                  <span className="text-[#21C45D] text-[15px] mr-3.5">{"Complete"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5">
                  <span className="text-[#6467F2] text-[15px]">{"View Details"}</span>
                </div>
              </div>
              <div className="flex items-center self-stretch py-3 px-2" style={{ display: isRowVisible(3) ? undefined : "none" }}>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"#CUST001"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"John Doe"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"01-01-2025"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"$2,904"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"Bank"}</span>
                </div>
                <div className="flex flex-1 justify-end items-center p-2.5 mr-4">
                  <Image
                    width={8}
                    height={8}
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/f1htolfl_expires_30_days.png"
                    }
                    className="w-2 h-2 mr-2 object-fill"
                  />
                  <span className="text-[#21C45D] text-[15px] mr-3.5">{"Complete"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5">
                  <span className="text-[#6467F2] text-[15px]">{"View Details"}</span>
                </div>
              </div>
              <div className="flex items-center self-stretch py-3 px-2" style={{ display: isRowVisible(4) ? undefined : "none" }}>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"#CUST001"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"Jane Smith"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"01-01-2025"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"$2,904"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"CC"}</span>
                </div>
                <div className="flex flex-1 justify-end items-center p-2.5 mr-4">
                  <Image
                    width={8}
                    height={8}
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/9kpxcu40_expires_30_days.png"
                    }
                    className="w-2 h-2 mr-2 object-fill"
                  />
                  <span className="text-[#EF4343] text-[15px] mr-[18px]">{"Canceled"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5">
                  <span className="text-[#6467F2] text-[15px]">{"View Details"}</span>
                </div>
              </div>
              <div className="flex items-center self-stretch py-3 px-2" style={{ display: isRowVisible(5) ? undefined : "none" }}>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"#CUST001"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"Emily Davis"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"01-01-2025"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"$2,904"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"PayPal"}</span>
                </div>
                <div className="flex flex-1 items-center p-2.5 mr-4">
                  <Image
                    width={8}
                    height={8}
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/c4jsjuw7_expires_30_days.png"
                    }
                    className="w-2 h-2 ml-[30px] mr-2 object-fill"
                  />
                  <span className="text-[#FBBD23] text-[15px]">{"Pending"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5">
                  <span className="text-[#6467F2] text-[15px]">{"View Details"}</span>
                </div>
              </div>
              <div className="flex items-center self-stretch py-3 px-2" style={{ display: isRowVisible(6) ? undefined : "none" }}>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"#CUST001"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"Jane Smith"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"01-01-2025"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"$2,904"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"Bank"}</span>
                </div>
                <div className="flex flex-1 justify-end items-center p-2.5 mr-4">
                  <Image
                    width={8}
                    height={8}
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/eskawlg4_expires_30_days.png"
                    }
                    className="w-2 h-2 mr-2 object-fill"
                  />
                  <span className="text-[#EF4343] text-[15px] mr-[18px]">{"Canceled"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5">
                  <span className="text-[#6467F2] text-[15px]">{"View Details"}</span>
                </div>
              </div>
              <div className="flex items-center self-stretch py-3 px-2" style={{ display: isRowVisible(7) ? undefined : "none" }}>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"#CUST001"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"John Doe"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"01-01-2025"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"$2,904"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"CC"}</span>
                </div>
                <div className="flex flex-1 justify-end items-center p-2.5 mr-4">
                  <Image
                    width={8}
                    height={8}
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/uwjxofl9_expires_30_days.png"
                    }
                    className="w-2 h-2 mr-2 object-fill"
                  />
                  <span className="text-[#21C45D] text-[15px] mr-3.5">{"Complete"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5">
                  <span className="text-[#6467F2] text-[15px]">{"View Details"}</span>
                </div>
              </div>
              <div className="flex items-center self-stretch py-3 px-2" style={{ display: isRowVisible(8) ? undefined : "none" }}>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"#CUST001"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"Emily Davis"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"01-01-2025"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"$2,904"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"PayPal"}</span>
                </div>
                <div className="flex flex-1 items-center p-2.5 mr-4">
                  <Image
                    width={8}
                    height={8}
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/aga43d17_expires_30_days.png"
                    }
                    className="w-2 h-2 ml-[30px] mr-2 object-fill"
                  />
                  <span className="text-[#FBBD23] text-[15px]">{"Pending"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5">
                  <span className="text-[#6467F2] text-[15px]">{"View Details"}</span>
                </div>
              </div>
              <div className="flex items-center self-stretch py-3 px-2" style={{ display: isRowVisible(9) ? undefined : "none" }}>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"#CUST001"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"Jane Smith"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"01-01-2025"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                  <span className="text-black text-[15px]">{"$2,904"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                  <span className="text-black text-[15px]">{"Bank"}</span>
                </div>
                <div className="flex flex-1 justify-end items-center p-2.5 mr-4">
                  <Image
                    width={8}
                    height={8}
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/zjja2h32_expires_30_days.png"
                    }
                    className="w-2 h-2 mr-2 object-fill"
                  />
                  <span className="text-[#EF4343] text-[15px] mr-[18px]">{"Canceled"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-2.5">
                  <span className="text-[#6467F2] text-[15px]">{"View Details"}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center self-stretch mx-6">
              <button
                className="flex shrink-0 items-center bg-white text-left py-[9px] px-2 gap-1 rounded-lg border-0"
                style={{
                  boxShadow: "0px 1px 3px #00000033",
                }}
                onClick={() => alert("Pressed!")}
              >
                <Image
                  width={24}
                  height={24}
                  alt=""
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/z1dehqv4_expires_30_days.png"
                  }
                  className="w-6 h-6 rounded-lg object-fill"
                />
                <span className="text-black text-[15px]">{"Previous"}</span>
              </button>
              <div className="flex shrink-0 items-center gap-3">
                <button
                  className="flex flex-col shrink-0 items-start bg-[#C1E6BA] text-left py-[9px] px-[13px] rounded border-0"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#023337] text-[15px] font-bold">{"1"}</span>
                </button>
                <button
                  className="flex flex-col shrink-0 items-start bg-transparent text-left py-[9px] px-[13px] rounded border border-solid border-gray-300"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#023337] text-[15px]">{"2"}</span>
                </button>
                <button
                  className="flex flex-col shrink-0 items-start bg-transparent text-left py-[9px] px-[13px] rounded border border-solid border-gray-300"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#023337] text-[15px]">{"3"}</span>
                </button>
                <button
                  className="flex flex-col shrink-0 items-start bg-transparent text-left py-[9px] px-[13px] rounded border border-solid border-gray-300"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#023337] text-[15px]">{"4"}</span>
                </button>
                <button
                  className="flex flex-col shrink-0 items-start bg-transparent text-left py-[9px] px-[13px] rounded border border-solid border-gray-300"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#023337] text-[15px]">{"5"}</span>
                </button>
                <button
                  className="flex flex-col shrink-0 items-start bg-transparent text-left p-[9px] rounded border border-solid border-gray-300"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#023337] text-[15px] font-bold">{"....."}</span>
                </button>
                <button
                  className="flex flex-col shrink-0 items-start bg-transparent text-left p-[9px] rounded border border-solid border-gray-300"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#023337] text-[15px]">{"24"}</span>
                </button>
              </div>
              <button
                className="flex shrink-0 items-center bg-white text-left py-[9px] px-3 gap-[7px] rounded-lg border-0"
                style={{
                  boxShadow: "0px 1px 3px #00000033",
                }}
                onClick={() => alert("Pressed!")}
              >
                <span className="text-black text-[15px]">{"Next"}</span>
                <Image
                  width={24}
                  height={24}
                  alt=""
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/upbkpx18_expires_30_days.png"
                  }
                  className="w-6 h-6 rounded-lg object-fill"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
