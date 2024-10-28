"use client"
import React, { createContext, useState, useContext } from 'react';
import Web3 from 'web3';
import abi from '../../server/contract/vault.json';
import { useRouter } from 'next/navigation';

interface WalletContextType {
  connect: () => Promise<void>;
  disconnect: () => void;
  connected: boolean;
  web3: Web3 | null;
  accounts: string[];
  contract: any;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function contractInstance(web3: Web3) {
  return new web3.eth.Contract(abi as any, "0x38cB7800C3Fddb8dda074C1c650A155154924C73");
}

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [contract, setContract] = useState<any>(null);
  const [connected, setConnected] = useState(false);

  const router = useRouter();

  const connect = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        const accounts = await web3Instance.eth.requestAccounts();
        setAccounts(accounts);
        setConnected(true);

        if (accounts.length > 0) {
          router.push('/home');
        }

        const managerContract = contractInstance(web3Instance);
        setContract(managerContract);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('Web3 not found');
    }
  };

  const disconnect = () => {
    setWeb3(null);
    setAccounts([]);
    setContract(null);
    setConnected(false);
    router.push('/');
  };

  return (
    <WalletContext.Provider value={{ connect, disconnect, connected, web3, accounts, contract }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('Wallet is undefined');
  }
  return context;
};
