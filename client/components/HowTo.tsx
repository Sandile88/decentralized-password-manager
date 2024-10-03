"use client";
import React from 'react';
import { RiWallet3Fill } from "react-icons/ri";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FaSave } from "react-icons/fa";
import Link from 'next/link';

const HowTo = () => {
    return (
        <section id="how-to" className="py-10 bg-gray-100 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">How to Use VaultLock</h2>
                    <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">Follow these easy steps to start using VaultLock, your decentralized password manager.</p>
                </div>
                <ul className="max-w-md mx-auto mt-16 space-y-12">
                    <li className="relative flex items-start">
                        <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                        <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                            <RiWallet3Fill className="w-10 h-10 text-blue-600" />
                        </div>
                        <div className="ml-6">
                            <h3 className="text-lg font-semibold text-black">Step 1: Connect Your Wallet</h3>
                            <p className="mt-4 text-base text-gray-600">
                                {`To start using VaultLock, connect a wallet. If you don't have one, download a wallet like `}<Link href="https://metamask.io" className="hover:text-blue-600 underline">{`MetaMask`}</Link>, <Link href="https://www.coinbase.com/wallet/downloads" className="hover:text-blue-600 underline">{`Coinbase Wallet`}</Link>, or <Link href="https://trustwallet.com/download" className="hover:text-blue-600 underline">{`Trust Wallet`}</Link>.{` Then, click "Connect Wallet" on the homepage, select your wallet, and approve the connection.`}
                            </p>
                        </div>
                    </li>

                    <li className="relative flex items-start">
                        <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>

                        <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                            <AiOutlineFileProtect className="w-10 h-10 text-blue-600" />
                        </div>
                        <div className="ml-6">
                            <h3 className="text-lg font-semibold text-black">Step 2: Save Your Passwords</h3>
                            <p className="mt-4 text-base text-gray-600">
                                After connecting your wallet:
                            </p>
                            <ol className="list-decimal pl-6 text-base text-gray-600">
                                <li>Enter the required information for the account you want to secure.</li>
                                <li>Provide the password you want to store.</li>
                            </ol>
                        </div>
                    </li>

                    <li className="relative flex items-start">
                        <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                            <FaSave className="w-10 h-10 text-blue-600" />
                        </div>
                        <div className="ml-6">
                            <h3 className="text-lg font-semibold text-black">Step 3: Store Your Password</h3>
                            <p className="mt-4 text-base text-gray-600">
                                {`Once you’ve filled in the details, click "Save" to securely store your password on VaultLock.`}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default HowTo;
