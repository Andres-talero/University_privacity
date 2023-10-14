import "./globals.css";
import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";

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
      <NextUIProvider>
        <body>{children}</body>
      </NextUIProvider>
    </html>
  );
}
