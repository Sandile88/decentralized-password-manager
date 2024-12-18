import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Navbar from "../components/Nav";
import "./globals.css";
import { WalletProvider } from "@/components/Wallet";
// import { AlertsProvider } from "@/context/page";

const lato = Lato({ subsets: ["latin"], weight: ["400"]});

export const metadata: Metadata = {
  title: "Decentralized Password Manager",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <WalletProvider>
        <Navbar/>  {/* present on every page */}
        {/* <AlertsProvider> */}
        {children}
        {/* </AlertsProvider> */}
        </WalletProvider>
        </body>
    </html>
  );
}
