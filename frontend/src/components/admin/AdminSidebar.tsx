"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { NAV_ITEMS, NAV_SECTIONS, isNavItemActive, type NavItem } from "./nav-config";
import Avatar from "@/components/ui/Avatar";
import { clearAuth } from "@/lib/auth";

type AdminSidebarProps = {
  collapsed: boolean;
  onToggleCollapse: () => void;
};

function NavLink({ item, collapsed }: { item: NavItem; collapsed: boolean }) {
  const pathname = usePathname();
  const active = isNavItemActive(pathname, item.href);

  const content = collapsed ? (
    <Image
      width={20}
      height={20}
      src={item.icon}
      className={`${active ? "h-5 w-5" : "h-[18px] w-[18px]"} rounded-md object-fill`}
      alt=""
    />
  ) : (
    <>
      <Image
        width={20}
        height={20}
        src={active ? item.sectionIcon : item.icon}
        className={`${active ? "h-5 w-5" : "h-[18px] w-[18px]"} ml-3 mr-2 rounded-md object-fill`}
        alt=""
      />
      <span
        className={
          active ? "text-sm font-semibold text-white" : "text-sm font-medium text-[#6a7481]"
        }
      >
        {item.label}
      </span>
    </>
  );

  const className = `flex items-center self-stretch py-2.5 rounded-md transition-colors${
    active ? " bg-[#4ea674]" : " hover:bg-[#f4f7fa]"
  }${collapsed ? " justify-center" : ""}`;

  if (item.href) {
    return (
      <Link href={item.href} className={className} title={collapsed ? item.label : undefined}>
        {content}
      </Link>
    );
  }

  return (
    <div className={className} title={collapsed ? item.label : undefined}>
      {content}
    </div>
  );
}

export default function AdminSidebar({ collapsed, onToggleCollapse }: AdminSidebarProps) {
  const router = useRouter();

  function handleLogout() {
    clearAuth();
    router.push("/login");
  }

  return (
    <div className="flex h-full min-h-screen flex-col items-start self-stretch overflow-hidden bg-white pt-4">
      <div
        className={`mb-6 flex items-center self-stretch ${
          collapsed ? "justify-center px-3" : "justify-between px-5"
        }`}
      >
        {!collapsed && (
          <Image
            src="./logo.svg"
            className="h-[17px] w-[114px] object-fill"
            alt="Dealport"
            width={117}
            height={20}
          />
        )}
        <button
          type="button"
          onClick={onToggleCollapse}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-0 bg-transparent p-1 hover:bg-[#f2f6fa]"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Image src="./menu/collapsed.svg" width={20} height={20} alt="" />
        </button>
      </div>

      {NAV_SECTIONS.map((section, index) => {
        const items = NAV_ITEMS.filter((item) => item.section === section.id);
        const isLastSection = index === NAV_SECTIONS.length - 1;

        return (
          <div key={section.id} className="self-stretch">
            {!collapsed && (
              <span className="mb-2 ml-5 block text-[11px] uppercase tracking-wide text-[#8f98a5]">
                {section.label}
              </span>
            )}
            <div
              className={`flex flex-col self-stretch gap-2 ${
                collapsed ? "mx-2" : "mx-3"
              } ${isLastSection ? "mb-8" : "mb-5"}`}
            >
              {items.map((item) => (
                <NavLink key={item.label} item={item} collapsed={collapsed} />
              ))}
            </div>
          </div>
        );
      })}

      <div
        className={`mt-auto flex flex-col self-stretch gap-3 ${
          collapsed ? "mb-6 px-2" : "mb-6 px-3"
        }`}
      >
        <div
          className={`flex items-center self-stretch rounded-lg bg-white py-2.5 ${
            collapsed ? "justify-center px-2" : "gap-4 px-5"
          }`}
        >
          <div className={`flex items-center ${collapsed ? "justify-center" : "flex-1 gap-[9px]"}`}>
            <Avatar
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Z6hlTOUTRm/21zmqgpw_expires_30_days.png"
              name="Dealport"
              className="h-8 w-8 rounded-full object-fill"
            />
            {!collapsed && (
              <div className="flex flex-1 flex-col items-start gap-1">
                <span className="text-xs font-semibold text-gray-800">Dealport</span>
                <span className="text-[11px] text-neutral-500">Mark@thedesigner...</span>
              </div>
            )}
          </div>
          {!collapsed && (
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-lg p-1 transition-colors hover:bg-[#f4f7fa]"
              aria-label="Logout"
            >
              <Image
                width={20}
                height={20}
                src="./menu/logout.svg"
                className="h-4 w-4 rounded-lg object-fill"
                alt=""
              />
            </button>
          )}
        </div>
        <div
          className={`flex items-center self-stretch rounded-md border border-[#e9edf2] bg-white py-2.5 ${
            collapsed ? "mx-0 justify-center px-2" : "mx-0 px-3"
          }`}
          title={collapsed ? "Your Shop" : undefined}
        >
          <Image
            src="./menu/shop.svg"
            width={20}
            height={20}
            className={`h-5 w-5 rounded-md object-fill ${collapsed ? "" : "mr-2"}`}
            alt=""
          />
          {!collapsed && (
            <>
              <span className="text-sm text-[#023337]">Your Shop</span>
              <div className="flex-1 self-stretch" />
              <Image
                width={20}
                height={20}
                src="./menu/link-external.svg"
                className="h-4 w-4 rounded-md object-fill"
                alt=""
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
