import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BookitPro — Accounting that moves your business forward",
  description: "Bookkeeping, invoicing, expenses, banking and Canadian tax workflows in one clear workspace. Make month-end feel manageable with BookitPro.",
  applicationName: "BookitPro",
  keywords: ["Canadian accounting software", "bookkeeping", "GST HST", "invoicing", "small business accounting"],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "BookitPro — Your business, in balance",
    description: "A clearer way to manage your books, cash flow and tax workflows.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
