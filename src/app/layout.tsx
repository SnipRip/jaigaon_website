import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SITE_URL } from "@/config/site";
import { company } from "@/content/company";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${company.name} · Building materials in Jaigaon, supplied to Bhutan`,
    template: `%s · ${company.name}`,
  },
  description: company.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: company.name,
    title: company.name,
    description: company.description,
    images: [{ url: "/images/hero-site-worker.jpg", width: 952, height: 462 }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body className="font-sans">
        <SiteHeader />
        <main id="top">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
