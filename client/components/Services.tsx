"use client"
import React from 'react';
import { RiLockPasswordFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { BiHash } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";


const Services = () => {
    return (
        <section id="services" className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Our Services</h2>
        </div>

        <div className="px-5 py-8 mt-12 bg-white lg:mt-20 lg:p-16">
            <div className="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">
                <div className="flex items-start">
                    <RiLockPasswordFill className="flex-shrink-0 w-16 h-16 text-blue-600"/>
                    {/* <svg className="flex-shrink-0 w-16 h-16 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg> */}
                    <div className="ml-5">
                        <h3 className="text-lg font-semibold text-black">Password Encryption</h3>
                        <p className="mt-4 text-base text-gray-600">VaultLock utilizes cutting-edge cryptographic techniques to encrypt your passwords, ensuring that only you can decrypt and access them. With RSA encryption integrated on the frontend, you can be confident that your passwords remain safe.</p>
                    </div>
                </div>

                <div className="flex items-start">
                <FaDatabase className="flex-shrink-0 w-16 h-16 text-blue-600"/>

                    {/* <svg className="flex-shrink-0 w-16 h-16 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg> */}
                    <div className="ml-5">
                        <h3 className="text-lg font-semibold text-black">On-Chain Storage</h3>
                        <p className="mt-4 text-base text-gray-600">Your encrypted passwords are stored securely on-chain, ensuring they are immutable, protected by decentralized blockchain technology. Unlike centralized password managers, VaultLock eliminates any single point of failure.</p>
                    </div>
                </div>

                <div className="flex items-start">
                <BiHash className="flex-shrink-0 w-16 h-16 text-blue-600"/>

                    {/* <svg className="flex-shrink-0 w-16 h-16 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1"
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                        />
                    </svg> */}
                    <div className="ml-5">
                        <h3 className="text-lg font-semibold text-black">Hashing Technology</h3>
                        <p className="mt-4 text-base text-gray-600">VaultLock stores your passwords as secure hashes, providing an additional layer of protection. Even if someone gains access to the stored data, they would only see hashed, meaningless information.</p>
                    </div>
                </div>

                <div className="flex items-start">
                <AiOutlineSetting className="flex-shrink-0 w-16 h-16 text-blue-600"/>

                    {/* <svg className="flex-shrink-0 w-16 h-16 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg> */}
                    <div className="ml-5">
                        <h3 className="text-lg font-semibold text-black">Password Management</h3>
                        <p className="mt-4 text-base text-gray-600">Effortlessly add, update, and delete passwords for various resources, all through a decentralized smart contract. You have full control over managing your passwords, with no risk of data theft from centralized servers.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    )
}

export default Services;


