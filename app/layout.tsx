import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "2Shocks — Know what your bike needs", template: "%s — 2Shocks" },
  description: "A motorcycle ownership app that turns your UK registration into a clear bike record, with MOT status, likely parts and service planning.",
  keywords: ["motorcycle app", "motorcycle passport", "UK MOT", "motorcycle maintenance", "motorcycle parts"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "2Shocks",
    title: "2Shocks — Know what your bike needs before it costs you",
    description: "Your motorcycle identity, official status, likely parts and maintenance record — together.",
  },
  twitter: { card: "summary_large_image", title: "2Shocks", description: "A clearer record of motorcycle ownership." },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
