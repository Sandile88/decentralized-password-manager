# VaultLock - Decentralized Password Manager

## Table of Contents

1. Overview
2. Features
3. Contract Details
4. Getting Started
5. How to Use VaultLock
6. Contributions
7. License


## Overview
- VaultLock is a decentralized password manager that leverages smart contracts on the Ethereum blockchain to store passwords securely. Unlike traditional centralized password managers, which are vulnerable to data breaches, VaultLock takes advantage of immutable on-chain storage and cryptography to keep your passwords safe.

## Features
- **Password Encryption**: VaultLock utilizes advanced cryptographic techniques to encrypt your passwords, ensuring that only you can access and decrypt them.
- **On-Chain Storage**: Your passwords are stored securely on-chain, benefiting from decentralized technology that eliminates centralized points of failure.
- **Hashing Technology**: Passwords are stored as secure hashes, further protecting your sensitive information against unauthorized access.
- **Effortless Password Management**: Add, update, and delete passwords conveniently through a user-friendly interface.

## Contract Details
- VaultLock is implemented in Solidity and consists of several key functions that manage password storage:

1. Add Password: Allows the contract owner to safely add a password associated with a resource.
2. Update Password: Allows the contract owner to update an existing password for a given resource.
3. Delete Password: Enables the contract owner to delete a password for a resource securely.
4. Get Password: Provides the ability to retrieve a stored password (in its hashed form) for a given resource.


### Smart Contract Code (Brief Overview)
- The smart contract utilizes:

1. bytes32 for password hashing for enhanced security.
2. A mapping structure to store passwords associated with user addresses and resource identifiers.



## Getting Started

### Requirements
- An Ethereum wallet (like MetaMask, Coinbase Wallet, or Trust Wallet).
- Basic understanding of how to interact with Ethereum-based dApps.


### Installation

1. Download a compatible Ethereum wallet (e.g., MetaMask, Coinbase Wallet, Trust Wallet).
2. Connect your wallet to the VaultLock dApp.

#### Modules to Run the Program

1. First cd into the  **client** directory. 
2. To install the required packages, you can use npm. Run the following commands in your terminal:


```bash
npm install react-icons
npm install web3
npm i --save-dev @types/react-scroll
npm install

```
3. Run **npm run dev** to run the program.

#### NB: Make sure you have Node.js and npm installed on your machine to execute these commands successfully.

## Contributions
Feel free to contribute to the development of this project. You can create issues, raise pull requests, or engage in discussions to improve this decentralized password manager.

## License
This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/license/mit) for details.
