import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "University EAN - Privacity",
  description: "University EAN - Privacity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
