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
                    <div className="ml-5">
                        <h3 className="text-lg font-semibold text-black">Password Encryption</h3>
                        <p className="mt-4 text-base text-gray-600">VaultLock utilizes cutting-edge cryptographic techniques to encrypt your passwords, ensuring that only you can decrypt and access them. With RSA encryption integrated on the frontend, you can be confident that your passwords remain safe.</p>
                    </div>
                </div>

                <div className="flex items-start">
                <FaDatabase className="flex-shrink-0 w-16 h-16 text-blue-600"/>
                    <div className="ml-5">
                        <h3 className="text-lg font-semibold text-black">On-Chain Storage</h3>
                        <p className="mt-4 text-base text-gray-600">Your encrypted passwords are stored securely on-chain, ensuring they are immutable, protected by decentralized blockchain technology. Unlike centralized password managers, VaultLock eliminates any single point of failure.</p>
                    </div>
                </div>

                <div className="flex items-start">
                <BiHash className="flex-shrink-0 w-16 h-16 text-blue-600"/>
                    <div className="ml-5">
                        <h3 className="text-lg font-semibold text-black">Hashing Technology</h3>
                        <p className="mt-4 text-base text-gray-600">VaultLock stores your passwords as secure hashes, providing an additional layer of protection. Even if someone gains access to the stored data, they would only see hashed, meaningless information.</p>
                    </div>
                </div>

                <div className="flex items-start">
                <AiOutlineSetting className="flex-shrink-0 w-16 h-16 text-blue-600"/>
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


