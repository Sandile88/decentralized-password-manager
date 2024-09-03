"use client"
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


const Navbar = () => {

    const [isClick, setisClick] = useState(false);

    const dropDown = () => {
        setisClick(!isClick);
    };



    return (
        <nav className="bg-blue-600  fixed w-full z-20 top-0 start-0 border-b border-blue-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={logo} className="h-8" alt="VaultLock Logo"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">VaultLock</span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button 
            type="button" 
            className="text-black bg-white hover:bg-sky-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">
                Connect Wallet
                </button>
            
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
        
        <div 
          className={`${
            isClick ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
                <a href="#" className="block py-2 px-3 text-white rounded hover:text-sky-100 md:bg-transparent md:text-white md:p-0 md:hover:text-sky-100" aria-current="page">Home</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-3 text-white rounded hover:text-sky-100 md:hover:bg-transparent md:hover:text-sky-100 md:p-0">About</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-3 text-white rounded hover:text-sky-100 md:hover:bg-transparent md:hover:text-sky-100 md:p-0">Services</a>
            </li>
            <li>
                <a href="#" className="block py-2 px-3 text-white rounded hover:text-sky-100 md:hover:bg-transparent md:hover:text-sky-100 md:p-0">Contact</a>
            </li>
            </ul>
        </div>
        </div>
        </nav>

    );

};

export default Navbar;