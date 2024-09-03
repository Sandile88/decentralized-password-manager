"use client"
import React, { useState } from "react";
import Image from "next/image";
import shield from "../public/images/Image.png";

const Hero = () => {
    return (
        <div className="mt-40 flex items-center justify-center" >
            <div  className="text-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl">Welcome to VaultLock</h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Your secure and reliable decentralized password manager.</p>
                <Image src={shield} alt="" className="inline-flex items-center justify-center px-5 py-3"/>
                {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Learn more
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a> */}
            </div>
       
        </div>
    );
};

export default Hero;