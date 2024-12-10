import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { paths } from "@/paths";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Road to Next",
  description: "Road to Next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="
        supports-backdrop:bg-background/60
        fixed left-0 right-0 top-0 z-50
        border-b bg-background/95 backdrop-blur
        w-full flex py-2.5 px-5 justify-between
        "
        >
          <div >
            <Link href={paths.home} className={buttonVariants({ variant: "outline" })}>Home</Link>
          </div>
          <div>
            <Link href={paths.tickets} className={buttonVariants({ variant: "outline" })}>Tickets</Link>
          </div>
        </nav>
        <main className="
        min-h-screen flex-1
        overflow-y-auto overflow-x-hidden
        py-24 px-8
        bg-secondary/20
        flex flex-col
        "
        >
          {children}
          </main>
      </body>
    </html>
  );
}
