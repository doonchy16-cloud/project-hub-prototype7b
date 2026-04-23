import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prototype 7",
  description: "Project Hub Prototype",
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
