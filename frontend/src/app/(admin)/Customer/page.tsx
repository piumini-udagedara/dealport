"use client";

import React, { useState } from "react";
import Image from "next/image";

const CustomerPage = () => {
  const [input1, onChangeInput1] = useState("");
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[980px] lg:min-w-0">
        <div className="flex flex-1 flex-col gap-5 min-w-0">
          <div className="flex items-start self-stretch gap-5">
            <div className="flex flex-col w-[270px] gap-5">
              <div
                className="flex flex-col items-start self-stretch bg-white py-[17px] pr-4 rounded-lg"
                style={{
                  boxShadow: "0px 1px 3px #00000033",
                }}
              >
                <div className="flex justify-between items-center self-stretch mb-4 ml-4">
                  <span className="text-[#23272E] text-lg font-bold">{"Total Customers"}</span>
                  <Image
                    alt=""
                    width={20}
                    height={20}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/dtpzhske_expires_30_days.png"
                    }
                    className="w-5 h-5 object-fill"
                  />
                </div>
                <div className="flex items-start mb-2 ml-4 gap-3">
                  <span className="text-[#023337] text-[32px] font-bold">{"11,040"}</span>
                  <div className="flex shrink-0 items-center mt-3.5">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/dbrtjm49_expires_30_days.png"
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
                  <span className="text-[#23272E] text-lg font-bold">{"New Customers"}</span>
                  <Image
                    alt=""
                    width={20}
                    height={20}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/itce8ho6_expires_30_days.png"
                    }
                    className="w-5 h-5 object-fill"
                  />
                </div>
                <div className="flex items-start mb-2 ml-4 gap-[11px]">
                  <span className="text-[#023337] text-[32px] font-bold">{"2,370"}</span>
                  <div className="flex shrink-0 items-center mt-3.5">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/ve2i174n_expires_30_days.png"
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
                  <span className="text-[#23272E] text-lg font-bold">{"Visitor"}</span>
                  <Image
                    alt=""
                    width={20}
                    height={20}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/o86atfa6_expires_30_days.png"
                    }
                    className="w-5 h-5 object-fill"
                  />
                </div>
                <div className="flex items-start mb-2 ml-4 gap-2.5">
                  <span className="text-[#023337] text-[32px] font-bold">{"250k"}</span>
                  <div className="flex shrink-0 items-center mt-3.5">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/u5dtuo4r_expires_30_days.png"
                      }
                      className="w-4 h-4 object-fill"
                    />
                    <span className="text-[#21C45D] text-sm">{"20%"}</span>
                  </div>
                </div>
                <span className="text-[#6A717F] text-sm ml-4">{"Last 7 days"}</span>
              </div>
            </div>
            <div
              className="flex-1 bg-white pt-5 rounded-lg"
              style={{
                boxShadow: "0px 1px 3px #00000033",
              }}
            >
              <div className="flex items-center self-stretch mb-2 mx-5">
                <span className="text-[#23272E] text-lg font-bold">{"Customer Overview"}</span>
                <div className="flex-1 self-stretch"></div>
                <div className="flex shrink-0 items-center bg-[#EAF8E7] p-1 mr-2 gap-1 rounded-xl">
                  <button
                    className="flex flex-col shrink-0 items-start bg-white text-left py-2 px-3 rounded-lg border-0"
                    onClick={() => alert("Pressed!")}
                  >
                    <span className="text-[#4EA674] text-xs">{"This week"}</span>
                  </button>
                  <div className="flex flex-col shrink-0 items-start py-2 px-3 rounded-lg">
                    <span className="text-[#6A717F] text-xs">{"Last week"}</span>
                  </div>
                </div>
                <Image
                  alt=""
                  width={20}
                  height={20}
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/n0j5xvjl_expires_30_days.png"
                  }
                  className="w-5 h-5 object-fill"
                />
              </div>
              <div className="flex items-center self-stretch mb-[30px] mx-5">
                <div
                  className="flex flex-1 flex-col items-start py-[15px] mr-5 gap-2"
                  style={{
                    background: "linear-gradient(180deg, #4EA67400, #4EA67408)",
                  }}
                >
                  <span className="text-[#23272E] text-2xl font-bold ml-2">{"25k"}</span>
                  <span className="text-[#8A909A] text-[13px] ml-2">{"Active Customers"}</span>
                </div>
                <div className="flex flex-1 flex-col items-start py-[15px] mr-[21px] gap-2">
                  <span className="text-[#23272E] text-2xl font-bold ml-2">{"5.6k"}</span>
                  <span className="text-[#8A909A] text-[13px] ml-2">{"Repeat Customers"}</span>
                </div>
                <div className="flex flex-1 flex-col items-start py-[15px] pl-2 mr-5 gap-2">
                  <span className="text-[#23272E] text-2xl font-bold">{"250k"}</span>
                  <span className="text-[#8A909A] text-[13px]">{"Shop Visitor"}</span>
                </div>
                <div className="flex flex-1 flex-col items-start py-[15px] gap-2">
                  <span className="text-[#23272E] text-2xl font-bold ml-2">{"5.5%"}</span>
                  <span className="text-[#8A909A] text-[13px] ml-2">{"Conversion Rate"}</span>
                </div>
              </div>
              <div className="flex items-center self-stretch mb-5 ml-5 mr-12 gap-[30px]">
                <div className="flex flex-col shrink-0 items-center gap-4">
                  <span className="text-[#023337] text-sm">{"50k"}</span>
                  <span className="text-[#023337] text-sm">{"40k"}</span>
                  <span className="text-[#023337] text-sm">{"30k"}</span>
                  <span className="text-[#023337] text-sm">{"20k"}</span>
                  <span className="text-[#023337] text-sm">{"10k"}</span>
                  <span className="text-[#023337] text-sm">{"0k"}</span>
                </div>
                <div
                  className="flex flex-1 flex-col items-center bg-cover bg-center pt-2.5 rounded-lg"
                  style={{
                    backgroundImage:
                      "url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/517f0luf_expires_30_days.png)",
                  }}
                >
                  <div
                    className="flex flex-col items-start bg-cover bg-center py-[11px] px-[21px] mb-[123px]"
                    style={{
                      backgroundImage:
                        "url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/cb0h45vs_expires_30_days.png)",
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-[#023337] text-xs">{"Thursday"}</span>
                      <span className="text-[#023337] text-xs">{"25,409"}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center self-stretch mb-8 mx-[73px]">
                <span className="text-[#023337] text-xs">{"Sun"}</span>
                <span className="text-[#023337] text-xs">{"Mon"}</span>
                <span className="text-[#023337] text-xs">{"Tue"}</span>
                <span className="text-[#023337] text-xs font-bold">{"Wed"}</span>
                <span className="text-[#023337] text-xs">{"Thu"}</span>
                <span className="text-[#023337] text-xs">{"Fri"}</span>
                <span className="text-[#023337] text-xs">{"Sat"}</span>
              </div>
            </div>
          </div>
          <div className="flex items-start self-stretch gap-5">
            <div
              className="flex flex-1 flex-col bg-white pb-6 gap-6 rounded-lg min-w-0"
              style={{
                boxShadow: "0px 1px 3px #00000033",
              }}
            >
              <div className="self-stretch bg-white rounded-lg">
                <div className="flex items-center self-stretch bg-[#EAF8E7] p-2 rounded-md">
                  <div className="flex flex-1 flex-col items-center py-[11px] mr-4">
                    <span className="text-[#023337] text-[15px]">{"Customer Id"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px] mr-[17px]">
                    <span className="text-[#023337] text-[15px]">{"Name"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px] mr-[17px]">
                    <span className="text-[#023337] text-[15px]">{"Phone"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px] mr-[17px]">
                    <span className="text-[#023337] text-[15px]">{"Order Count"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px] mr-[17px]">
                    <span className="text-[#023337] text-[15px]">{"Total Spend"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px] mr-[17px]">
                    <span className="text-[#023337] text-[15px]">{"Status"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-[#023337] text-[15px]">{"Action"}</span>
                  </div>
                </div>
                <div className="flex items-center self-stretch py-3 px-2">
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                    <span className="text-black text-[15px]">{"#CUST001"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"John Doe"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"+1234567890"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"25"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"3,450.00"}</span>
                  </div>
                  <div className="flex flex-1 items-center p-2.5 mr-[17px]">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/odclt1t9_expires_30_days.png"
                      }
                      className="w-2 h-2 ml-[30px] mr-2 object-fill"
                    />
                    <span className="text-[#21C45D] text-[15px]">{"Active"}</span>
                  </div>
                  <div className="flex flex-1 justify-center items-center py-2.5 px-[47px] gap-2">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/l9567lmx_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/djcca4m7_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                  </div>
                </div>
                <div className="flex items-center self-stretch py-3 px-2">
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                    <span className="text-black text-[15px]">{"#CUST001"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"John Doe"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"+1234567890"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"25"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"3,450.00"}</span>
                  </div>
                  <div className="flex flex-1 items-center p-2.5 mr-[17px]">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/nbud9geu_expires_30_days.png"
                      }
                      className="w-2 h-2 ml-[30px] mr-2 object-fill"
                    />
                    <span className="text-[#21C45D] text-[15px]">{"Active"}</span>
                  </div>
                  <div className="flex flex-1 justify-center items-center py-2.5 px-[47px] gap-2">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/ijqp875b_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/y4yhuxk7_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                  </div>
                </div>
                <div className="flex items-center self-stretch py-3 px-2">
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                    <span className="text-black text-[15px]">{"#CUST001"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"John Doe"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"+1234567890"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"25"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"3,450.00"}</span>
                  </div>
                  <div className="flex flex-1 items-center p-2.5 mr-[17px]">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/00d1z0ol_expires_30_days.png"
                      }
                      className="w-2 h-2 ml-[30px] mr-2 object-fill"
                    />
                    <span className="text-[#21C45D] text-[15px]">{"Active"}</span>
                  </div>
                  <div className="flex flex-1 justify-center items-center py-2.5 px-[47px] gap-2">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/8oh6briq_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/6qlm2z3d_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                  </div>
                </div>
                <div className="flex items-center self-stretch py-3 px-2">
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                    <span className="text-black text-[15px]">{"#CUST001"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"John Doe"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"+1234567890"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"25"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"3,450.00"}</span>
                  </div>
                  <div className="flex flex-1 items-center p-2.5 mr-[17px]">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/yupkwi1k_expires_30_days.png"
                      }
                      className="w-2 h-2 ml-[30px] mr-2 object-fill"
                    />
                    <span className="text-[#21C45D] text-[15px]">{"Active"}</span>
                  </div>
                  <div className="flex flex-1 justify-center items-center py-2.5 px-[47px] gap-2">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/yn90fysa_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/vbikgnb9_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                  </div>
                </div>
                <div className="flex items-center self-stretch py-3 px-2">
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                    <span className="text-black text-[15px]">{"#CUST001"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"Jane Smith"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"+1234567890"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"5"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"250.00"}</span>
                  </div>
                  <div className="flex flex-1 items-center p-2.5 mr-[17px]">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/uc2kn76x_expires_30_days.png"
                      }
                      className="w-2 h-2 ml-[30px] mr-2 object-fill"
                    />
                    <span className="text-[#EF4343] text-[15px]">{"Inactive"}</span>
                  </div>
                  <div className="flex flex-1 justify-center items-center py-2.5 px-[47px] gap-2">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/ao38zwfl_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/j0wp9muz_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                  </div>
                </div>
                <div className="flex items-center self-stretch py-3 px-2">
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                    <span className="text-black text-[15px]">{"#CUST001"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"Emily Davis"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"+1234567890"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"30"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"4,600.00"}</span>
                  </div>
                  <div className="flex flex-1 items-center p-2.5 mr-[17px]">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/5p5za4lu_expires_30_days.png"
                      }
                      className="w-2 h-2 ml-[30px] mr-2 object-fill"
                    />
                    <span className="text-[#FBBD23] text-[15px]">{"VIP"}</span>
                  </div>
                  <div className="flex flex-1 justify-center items-center py-2.5 px-[47px] gap-2">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/hcy1waic_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/mlmnxljw_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                  </div>
                </div>
                <div className="flex items-center self-stretch py-3 px-2">
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                    <span className="text-black text-[15px]">{"#CUST001"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"Jane Smith"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"+1234567890"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"5"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"250.00"}</span>
                  </div>
                  <div className="flex flex-1 items-center p-2.5 mr-[17px]">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/9op1dq0s_expires_30_days.png"
                      }
                      className="w-2 h-2 ml-[30px] mr-2 object-fill"
                    />
                    <span className="text-[#EF4343] text-[15px]">{"Inactive"}</span>
                  </div>
                  <div className="flex flex-1 justify-center items-center py-2.5 px-[47px] gap-2">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/puw1zj7u_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/bo0xttit_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                  </div>
                </div>
                <div className="flex items-center self-stretch py-3 px-2">
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                    <span className="text-black text-[15px]">{"#CUST001"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"John Doe"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"+1234567890"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"25"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"3,450.00"}</span>
                  </div>
                  <div className="flex flex-1 items-center p-2.5 mr-[17px]">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/z97k43d4_expires_30_days.png"
                      }
                      className="w-2 h-2 ml-[30px] mr-2 object-fill"
                    />
                    <span className="text-[#21C45D] text-[15px]">{"Active"}</span>
                  </div>
                  <div className="flex flex-1 justify-center items-center py-2.5 px-[47px] gap-2">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/7svp3r3k_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/lm5gdc0o_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                  </div>
                </div>
                <div className="flex items-center self-stretch py-3 px-2">
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                    <span className="text-black text-[15px]">{"#CUST001"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"Emily Davis"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"+1234567890"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"30"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"4,600.00"}</span>
                  </div>
                  <div className="flex flex-1 items-center p-2.5 mr-[17px]">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/pi1mcngd_expires_30_days.png"
                      }
                      className="w-2 h-2 ml-[30px] mr-2 object-fill"
                    />
                    <span className="text-[#FBBD23] text-[15px]">{"VIP"}</span>
                  </div>
                  <div className="flex flex-1 justify-center items-center py-2.5 px-[47px] gap-2">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/7qzn0ne1_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/792rfg73_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                  </div>
                </div>
                <div className="flex items-center self-stretch py-3 px-2">
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-4">
                    <span className="text-black text-[15px]">{"#CUST001"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"Jane Smith"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"+1234567890"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"5"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center p-2.5 mr-[17px]">
                    <span className="text-black text-[15px]">{"250.00"}</span>
                  </div>
                  <div className="flex flex-1 items-center p-2.5 mr-[17px]">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/qadfudnp_expires_30_days.png"
                      }
                      className="w-2 h-2 ml-[30px] mr-2 object-fill"
                    />
                    <span className="text-[#EF4343] text-[15px]">{"Inactive"}</span>
                  </div>
                  <div className="flex flex-1 justify-center items-center py-2.5 px-[47px] gap-2">
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/q52126ro_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                    <Image
                      alt=""
                      width={20}
                      height={20}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/0e4q6agd_expires_30_days.png"
                      }
                      className="w-5 h-5 object-fill"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center self-stretch mx-[22px]">
                <button
                  className="flex shrink-0 items-center bg-white text-left py-[9px] px-2 gap-1 rounded-lg border-0"
                  style={{
                    boxShadow: "0px 1px 3px #00000033",
                  }}
                  onClick={() => alert("Pressed!")}
                >
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/kkprz1se_expires_30_days.png"
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
                    alt=""
                    width={24}
                    height={24}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/w7ndqyn6_expires_30_days.png"
                    }
                    className="w-6 h-6 rounded-lg object-fill"
                  />
                </button>
              </div>
            </div>
            <div
              className="flex flex-col items-start bg-white w-[306px] shrink-0 p-5 rounded-lg"
              style={{
                boxShadow: "0px 1px 3px #00000033",
              }}
            >
              <div className="flex items-center self-stretch mb-6 gap-3">
                <Image
                  alt=""
                  width={64}
                  height={64}
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/8x5uzm5r_expires_30_days.png"
                  }
                  className="w-16 h-16 rounded-[7600px] object-fill"
                />
                <div className="flex flex-1 flex-col items-start gap-[3px]">
                  <span className="text-[#023337] text-lg font-bold">{"John Doe"}</span>
                  <div className="flex justify-between items-center self-stretch">
                    <span className="text-[#6A717F] text-sm">{"john.doe@example.com"}</span>
                    <Image
                      alt=""
                      width={16}
                      height={16}
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/g8y13fhy_expires_30_days.png"
                      }
                      className="w-4 h-4 object-fill"
                    />
                  </div>
                </div>
              </div>
              <span className="text-gray-400 text-sm mb-3">{"Customer Info"}</span>
              <div className="flex flex-col self-stretch mb-6 gap-3">
                <div className="flex items-center self-stretch bg-white px-2 rounded border border-solid border-gray-200">
                  <Image
                    alt=""
                    width={20}
                    height={20}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/6sx4hiyv_expires_30_days.png"
                    }
                    className="w-5 h-5 mr-1 object-fill"
                  />
                  <input
                    placeholder={"+1234567890"}
                    value={input1}
                    onChange={(event) => onChangeInput1(event.target.value)}
                    className="flex-1 self-stretch text-[#6A717F] bg-transparent text-sm py-[11px] mr-1 border-0"
                  />
                </div>
                <div className="flex items-center self-stretch bg-white py-2.5 pl-2 gap-1 rounded border border-solid border-gray-200">
                  <Image
                    alt=""
                    width={20}
                    height={20}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/glu1c380_expires_30_days.png"
                    }
                    className="w-5 h-5 object-fill"
                  />
                  <span className="text-[#6A717F] text-sm">{"123 Main St, NY"}</span>
                </div>
              </div>
              <div className="flex flex-col items-start w-[168px] mb-6 gap-3">
                <span className="text-gray-400 text-sm">{"Social Media"}</span>
                <div className="flex justify-center items-center self-stretch gap-3">
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/zxxp476t_expires_30_days.png"
                    }
                    className="w-6 h-6 rounded object-fill"
                  />
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/jsm1k8ex_expires_30_days.png"
                    }
                    className="w-6 h-6 rounded object-fill"
                  />
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/a9zfpp3b_expires_30_days.png"
                    }
                    className="w-6 h-6 rounded object-fill"
                  />
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/o7gnxm6d_expires_30_days.png"
                    }
                    className="w-6 h-6 rounded object-fill"
                  />
                  <Image
                    alt=""
                    width={24}
                    height={24}
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/kiysm6ys_expires_30_days.png"
                    }
                    className="w-6 h-6 rounded object-fill"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start mb-6 gap-3">
                <span className="text-gray-400 text-sm mr-[113px]">{"Activity"}</span>
                <span className="text-gray-600 text-sm">{"Registration: 15.01.2025"}</span>
                <span className="text-gray-600 text-sm">{"Last purchase: 10.01.2025"}</span>
              </div>
              <div className="flex flex-col items-start self-stretch gap-3">
                <span className="text-gray-400 text-sm">{"Order overview"}</span>
                <div className="flex justify-center items-center self-stretch gap-2.5">
                  <button
                    className="flex flex-col shrink-0 items-center bg-transparent text-left py-[11px] px-2 gap-3 rounded border border-solid border-gray-300"
                    onClick={() => alert("Pressed!")}
                  >
                    <span className="text-[#023337] text-lg font-bold">{"150"}</span>
                    <span className="text-[#6467F2] text-sm">{"Total order"}</span>
                  </button>
                  <button
                    className="flex flex-col shrink-0 items-center bg-transparent text-left py-[11px] px-[7px] gap-3 rounded border border-solid border-gray-300"
                    onClick={() => alert("Pressed!")}
                  >
                    <span className="text-[#023337] text-lg font-bold">{"140"}</span>
                    <span className="text-[#21C45D] text-sm">{"Completed"}</span>
                  </button>
                  <button
                    className="flex flex-col shrink-0 items-center bg-transparent text-left py-[11px] px-[13px] gap-3 rounded border border-solid border-gray-300"
                    onClick={() => alert("Pressed!")}
                  >
                    <span className="text-[#023337] text-lg font-bold">{"10"}</span>
                    <span className="text-[#EF4343] text-sm">{"Canceled"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
