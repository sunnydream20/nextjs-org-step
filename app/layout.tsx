import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Layout UI */}
        <div className="header"></div>
        <div className="content">
          <div className="sidebar"></div>
          <main>{children}</main>
        </div>
        <div className="footer"></div>
      </body>
    </html>
  )
}