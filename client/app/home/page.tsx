"use client"
import { IoIosAdd } from "react-icons/io";
import Modal from "../../components/Modal";
import { useState } from "react";
import { useWallet } from "@/components/Wallet";

interface PasswordData {
    resource: string;
    username: string;
    password: string;
}

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [savedPasswords, setSavedPasswords] = useState<PasswordData[]>([]);
    const [editingPassword, setEditingPassword] = useState<PasswordData | null>(null);
    const [deletingPassword, setDeletePassword] = useState<PasswordData | null>(null);

    const { accounts, contract } = useWallet();

    const openModal = () => {
        setEditingPassword(null);
        setIsModalOpen(true);
    };

    const openEditModal = (password: PasswordData) => {
        setEditingPassword(password);
        setIsModalOpen(true);
    };

    const deleteModal = (password: PasswordData) => {
        setDeletePassword(password);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingPassword(null);
    };

    const handlePasswordSaved = (passwordData: PasswordData) => {
        if (editingPassword) {
            // Update existing password
            setSavedPasswords(savedPasswords.map(pwd => 
                pwd.resource === passwordData.resource ? passwordData : pwd
            ));

        
        } else if (deletingPassword){
            setSavedPasswords(savedPasswords.map(pwd => 
                pwd.resource === passwordData.resource ? passwordData : pwd
            ));


        } else {
            // Add new password
            setSavedPasswords([...savedPasswords, passwordData]);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-24">
            <form className="max-w-md mx-auto mb-8 ml-4 lg:mx-auto lg:ml-80">
                <div className="relative">
                    <button 
                        type="button" 
                        className="flex items-center text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center me-2 mb-2"
                        onClick={openModal}
                    >
                        <IoIosAdd className="w-5 h-5 mr-2" />
                        Save Password
                    </button>
                </div>
            </form>

            <h1 className="text-4xl font-bold mb-6">Welcome to VaultLock</h1>
            
            {savedPasswords.length > 0 ? (
                <div className="w-full max-w-4xl p-6">
                    <h2 className="text-2xl font-semibold mb-4">Saved Passwords</h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {savedPasswords.map((pwd, index) => (
                            <div key={index} className="relative block max-w-sm p-6 rounded-xl shadow bg-gray-200">
                                <h3 className="text-lg font-semibold text-blue-600">{pwd.resource}</h3>
                                <p className="text-gray-600">Username: {pwd.username}</p>
                                <p className="text-gray-600">Password: {pwd.password}</p>
                                <button 
                                    type="button" 
                                    className="absolute bottom-4 right-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2"
                                    onClick={() => openEditModal(pwd)}
                                >
                                    Edit
                                </button>

                                <button 
                                    type="button" 
                                    className="absolute bottom-4 right-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2"
                                    onClick={() => openEditModal(pwd)}
                                >
                                Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-lg">Your wallet is connected. Start saving passwords!</p>
            )}

            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                onPasswordSaved={handlePasswordSaved}
                editMode={!!editingPassword}
                initialData={editingPassword}
                deleteModal={!!deletingPassword}
            />
        </div>
    );
};

export default Home;