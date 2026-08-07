"use client";

import { useState } from "react";
import Image from "next/image";
import Avatar from "@/components/ui/Avatar";

type AdminHeaderProps = {
  title: string;
};

export default function AdminHeader({ title }: AdminHeaderProps) {
  const [query, setQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="px-6 py-3 md:px-8">
      <div className="flex items-center justify-between gap-4">
        <p
          style={{
            fontWeight: 700,
            fontStyle: "Bold",
            fontSize: "22px",
            color: "#023337",
          }}
        >
          {title}
        </p>
        <div className="flex min-w-0 shrink-0 items-center gap-5">
          <div className="hidden items-center rounded-full border border-[#edf1f5] bg-white pl-4 pr-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:flex md:min-w-[360px] lg:min-w-[420px]">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search data, users, or reports"
              className="w-full border-0 bg-transparent py-2.5 text-sm text-[#23272E] placeholder-[#8a94a4] outline-none"
              aria-label="Search"
            />
            <Image
              width={20}
              height={20}
              src="./search.svg"
              className="h-5 w-5 object-fill"
              alt=""
            />
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent"
              aria-label="Notifications"
            >
              <Image
                width={20}
                height={20}
                src="./header/bell-outline.svg"
                className="h-5 w-5 object-fill"
                alt=""
              />
            </button>
            <button
              type="button"
              role="switch"
              aria-checked={darkMode}
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode((v) => !v)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus:outline-none ${darkMode ? "bg-[#4EA674]" : "bg-gray-200"}`}
            >
              <span
                className={`inline-flex h-5 w-5 transform items-center justify-center rounded-full bg-white shadow transition-transform duration-200 ${darkMode ? "translate-x-5" : "translate-x-0.5"}`}
              >
                {darkMode ? (
                  /* moon icon */
                  <svg className="h-3 w-3 text-[#4EA674]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  /* sun icon */
                  <svg className="h-3 w-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.42 1.42l-.71.7a1 1 0 11-1.41-1.41l.7-.71zM18 9a1 1 0 110 2h-1a1 1 0 110-2h1zM4.93 14.36a1 1 0 011.41 1.41l-.7.71a1 1 0 11-1.42-1.42l.71-.7zM10 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.22-1.78a1 1 0 00-1.42 1.42l.71.7a1 1 0 001.41-1.41l-.7-.71zM2 11a1 1 0 110-2h1a1 1 0 110 2H2zm13.07-6.07a1 1 0 00-1.41 1.41l.7.71a1 1 0 001.42-1.42l-.71-.7zM10 6a4 4 0 100 8 4 4 0 000-8z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </button>
            <Avatar
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/fhr9qxop_expires_30_days.png"
              name="Admin"
              className="h-9 w-9 rounded-full object-fill"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full items-center rounded-full border border-[#edf1f5] bg-white px-3 py-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:hidden">
        <span className="truncate text-sm text-[#8a94a4]">
          {query || "Search data, users, or reports"}
        </span>
        <Image
          src="./search.svg"
          width={20}
          height={20}
          className="ml-auto h-5 w-5 object-fill"
          alt=""
        />
      </div>
    </div>
  );
}
