import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://bookitpro.ca";
const siteTitle = "BookitPro | Canadian Accounting & Bookkeeping Software";
const siteDescription =
  "Simplify bookkeeping, invoicing, expenses, financial reports and GST/HST workflows with BookitPro, an accounting workspace for Canadian businesses and accounting professionals.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | BookitPro",
  },
  description: siteDescription,
  applicationName: "BookitPro",
  keywords: [
    "Canadian accounting software",
    "small business bookkeeping",
    "online invoicing",
    "GST/HST accounting",
    "expense tracking",
    "financial reporting",
    "accounting software for small business Canada",
    "bookkeeping software Canada",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/bookit-pro-website.ico", type: "image/x-icon" },
    ],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "BookitPro",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": siteUrl + "/#organization",
      name: "BookitPro",
      url: siteUrl,
      logo: siteUrl + "/bookit-pro-website.ico",
    },
    {
      "@type": "WebSite",
      "@id": siteUrl + "/#website",
      name: "BookitPro",
      url: siteUrl,
      inLanguage: "en-CA",
      publisher: { "@id": siteUrl + "/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "BookitPro",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: siteDescription,
      url: siteUrl,
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
