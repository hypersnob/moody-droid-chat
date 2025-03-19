import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import clsx from "clsx";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/moody.svg";

export const metadata: Metadata = {
  title: "Talk to the moody robots",
  description: "Iconic robots are alive!",
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx(GeistSans.className, "antialiased min-h-screen")}
    >
      <body className="flex flex-col min-h-screen">
        <header className="flex items-center bg-white px-4 h-24 border-b border-base-100">
          <h1 className="text-xl font-black tracking-tight text-base-400">
            <Link href="/" className="flex items-center gap-x-3">
              <Image
                src={logo}
                alt="Moody Droid Chat"
                width={48}
                height={40}
                className="-translate-y-1"
              />
              <span>Moody Droid Chat</span>
            </Link>
          </h1>
        </header>
        <div className="flex flex-1 relative">
          <Sidebar />
          <main className="flex-1 bg-base-100 relative">{children}</main>
        </div>
      </body>
    </html>
  );
}
