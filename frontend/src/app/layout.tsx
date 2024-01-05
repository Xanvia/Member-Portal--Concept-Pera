import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Concept-Pera-Member-Portal",
  description: "to-do",
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
