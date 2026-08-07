"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import { getPageTitle } from "./nav-config";

type AdminShellProps = {
  children: React.ReactNode;
};

export default function AdminShell({ children }: AdminShellProps) {
  const pathname = usePathname();
  const title = getPageTitle(pathname);
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const effectiveCollapsed = collapsed || isMobile;

  return (
    <div className="min-h-screen bg-[#f3f5f7]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1540px]">
        <div
          className={`shrink-0 border-r border-[#e6eaef] bg-white transition-[width] duration-300 ease-in-out ${
            effectiveCollapsed ? "w-[78px]" : "w-[268px]"
          }`}
        >
          <AdminSidebar
            collapsed={effectiveCollapsed}
            onToggleCollapse={() => setCollapsed((prev) => !prev)}
          />
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="sticky top-0 z-30 border-b border-[#e9edf2] bg-[#f9fbfd]/95 backdrop-blur-sm">
            <AdminHeader title={title} />
          </div>
          <main className="min-w-0 flex-1 px-6 py-6 md:px-8 md:py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
