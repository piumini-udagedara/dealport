/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const CategoriesPage = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pageSize = 5;
  const totalProducts = 10;
  const totalPages = Math.ceil(totalProducts / pageSize);
  const isRowVisible = (rowIndex: number) => Math.floor(rowIndex / pageSize) + 1 === currentPage;

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[980px] lg:min-w-0">
        <div className="flex-1">
          <div className="flex justify-between items-start self-stretch mb-8">
            <h1 className="text-[#023337] text-2xl font-bold">Discover</h1>
            <div className="flex shrink-0 items-center gap-3">
              <Button variant="primary" onClick={() => alert("Pressed!")}>
                <Image
                  width={24}
                  height={24}
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/b9cigcxz_expires_30_days.png"
                  }
                  className="w-6 h-6 rounded-lg object-fill"
                  alt={""}
                />
                <span className="text-white text-[15px] font-bold">{"Add Product"}</span>
              </Button>
              <button
                className="flex shrink-0 items-center bg-white text-left py-[15px] px-[22px] gap-[7px] rounded-lg border border-solid border-gray-200"
                onClick={() => alert("Pressed!")}
              >
                <span className="text-[#023337] text-[15px] font-bold">{"More Action"}</span>
                <img
                  alt=""
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/jvg3ruu4_expires_30_days.png"
                  }
                  className="w-4 h-4 rounded-lg object-fill"
                />
              </button>
            </div>
          </div>
          <div className="flex items-center self-stretch mb-[43px] gap-9">
            <div className="flex flex-1 flex-col gap-5">
              <div className="flex items-center self-stretch gap-5">
                <div
                  className="flex flex-1 items-center bg-white py-3 rounded-md"
                  style={{
                    boxShadow: "0px 1px 3px #00000033",
                  }}
                >
                  <img
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/8hx3zmq0_expires_30_days.png"
                    }
                    className="w-16 h-16 mx-3 rounded object-fill"
                  />
                  <div className="flex flex-col shrink-0 items-center py-1">
                    <span className="text-black text-lg">{"Electronics"}</span>
                  </div>
                </div>
                <div
                  className="flex flex-1 items-center bg-white py-3 rounded-md"
                  style={{
                    boxShadow: "0px 1px 3px #00000033",
                  }}
                >
                  <img
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/zr5spjgr_expires_30_days.png"
                    }
                    className="w-16 h-16 mx-3 rounded object-fill"
                  />
                  <div className="flex flex-col shrink-0 items-start py-1 pr-[30px]">
                    <span className="text-black text-lg">{"Fashion"}</span>
                  </div>
                </div>
                <div
                  className="flex flex-1 items-center bg-white py-3 rounded-md"
                  style={{
                    boxShadow: "0px 1px 3px #00000033",
                  }}
                >
                  <img
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/6h5z6i9s_expires_30_days.png"
                    }
                    className="w-16 h-16 mx-3 rounded object-fill"
                  />
                  <div className="flex flex-col shrink-0 items-center py-1">
                    <span className="text-black text-lg">{"Accessories"}</span>
                  </div>
                </div>
                <div
                  className="flex flex-1 items-center bg-white p-3 gap-3 rounded-md"
                  style={{
                    boxShadow: "0px 1px 3px #00000033",
                  }}
                >
                  <img
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/kn13mwd0_expires_30_days.png"
                    }
                    className="w-16 h-16 rounded object-fill"
                  />
                  <div className="flex flex-1 flex-col items-start py-1">
                    <span className="text-black text-lg">{"Home & Kitchen"}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center self-stretch gap-5">
                <div
                  className="flex flex-1 items-center bg-white py-3 rounded-md"
                  style={{
                    boxShadow: "0px 1px 3px #00000033",
                  }}
                >
                  <img
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/6c5ggqv2_expires_30_days.png"
                    }
                    className="w-16 h-16 mx-3 rounded object-fill"
                  />
                  <div className="flex flex-col shrink-0 items-start py-1 pr-[13px]">
                    <span className="text-black text-lg w-[75px]">{"Sports & Outdoors"}</span>
                  </div>
                </div>
                <div
                  className="flex flex-1 items-center bg-white py-3 rounded-md"
                  style={{
                    boxShadow: "0px 1px 3px #00000033",
                  }}
                >
                  <img
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/xoylihjw_expires_30_days.png"
                    }
                    className="w-16 h-16 mx-3 rounded object-fill"
                  />
                  <div className="flex flex-col shrink-0 items-center py-1">
                    <span className="text-black text-lg">{"Toys & Games"}</span>
                  </div>
                </div>
                <div
                  className="flex flex-1 items-center bg-white p-3 gap-3 rounded-md"
                  style={{
                    boxShadow: "0px 1px 3px #00000033",
                  }}
                >
                  <img
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/apqy4xpl_expires_30_days.png"
                    }
                    className="w-16 h-16 rounded object-fill"
                  />
                  <div className="flex flex-1 flex-col items-start py-1">
                    <span className="text-black text-lg">{"Health & Fitness"}</span>
                  </div>
                </div>
                <div
                  className="flex flex-1 items-center bg-white py-3 rounded-md"
                  style={{
                    boxShadow: "0px 1px 3px #00000033",
                  }}
                >
                  <img
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/i8froakb_expires_30_days.png"
                    }
                    className="w-16 h-16 mx-3 rounded object-fill"
                  />
                  <div className="flex flex-col shrink-0 items-center py-1">
                    <span className="text-black text-lg">{"Books"}</span>
                  </div>
                </div>
              </div>
            </div>
            <img
              alt=""
              src={
                "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/23226i34_expires_30_days.png"
              }
              className="w-12 h-12 rounded-[200px] object-fill"
            />
          </div>
          <div
            className="self-stretch bg-white pt-6 rounded-lg"
            style={{
              boxShadow: "0px 1px 3px #00000033",
            }}
          >
            <div className="flex justify-between items-center self-stretch mb-10 mx-6">
              <div className="flex shrink-0 items-center bg-[#EAF8E7] p-1 gap-4 rounded-lg">
                <button
                  className="flex shrink-0 items-center bg-white text-left py-1.5 px-3 gap-[5px] rounded-md border-0"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-black text-[15px]">{"All Product"}</span>
                  <span className="text-[#4EA674] text-sm font-bold">{"(145)"}</span>
                </button>
                <div className="flex flex-col shrink-0 items-start py-1.5 px-3">
                  <span className="text-gray-600 text-base">{"Featured Products"}</span>
                </div>
                <div className="flex flex-col shrink-0 items-start py-1.5 px-3">
                  <span className="text-gray-600 text-[15px]">{"On Sale"}</span>
                </div>
                <div className="flex flex-col shrink-0 items-start py-1.5 px-3">
                  <span className="text-gray-600 text-[15px]">{"Out of Stock"}</span>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <button
                  className="flex shrink-0 items-center bg-gray-50 text-left py-2 px-3 rounded-lg border-0"
                  onClick={() => alert("Pressed!")}
                >
                  <span className="text-[#6A717F] text-sm mr-[98px]">{"Search your product"}</span>
                  <img
                    alt=""
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/ium7i769_expires_30_days.png"
                    }
                    className="w-6 h-6 rounded-lg object-fill"
                  />
                </button>
                <img
                  alt=""
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/7p7t3uhk_expires_30_days.png"
                  }
                  className="w-10 h-10 rounded object-fill"
                />
                <img
                  alt=""
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/bxq4wi5w_expires_30_days.png"
                  }
                  className="w-11 h-11 rounded object-fill"
                />
                <img
                  alt=""
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/6nep72pj_expires_30_days.png"
                  }
                  className="w-10 h-10 rounded object-fill"
                />
              </div>
            </div>
            <div className="self-stretch mb-10 mx-[22px]">
              <div className="flex items-center self-stretch bg-[#EAF8E7] p-2 gap-4 rounded-md">
                <div className="flex flex-col shrink-0 items-start py-[11px] pl-2.5 pr-[33px]">
                  <span className="text-[#023337] text-[15px]">{"No."}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-[11px]">
                  <span className="text-[#023337] text-[15px]">{"Product"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-[11px]">
                  <span className="text-[#023337] text-[15px]">{"Created Date"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-[11px]">
                  <span className="text-[#023337] text-[15px]">{"Order"}</span>
                </div>
                <div className="flex flex-1 flex-col items-center py-[11px]">
                  <span className="text-[#023337] text-[15px]">{"Action"}</span>
                </div>
              </div>
              <div className="self-stretch">
                <div
                  className="flex items-center self-stretch py-3 px-2 gap-4"
                  style={{ display: isRowVisible(0) ? undefined : "none" }}
                >
                  <div className="flex shrink-0 items-center py-2.5 px-2 gap-2">
                    <div className="bg-white w-5 h-5 rounded border border-solid border-[#EAF8E7]"></div>
                    <span className="text-black text-[15px]">{"1"}</span>
                  </div>
                  <div className="flex flex-1 items-center px-[27px] gap-3">
                    <img
                      alt=""
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/cwx8r7ze_expires_30_days.png"
                      }
                      className="w-10 h-10 rounded object-fill"
                    />
                    <span className="flex-1 text-black text-[15px]">
                      {"Wireless Bluetooth Headphones"}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"01-01-2025"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"25"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5">
                    <div className="flex items-center gap-2">
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/hrjq6ty5_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/cqq3dhft_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center self-stretch py-3 px-2 gap-4"
                  style={{ display: isRowVisible(1) ? undefined : "none" }}
                >
                  <div className="flex shrink-0 items-center py-2.5 px-2 gap-2">
                    <div className="bg-white w-5 h-5 rounded border border-solid border-[#EAF8E7]"></div>
                    <span className="text-black text-[15px]">{"1"}</span>
                  </div>
                  <div className="flex flex-1 items-center px-[27px] gap-[11px]">
                    <img
                      alt=""
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/mhoze223_expires_30_days.png"
                      }
                      className="w-10 h-10 rounded object-fill"
                    />
                    <div className="flex flex-1 flex-col items-start py-3 pl-[1px]">
                      <span className="text-black text-[15px]">{"Men's T-Shirt"}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"01-01-2025"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"20"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5">
                    <div className="flex items-center gap-2">
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/1vjdm3ub_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/s55n3g68_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center self-stretch py-3 px-2 gap-4"
                  style={{ display: isRowVisible(2) ? undefined : "none" }}
                >
                  <div className="flex shrink-0 items-center py-2.5 px-2 gap-2">
                    <div className="bg-white w-5 h-5 rounded border border-solid border-[#EAF8E7]"></div>
                    <span className="text-black text-[15px]">{"1"}</span>
                  </div>
                  <div className="flex flex-1 items-center px-[15px]">
                    <img
                      alt=""
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/79qef2dy_expires_30_days.png"
                      }
                      className="w-10 h-10 mx-3 rounded object-fill"
                    />
                    <span className="text-black text-[15px] w-[92px]">
                      {"Men's Leather Wallet"}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"01-01-2025"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"35"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5">
                    <div className="flex items-center gap-2">
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/swlmaj6s_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/77bdhyo8_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center self-stretch py-3 px-2 gap-4"
                  style={{ display: isRowVisible(3) ? undefined : "none" }}
                >
                  <div className="flex shrink-0 items-center py-2.5 px-2 gap-2">
                    <div className="bg-white w-5 h-5 rounded border border-solid border-[#EAF8E7]"></div>
                    <span className="text-black text-[15px]">{"1"}</span>
                  </div>
                  <div className="flex flex-1 items-center px-[27px] gap-[11px]">
                    <img
                      alt=""
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/tzee4xjy_expires_30_days.png"
                      }
                      className="w-10 h-10 rounded object-fill"
                    />
                    <div className="flex flex-1 flex-col items-start py-[3px] pl-[1px]">
                      <span className="text-black text-[15px] w-[92px]">
                        {"Memory Foam Pillow"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"01-01-2025"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"40"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5">
                    <div className="flex items-center gap-2">
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/cmiotvul_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/k0p2phqk_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center self-stretch py-3 px-2 gap-4"
                  style={{ display: isRowVisible(4) ? undefined : "none" }}
                >
                  <div className="flex shrink-0 items-center py-2.5 px-2 gap-2">
                    <div className="bg-white w-5 h-5 rounded border border-solid border-[#EAF8E7]"></div>
                    <span className="text-black text-[15px]">{"1"}</span>
                  </div>
                  <div className="flex flex-1 items-center px-[15px]">
                    <img
                      alt=""
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/va8r3y6g_expires_30_days.png"
                      }
                      className="w-10 h-10 mx-3 rounded object-fill"
                    />
                    <span className="text-black text-[15px]">{"Coffee Maker"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"01-01-2025"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"45"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5">
                    <div className="flex items-center gap-2">
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/vw3kuen8_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/xf3wbct3_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center self-stretch py-3 px-2 gap-4"
                  style={{ display: isRowVisible(5) ? undefined : "none" }}
                >
                  <div className="flex shrink-0 items-center py-2.5 px-2 gap-2">
                    <div className="bg-white w-5 h-5 rounded border border-solid border-[#EAF8E7]"></div>
                    <span className="text-black text-[15px]">{"1"}</span>
                  </div>
                  <div className="flex flex-1 items-center px-[15px]">
                    <img
                      alt=""
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/9csf602y_expires_30_days.png"
                      }
                      className="w-10 h-10 mx-3 rounded object-fill"
                    />
                    <span className="text-black text-[15px] w-[99px]">{"Casual Baseball Cap"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"01-01-2025"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"55"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5">
                    <div className="flex items-center gap-2">
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/8vbc7hvw_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/7ich6i2z_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center self-stretch py-3 px-2 gap-4"
                  style={{ display: isRowVisible(6) ? undefined : "none" }}
                >
                  <div className="flex shrink-0 items-center py-2.5 px-2 gap-2">
                    <div className="bg-white w-5 h-5 rounded border border-solid border-[#EAF8E7]"></div>
                    <span className="text-black text-[15px]">{"1"}</span>
                  </div>
                  <div className="flex flex-1 items-center px-[15px]">
                    <img
                      alt=""
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/95javz8a_expires_30_days.png"
                      }
                      className="w-10 h-10 ml-3 mr-[13px] rounded object-fill"
                    />
                    <span className="text-black text-[15px]">{"Full HD Webcam"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"01-01-2025"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"20"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5">
                    <div className="flex items-center gap-2">
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/1ndiqop3_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/qg0avomh_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center self-stretch py-3 px-2 gap-4"
                  style={{ display: isRowVisible(7) ? undefined : "none" }}
                >
                  <div className="flex shrink-0 items-center py-2.5 px-2 gap-2">
                    <div className="bg-white w-5 h-5 rounded border border-solid border-[#EAF8E7]"></div>
                    <span className="text-black text-[15px]">{"1"}</span>
                  </div>
                  <div className="flex flex-1 items-center px-[27px] gap-3">
                    <img
                      alt=""
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/gu7uu579_expires_30_days.png"
                      }
                      className="w-10 h-10 rounded object-fill"
                    />
                    <span className="flex-1 text-black text-[15px]">{"Smart LED Color Bulb"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"01-01-2025"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"16"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5">
                    <div className="flex items-center gap-2">
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/30icptv8_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/cw8s4cpd_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center self-stretch py-3 px-2 gap-4"
                  style={{ display: isRowVisible(8) ? undefined : "none" }}
                >
                  <div className="flex shrink-0 items-center py-2.5 px-2 gap-2">
                    <div className="bg-white w-5 h-5 rounded border border-solid border-[#EAF8E7]"></div>
                    <span className="text-black text-[15px]">{"1"}</span>
                  </div>
                  <div className="flex flex-1 items-center px-[27px] gap-[11px]">
                    <img
                      alt=""
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/pe24dcs3_expires_30_days.png"
                      }
                      className="w-10 h-10 rounded object-fill"
                    />
                    <div className="flex flex-1 flex-col items-start py-3 pl-[1px]">
                      <span className="text-black text-[15px]">{"Men's T-Shirt"}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"01-01-2025"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"10"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5">
                    <div className="flex items-center gap-2">
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/bf85dkmj_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/6wlruvr4_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="flex items-center self-stretch py-3 px-2 gap-4"
                  style={{ display: isRowVisible(9) ? undefined : "none" }}
                >
                  <div className="flex shrink-0 items-center py-2.5 px-2 gap-2">
                    <div className="bg-white w-5 h-5 rounded border border-solid border-[#EAF8E7]"></div>
                    <span className="text-black text-[15px]">{"1"}</span>
                  </div>
                  <div className="flex flex-1 items-center px-[15px]">
                    <img
                      alt=""
                      src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/joxrxsjo_expires_30_days.png"
                      }
                      className="w-10 h-10 mx-3 rounded object-fill"
                    />
                    <span className="text-black text-[15px] w-[92px]">
                      {"Men's Leather Wallet"}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"01-01-2025"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-[11px]">
                    <span className="text-black text-[15px]">{"35"}</span>
                  </div>
                  <div className="flex flex-1 flex-col items-center py-2.5">
                    <div className="flex items-center gap-2">
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/52wnn2nq_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                      <img
                        alt=""
                        src={
                          "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/gumhxd8v_expires_30_days.png"
                        }
                        className="w-5 h-5 object-fill"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center self-stretch mb-[57px] mx-[22px]">
              <button
                className="flex shrink-0 items-center bg-white text-left py-[9px] px-2 gap-1 rounded-lg border-0"
                style={{
                  boxShadow: "0px 1px 3px #00000033",
                }}
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
              >
                <img
                  alt=""
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/5ve3zcz6_expires_30_days.png"
                  }
                  className="w-6 h-6 rounded-lg object-fill"
                />
                <span className="text-black text-[15px]">{"Previous"}</span>
              </button>
              <div className="flex shrink-0 items-center gap-3">
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    className={`flex flex-col shrink-0 items-start text-left py-[9px] px-[13px] rounded border ${
                      page === currentPage
                        ? "bg-[#C1E6BA] border-0"
                        : "bg-transparent border-solid border-gray-300"
                    }`}
                    onClick={() => setCurrentPage(page)}
                    aria-current={page === currentPage ? "page" : undefined}
                  >
                    <span className="text-[#023337] text-[15px] font-bold">{page}</span>
                  </button>
                ))}
              </div>
              <button
                className="flex shrink-0 items-center bg-white text-left py-[9px] px-3 gap-[7px] rounded-lg border-0"
                style={{
                  boxShadow: "0px 1px 3px #00000033",
                }}
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
              >
                <span className="text-black text-[15px]">{"Next"}</span>
                <img
                  alt=""
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/xclisfow_expires_30_days.png"
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

export default CategoriesPage;
