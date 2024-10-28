"use client"
import React, { useEffect, useState } from "react";
import { useWallet } from "../components/Wallet";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import logo from "@/public/logo.svg";
import Image from "next/image";

const Navbar = () => {
  const { connect, disconnect, connected } = useWallet();
  const [isHomePage, setIsHomePage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsHomePage(pathname === "/home");
  }, [pathname]);

  return (
    <nav className="bg-blue-600 fixed w-full z-20 top-0 start-0 border-b border-blue-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={logo} className="h-8" alt="VaultLock Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VaultLock</span>
                </Link>
        
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {isHomePage ? (

            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full lg:w-96 p-4 ps-10 text-sm text-black rounded-full shadow bg-gray-100"
                placeholder="Search Passwords, Urls..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          ) : (

            connected ? (
              <button
                onClick={disconnect}
                className="text-black bg-white hover:bg-sky-100 font-medium rounded-full text-sm px-4 py-2"
              >
                Disconnect Wallet
              </button>
            ) : (

              <button
                onClick={connect}
                className="text-black bg-white hover:bg-sky-100 font-medium rounded-full text-sm px-4 py-2"
              >
                Connect Wallet
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
