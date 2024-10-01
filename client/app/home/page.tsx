"use client"
import React, {useState, useEffect} from "react";



const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-24">

      <form className=" max-w-md mx-auto mb-auto ml-4 lg:mx-auto lg:ml-80">   
            <label htmlFor="default-search" className=" mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full lg:w-96 p-4 ps-10 text-sm text-black rounded-lg shadow bg-gray-100" placeholder="Search Passwords, Urls..." required />
                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
        </form>
        
      <h1 className="text-4xl font-bold mb-6">Welcome to VaultLock</h1>
      <p className="text-lg">Your wallet is connected. Explore our features!</p>
    </div>
  );
};

export default Home;
