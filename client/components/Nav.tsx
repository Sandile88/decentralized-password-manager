"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import { contractInstance }  from "../components/Wallet";
// import { Link } from "react-scroll";
import Link from "next/link";
import Web3 from "web3";
import homee from "../app/home/page";
// import { useRouter } from "next/router";
// import { useRouter } from "next/navigation";
import  Wallet  from "../components/Wallet";


// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {

    const [isClick, setisClick] = useState(false);
    // const [web3, setWeb3] = useState<Web3 | null>(null);
    // const [accounts, setAccounts] = useState<Array<String>>([]);
    // const [contract, setContract] = useState<any>(null);
    const [isHomePage, setIsHomePage] = useState(false);

    const { connect }  = Wallet();

    // const router = useRouter(); // Initialize the router


    //check if current page is the home page
    useEffect(() => {
      if (window.location.pathname === "/home") {
        setIsHomePage(true);
      } else {
        setIsHomePage(false);
      }
    }, []);
    

    const dropDown = () => {
        setisClick(!isClick);
    };

    const connectWallet = () => {
      connect();
    }


  
    // const connect = async () => {
    //   if (window.ethereum) {
    //     try {
    //       const web3Instance = new Web3(window.ethereum);
    //       setWeb3(web3Instance);
    //       const accounts = await web3Instance.eth.requestAccounts();
    //       setAccounts(accounts);
    //       if (accounts.length > 0) {
    //         // automatically switch to a new page
    //                   router.push("/home");

    //       }

    //       const managerContract = contractInstance(web3Instance); // Pass web3Instance instead of web3
    //       setContract(managerContract);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   } else {
    //     console.error('Web3 not found');
    //   }
    // };

    

    return (
        <nav id="nav" className="bg-blue-600  fixed w-full z-20 top-0 start-0 border-b border-blue-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={logo} className="h-8" alt="VaultLock Logo"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VaultLock</span>
        </Link>
        {/* {(accounts.length > 0) ? (
          <Link href="./Home" className="mt-40">
            
            <homee/>
          </Link>
        ) : ( */}

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isHomePage ? (
               <div className="relative">
               <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                   <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                       <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                   </svg>
               </div>
               <input type="search" id="default-search" className="block w-full lg:w-96 p-4 ps-10 text-sm text-black rounded-full shadow bg-gray-100" placeholder="Search Passwords, Urls..." required />
               <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2">Search</button>
           </div>

            ): (
          <button 
          type="button" 
          onClick={connectWallet}
          className="text-black bg-white hover:bg-sky-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 text-center ">
              Connect Wallet
              </button>
          
            )}
      



          
          <button
          onClick={dropDown}
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-sky-100"
          aria-controls="navbar-sticky"
          aria-expanded={isClick}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      
        {/* )} */}
        
        <div 
          className={`${
            isClick ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
                <Link href="#" className="block py-2 px-3 text-white rounded hover:text-sky-100 md:bg-transparent md:text-white md:p-0 md:hover:text-sky-100" aria-current="page">Home</Link>
            </li>
            <li>
                <Link href="#" className="block py-2 px-3 text-white rounded hover:text-sky-100 md:hover:bg-transparent md:hover:text-sky-100 md:p-0">About</Link>
            </li>
            <li>
                <Link href="#" className="block py-2 px-3 text-white rounded hover:text-sky-100 md:hover:bg-transparent md:hover:text-sky-100 md:p-0">Services</Link>
            </li>
            <li>
                <Link href="#" className="block py-2 px-3 text-white rounded hover:text-sky-100 md:hover:bg-transparent md:hover:text-sky-100 md:p-0">Contact</Link>
            </li>
            </ul>
        </div>
        </div>
        </nav>
    );

};

export default Navbar;