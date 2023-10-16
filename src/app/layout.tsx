import "./globals.css";
import type { Metadata } from "next";
import NextUIProvider from "./../utils/nextUiProvider";
import StyledComponentsRegistry from "./../lib/registry";

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
    <html lang="en" className="dark">
      <body>
        <StyledComponentsRegistry>
          <NextUIProvider>{children}</NextUIProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
