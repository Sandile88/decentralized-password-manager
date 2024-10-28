"use client"
import React from "react";
import Image from "next/image";
import shield from "../public/images/Image.png";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { BiHash } from "react-icons/bi";



const Hero = () => {
    return (
        <section id="hero" className="mt-40 flex items-center justify-center" >
            <div  className="text-center">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl">Welcome to VaultLock</h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Your secure and reliable decentralized password manager.</p>
                <Image src={shield} alt="" className="inline-flex items-center justify-center px-5 py-3"/>
                    <div className="flex gap-8 mt-8">

                    <a href="#" className="block max-w-sm p-6 rounded-xl shadow bg-gray-200">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                    <RiShieldKeyholeFill className="mx-auto mb-2 text-3xl text-blue-600"/>
                    Encrypt</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Utilize advanced encryption to safeguard your passwords, ensuring that only you have access to the stored data.</p>
                    </a>

                    <a href="#" className="block max-w-sm p-6 rounded-xl shadow bg-gray-200">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    <FaDatabase className="mx-auto mb-2 text-3xl text-blue-600"/>
                        Store</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Efficiently manage your passwords and resources with secure on-chain storage, protected by decentralized technology.</p>
                    </a>

                    <a href="#" className="block max-w-sm p-6 rounded-xl shadow bg-gray-200">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    <BiHash className="mx-auto mb-2 text-3xl text-blue-600"/>
                    Hash</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Store your passwords as secure hashes, adding an extra layer of protection for all your sensitive information.</p>
                    </a>
                    </div>
            </div>
       
        </section>
    );
};

export default Hero;