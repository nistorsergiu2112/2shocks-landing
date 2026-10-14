import type { Metadata } from "next";
import { WebsiteAnalytics } from "@/components/WebsiteAnalytics";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/inter";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "2Shocks | Motorcycle Maintenance & MOT History App", template: "%s | 2Shocks" },
  applicationName: "2Shocks",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }, { url: "/brand/2shocks-symbol-512.png", sizes: "512x512", type: "image/png" }],
    apple: "/brand/2shocks-symbol-512.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        {children}
        <Footer />
        <WebsiteAnalytics />
      </body>
    </html>
  );
}
