import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import clsx from "clsx";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/img/moody.svg";
import { Toaster } from "sonner";

const title = "MoodyDroid.chat: Where Robots Have Bad Days Too!";
const description =
  "Chat with your favorite sci-fi robots like Bender, Marvin, and HAL 9000. Experience unpredictable, moody AI interactions that are anything but helpful.";

export const metadata: Metadata = {
  title,
  description,
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://moodydroid.chat"),
  openGraph: {
    title,
    description,
    images: ["/img/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/img/twitter-image.png"],
  },
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
        <Toaster />
        <header className="flex items-center justify-center md:justify-start bg-white px-4 h-24 border-b border-base-100 relative">
          <h1 className="text-xl font-black tracking-tight text-base-400">
            <Link href="/" className="flex items-center gap-x-2">
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
