import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import "./globals.css";

const geistSans = localFont({ src: "./fonts/geist-latin.woff2", variable: "--font-geist-sans", weight: "100 900" });
const geistMono = localFont({ src: "./fonts/geist-mono-latin.woff2", variable: "--font-geist-mono", weight: "100 900" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mobile-wearable-systems-group.yliu94913.chatgpt.site";
const title = "Mobile and Wearable Systems Group | FSU";
const description = "Human-centered mobile and wearable sensing systems at Florida State University.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl), title, description,
  openGraph: { title, description, type: "website", images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 629, alt: "Mobile and Wearable Systems Group" }] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteUrl}/og.png`] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
