'use client'
import { useState } from 'react';

import abi from '../../server/contract/vault.json'; // Import the JSON file of manager contract
import Web3 from 'web3';


const contractInstance = (web3: Web3) => {
    return new web3.eth.Contract(
        abi,
        
        "CONTRACT ID"
    )
} 


function App() {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [accounts, setAccounts] = useState<Array<String>>([]);
  const [contract, setContract] = useState<any>(null);


  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        const accounts = await web3Instance.eth.requestAccounts();
        setAccounts(accounts);
        const managerContract = contractInstance(web3Instance); // Pass web3Instance instead of web3
        setContract(managerContract);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('Web3 not found');
    }
  };
  

    return (
        <div>
            <h1>Password Manager App</h1>
            {web3 ? (
                <div>
                    <p>Connected: {accounts[0]}</p>
                    
                </div>
            ) : (
                <button onClick={connectWallet}> Connect Wallet</button>
            
            )}
        </div>
    )

}

export default App;



  