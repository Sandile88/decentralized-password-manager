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


    constructor(string memory _masterPassword) {
        owner = msg.sender;
        masterPassword = _masterPassword;
    }
   
   
    function setMasterPassword(string calldata _masterPassword) external onlyOwner{
        masterPassword = hashedPassword(_masterPassword);

         // add password and then encrypt on the frontend with crpyto-rsa
        // so add your code to encrypt from your frontend this side
        //use web3 js to retrive public and private keys
   
    }


    function addPassword(string memory _password, string memory _resource) external onlyOwner returns (bool success) {
        require(bytes(_password).length > 0, "Password cannot be empty");
        require(bytes(_resource).length > 0, "Resource cannot be empty");

        bytes32 hPassword = keccak256(abi.encodePacked(_password));
        string memory h = bytes32ToString(hPassword);

        StoreAllPasswords[msg.sender].push(StorePassword({
            password: h,
            // password: _password,
            resource: _resource
        }));

        emit PasswordAction("Password Added!");
        return true;
    }

}