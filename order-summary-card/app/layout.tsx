import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";


const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-red-hat",
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Order summary card",
  description: "Order summary card challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}