export type NavSection = "main" | "product" | "admin";

export type NavItem = {
  label: string;
  href?: string;
  icon: string;
  section: NavSection;
  sectionIcon: string;
};

export const NAV_SECTIONS: { id: NavSection; label: string }[] = [
  { id: "main", label: "Main menu" },
  { id: "product", label: "Product" },
  { id: "admin", label: "Admin" },
];

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Dashboard",
    href: "/Dashboard",
    icon: "./menu/dashboard.svg",
    sectionIcon: "./menu/sectiondashboard.svg",
    section: "main",
  },
  {
    label: "Order Management",
    href: "/OrderManagement",
    icon: "./menu/cart.svg",
    sectionIcon: "./menu/sectionorder.svg",
    section: "main",
  },
  {
    label: "Customers",
    href: "/Customer",
    icon: "./menu/user.svg",
    sectionIcon: "./menu/sectioncustomers.svg",
    section: "main",
  },
  {
    label: "Coupon Code",
    icon: "./menu/ticket.svg",
    sectionIcon: "./menu/sectioncoupon.svg",
    section: "main",
  },
  {
    label: "Categories",
    href: "/Categories",
    icon: "./menu/circle-square.svg",
    sectionIcon: "./menu/sectioncategories.svg",
    section: "main",
  },
  {
    label: "Transaction",
    href: "/Transaction",
    icon: "./menu/card-outline.svg",
    sectionIcon: "./menu/sectiontransaction.svg",
    section: "main",
  },
  {
    label: "Brand",
    icon: "./menu/star.svg",
    sectionIcon: "./menu/sectionbrand.svg",
    section: "main",
  },
  {
    label: "Add Products",
    href: "/AddProduct",
    icon: "./menu/circle-plus.svg",
    sectionIcon: "./menu/sectionaddproduct.svg",
    section: "product",
  },
  {
    label: "Product Media",
    icon: "/menu/image-outline.svg",
    sectionIcon: "/menu/sectionproductmedia.svg",
    section: "product",
  },
  {
    label: "Product List",
    href: "/ProductList",
    icon: "/menu/product-list.svg",
    sectionIcon: "/menu/sectionproductlist.svg",
    section: "product",
  },
  {
    label: "Product Reviews",
    icon: "/menu/reviews-outline.svg",
    sectionIcon: "/menu/sectionproductreviews.svg",
    section: "product",
  },
  {
    label: "Admin role",
    href: "/AdminRole",
    icon: "/menu/user-profile-circle.svg",
    sectionIcon: "/menu/sectionadminrole.svg",
    section: "admin",
  },
  {
    label: "Control Authority",
    icon: "/menu/settings.svg",
    sectionIcon: "/menu/sectioncontrolauthority.svg",
    section: "admin",
  },
];

export const PAGE_TITLES: Record<string, string> = {
  "/Dashboard": "Dashboard",
  "/Transaction": "Transaction",
  "/AddProduct": "Add Product",
  "/ProductList": "Product List",
  "/Customer": "Customers",
  "/CustomerDetails": "Customer Details",
  "/Categories": "Categories",
  "/OrderManagement": "Order Management",
  "/AdminRole": "Admin role",
  "/Reports": "Reports",
};

export function getPageTitle(pathname: string): string {
  return PAGE_TITLES[pathname] ?? "Dashboard";
}

export function isNavItemActive(pathname: string, href?: string): boolean {
  if (!href) return false;
  if (pathname === href) return true;
  if (href === "/Customer" && pathname === "/CustomerDetails") return true;
  return false;
}
