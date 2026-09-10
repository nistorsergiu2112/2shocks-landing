import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@fontsource-variable/space-grotesk";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "2Shocks — Your bike’s history. Your next service. Together.", template: "%s — 2Shocks" },
  description: "Coming soon for UK riders. Start with your registration, keep MOT and maintenance records together, and prepare for your next service. Free for one bike at launch, with Workshop reference planned for Plus, subject to a production data agreement.",
  keywords: ["motorcycle app", "motorcycle passport", "UK MOT", "motorcycle maintenance", "motorcycle parts"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "2Shocks",
    title: "2Shocks — Your bike’s history. Your next service. Together.",
    description: "Your bike record, intelligent parts matching and service plans. Workshop reference is planned for Plus, subject to a production data agreement. Coming soon to iOS and Android.",
  },
  twitter: { card: "summary_large_image", title: "2Shocks", description: "Your bike’s history. Your next service. Together." },
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
        <Analytics />
      </body>
    </html>
  );
}
