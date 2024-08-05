// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Manager{
   struct StorePassword {
        string password;
        string resource;
    }

    address public owner;
    string private masterPassword;
    mapping(address => StorePassword[]) private StoreAllPasswords;

    event PasswordAction(string message);

    modifier  onlyOwner(){
        require(msg.sender == owner, "Not the contract owner");
        _;
    }
}