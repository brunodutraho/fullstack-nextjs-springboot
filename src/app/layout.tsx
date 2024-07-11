import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bulma/css/bulma.css'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App Vendas",
  description: "Sistema de vendas com NextJS e SpringBoot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
