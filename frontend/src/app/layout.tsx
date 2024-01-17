import type { Metadata } from "next";
import "./globals.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { Inter } from "next/font/google";
import StoreProvider from "@src/providers/StoreProvider";

export const metadata: Metadata = {
  title: "Concept-Pera-Member-Portal",
  description: "to-do",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <StoreProvider>
        <body>{children}</body>
      </StoreProvider>
    </html>
  );
}
