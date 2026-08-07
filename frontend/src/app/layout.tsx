import type { Metadata } from "next";
import globalsCss from "./globals.css";

void globalsCss;

export const metadata: Metadata = {
  title: "DEALPORT Admin",
  description: "DEALPORT e-commerce admin dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
