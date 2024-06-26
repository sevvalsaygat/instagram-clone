import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ClientProviders from "./clientProviders";
import "./globals.css";

import { Layout } from "@app/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>
          <div className="flex flex-row w-full">
            <div className="w-1/5 h-screen max-h-screen">
              <Layout.Sidebar />
            </div>
            <div className="w-full max-h-screen overflow-y-auto">
              {children}
            </div>
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
