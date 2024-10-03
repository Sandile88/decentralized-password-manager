"use client"
import React from "react";
import  Wallet  from "../components/Wallet";


const CTA = () => {

    const { connect }  = Wallet();

    const connectWallet = () => {
        connect();
      }
  

    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <svg className="mx-auto w-14 h-14 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
            <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Get Started with VaultLock</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Secure your passwords with VaultLock, the decentralized manager using advanced encryption to protect and manage them safely.</p>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4 md:flex-row lg:mt-10">
            {/* <a href="#" title="" className="inline-flex items-center justify-center px-4 py-4" role="button"> */}
            <button type="button" 
            onClick={connectWallet}
            className="  text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
            {/* </a> */}
        </div>

        <p className="mt-6 text-base text-center text-gray-600">Get started in just 2 minutes!</p>
    </div>
</section>

    )
}

export default CTA;