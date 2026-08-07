import type { Metadata } from "next";
import { Lato, Sora, Work_Sans } from "next/font/google";
import globalsCss from "./globals.css";

void globalsCss;

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  weight: ["700"],
  subsets: ["latin"],
});

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
      <body className={`${lato.variable} ${sora.variable} ${workSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
