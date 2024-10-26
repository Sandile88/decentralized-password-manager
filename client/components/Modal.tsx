"use client"
import React, { useState } from "react";
import { useWallet } from "./Wallet";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPasswordSaved: (passwordData: PasswordData) => void;
}

interface PasswordData {
    resource: string;
    username: string;
    password: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onPasswordSaved }) => {
    const { connect, accounts, web3, contract } = useWallet();
    const [formData, setFormData] = useState<PasswordData>({
        resource: "",
        username: "",
        password: ""
    });

    if (!isOpen) return null;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleAddPassword = async () => {
        if (!contract || !accounts[0]) {
            console.error("Contract or account not available.");
            return;
        }

        try {
            const res = await contract.methods
                .addPassword(formData.password, formData.resource)
                .send({ from: accounts[0] });
            
            console.log("Password saved: ", res);
            
            // passing the saved password data to the parent component
            onPasswordSaved({
                resource: formData.resource,
                username: formData.username,
                password: formData.password
            });

            // clearing form and closing modal
            setFormData({ resource: "", username: "", password: "" });
            onClose();
        } catch (error) {
            console.error("Error saving password:", error);
        }
    };

    return (
        <div id="add-passwords" tabIndex={-1} aria-hidden={!isOpen} 
             className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative rounded-3xl shadow-xl bg-white">
                    <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
                        <h3 className="text-xl font-semibold text-black">
                            Save Password
                        </h3>
                        <button type="button" 
                                className="end-2.5 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                                onClick={onClose}>
                            <svg className="w-2 h-3 text-blue-600 hover:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="resource" className="block mb-2 text-sm font-medium text-gray-600">Website Name/URL</label>
                                <input 
                                    type="text" 
                                    name="resource" 
                                    value={formData.resource}
                                    onChange={handleInputChange}
                                    className="bg-gray-200 border border-gray-300 text-black text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                    placeholder="example.com" 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-600">Username</label>
                                <input 
                                    type="text" 
                                    name="username" 
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    className="bg-gray-200 border border-gray-300 text-black text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                    placeholder="username" 
                                    required 
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="bg-gray-200 border border-gray-300 text-black text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                    placeholder="••••••••" 
                                    required 
                                />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex mb-4 items-start">
                                    <div className="flex items-center">
                                        <button 
                                            type="button" 
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                                            onClick={handleAddPassword}
                                        >
                                            Save
                                        </button>
                                        <button 
                                            type="button" 
                                            className="text-white bg-black hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-black font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                                            onClick={onClose}
                                        >
                                            Cancel
                                        </button>
                                    </div>
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
