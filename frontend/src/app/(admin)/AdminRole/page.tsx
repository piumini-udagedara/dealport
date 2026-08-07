"use client";

import React from "react";

export default function AdminRole() {
  return (
    <div className="flex flex-col w-full gap-5">
      <div className="bg-white rounded-lg p-6" style={{ boxShadow: "0px 1px 3px #00000033" }}>
        <h1 className="text-[#023337] mb-4 text-2xl font-bold">Admin role</h1>
        <p className="text-[#6A717F] text-sm">Profile and role management panel.</p>
      </div>
      <div className="bg-white rounded-lg p-6" style={{ boxShadow: "0px 1px 3px #00000033" }}>
        <h2 className="text-[#23272E] mb-2 text-xl font-semibold">About section</h2>
        <p className="text-[#6A717F] text-sm">This page is available and rendering correctly.</p>
      </div>
    </div>
  );
}
