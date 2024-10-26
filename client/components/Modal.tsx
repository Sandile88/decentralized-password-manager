"use client"
import React, { use } from "react";
import vault from "../../server/contract/vault.json";
import { contractInstance } from "./Wallet";
import { useWallet } from "./Wallet";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}




const Modal: React.FC<ModalProps> = ({isOpen, onClose}) => {
    const {connect, accounts, web3, contract} = useWallet();

    if (!isOpen) return null; // Return nothing if the modal is not open

    const handleAddPassword = async () => {
        if (!contract || !accounts[0]) {
            console.error("Contract or account not available.");
            return;
        }
    
        const resource = "";
        const password = "";
        const res = await contract.methods.addPassword(password, resource).send({ from: accounts[0]});
        console.log('"Password saved: ', res);



    }
    return (
        <div id=" add-passwords" tabIndex={-1} aria-hidden={!isOpen} 
             className={`${isOpen ? 'flex' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative rounded-3xl shadow-xl bg-white">
                    <div className="flex items-center justify-between p-4 md:p-5 rounded-t ">
                        <h3 className="text-xl font-semibold  text-black">
                            Save Password
                        </h3>
                        <button type="button" className="end-2.5 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                onClick={onClose}
                        >
                            <svg className="w-2 h-3 text-blue-600 hover:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" action="#">
                        <div>
                                <label htmlFor="resource" className="block mb-2 text-sm font-medium text-gray-600">Website Name/URL</label>
                                <input type="text" name="resource" id="resouce" className="bg-gray-200 border border-gray-300 text-black text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-blue-400 " placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-600">Username</label>
                                <input type="text" name="username" id="username" className="bg-gray-200 border border-gray-300 text-black text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-blue-400 " placeholder="pluto67#!" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-200 border border-gray-300 text-black text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   dark:placeholder-blue-400" required />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex mb-4 items-start">
                                    
                                    <div className="flex items-center">
                                    <button type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={handleAddPassword}>Save</button>
                                    <button type="button" className="text-white bg-black hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-black font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Cancel</button>
                                    </div>
                                </div>
                                <div>
                                <button type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Modal;