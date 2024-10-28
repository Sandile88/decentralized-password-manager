"use client"
import { IoIosAdd } from "react-icons/io";
import Modal from "../../components/Modal";
import { useState } from "react";
import { useWallet } from "@/components/Wallet";
// import { useAlerts } from '@/context/page';

interface PasswordData {
    resource: string;
    username: string;
    password: string;
}

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [savedPasswords, setSavedPasswords] = useState<PasswordData[]>([]);
    const [editingPassword, setEditingPassword] = useState<PasswordData | null>(null);
    const { accounts, contract } = useWallet();
    // const { showAlert } = useAlerts();

    const openModal = () => {
        setEditingPassword(null);
        setIsModalOpen(true);
    };

    const openEditModal = (password: PasswordData) => {
        setEditingPassword(password);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingPassword(null);
    };

    const handlePasswordSaved = (passwordData: PasswordData) => {
        if (editingPassword) {
            setSavedPasswords(savedPasswords.map(pwd => 
                pwd.resource === passwordData.resource ? passwordData : pwd
            ));
            // showAlert(`Password for ${passwordData.resource} updated successfully!`, "success");
        } else {
            setSavedPasswords([...savedPasswords, passwordData]);
            // showAlert(`Password for ${passwordData.resource} saved successfully!`, "success");
        }
    };
    

    const handleDeletePassword = async (resource: string) => {
        if (!contract || !accounts[0]) {
            // showAlert("Contract or account not available.", "error");
            return;
        }

        try {
            await contract.methods
                .deletePassword(resource)
                .send({ from: accounts[0] });
            
            setSavedPasswords(savedPasswords.filter(pwd => pwd.resource !== resource));
            // showAlert(`Password for ${resource} deleted successfully!`, "success");
        } catch (error: any) {
            console.error("Error deleting password:", error);
            let errorMessage = "An unexpected error occurred while deleting the password.";
            
            if (error.code === 4001) {
                errorMessage = "Delete operation rejected by user.";
            } else if (error.message?.includes("user rejected")) {
                errorMessage = "Delete operation cancelled by user.";
            }
            
            // showAlert(errorMessage, "error");
        }
    };


    return (
        <div className="flex flex-col min-h-screen pt-24 px-4 lg:px-80">
            <div className="w-full">
                <button 
                    type="button" 
                    className="flex items-center text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-2.5 text-center mb-6"
                    onClick={openModal}
                >
                    <IoIosAdd className="w-5 h-5 mr-2" />
                    Save Password
                </button>
            </div>

            {savedPasswords.length > 0 ? (
                <div className="w-full">
                    <h2 className="text-2xl font-semibold mb-4">Saved Passwords</h2>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {savedPasswords.map((pwd, index) => (
                            <div key={index} className="relative block p-6 rounded-xl shadow bg-gray-200">
                                <h3 className="text-lg font-semibold text-blue-600 mb-4">{pwd.resource}</h3>
                                <p className="text-gray-600">Username: {pwd.username}</p>
                                <p className="text-gray-600 mb-8">Password: {pwd.password}</p>
                                <div className="absolute bottom-4 right-4 flex space-x-2">
                                    <button 
                                        type="button" 
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2"
                                        onClick={() => openEditModal(pwd)}
                                    >
                                        Edit
                                    </button>
                                    <button 
                                        type="button" 
                                        className="text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-4 py-2"
                                        onClick={() => handleDeletePassword(pwd.resource)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-center flex-1">
                    <div className="text-center">
                        <p className="text-lg text-gray-500">
                            No passwords saved yet. Click "Save Password" to get started!
                        </p>      
                    </div>
                </div>
            )}

            <Modal 
                isOpen={isModalOpen} 
                onClose={closeModal} 
                onPasswordSaved={handlePasswordSaved}
                editMode={!!editingPassword}
                initialData={editingPassword}
            />
        </div>
    );
};

export default Home;