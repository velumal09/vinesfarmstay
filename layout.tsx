import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VinES Farmstay - Pondicherry",
  description: "Your private paradise in Pondicherry. 1BR farmhouse surrounded by fruit trees.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
