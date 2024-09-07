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
                    <div className="flex gap-8 mt-8">

                    <a href="#" className="block max-w-sm p-6 rounded-lg shadow bg-gray-100 bg-gray-200">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Secure</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Keep your passwords safe with top-notch encryption.</p>
                    </a>

                    <a href="#" className="block max-w-sm p-6 rounded-lg shadow bg-gray-100 bg-gray-200">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Sync</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </a>

                    <a href="#" className="block max-w-sm p-6 rounded-lg shadow bg-gray-100 bg-gray-200">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Protect</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </a>
                    </div>

                {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Learn more
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </a> */}
                {/* <h1 className="mt-10 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-2xl">Get started with VaultLock</h1> */}



            </div>
       
        </div>
    );
};

export default Hero;