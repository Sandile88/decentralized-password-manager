// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Manager{
   struct StorePassword {
        bytes32 password; //changed from string to bytes32
    }

    address public owner;
    bytes32 private masterPassword; //stored as bytes32

    // passwords are stored in a mapping with the hashed resource as the key.
    mapping(address => mapping(bytes32 => StorePassword)) private storeAllPasswords;
    // mapping(address => StorePassword[]) private StoreAllPasswords;

    event PasswordAction(string message);

    modifier  onlyOwner(){
        require(msg.sender == owner, "Not the contract owner");
        _;
    }


    constructor(string memory _masterPassword) {
        owner = msg.sender;
        masterPassword = keccak256(abi.encodePacked(_masterPassword));
    }
   
   
    function setMasterPassword(string calldata _masterPassword) external onlyOwner{
        masterPassword = keccak256(abi.encodePacked(_masterPassword));

         // add password and then encrypt on the frontend with crpyto-rsa
        // so add your code to encrypt from your frontend this side
        //use web3 js to retrive public and private keys
   
    }


    function addPassword(string memory _password, string memory _resource) external onlyOwner returns (bool success) {
        require(bytes(_password).length > 0, "Password cannot be empty");
        require(bytes(_resource).length > 0, "Resource cannot be empty");

        bytes32 resourceHash = keccak256(abi.encodePacked(_resource));
        bytes32 passwordHash = keccak256(abi.encodePacked(_password));

        storeAllPasswords[msg.sender][resourceHash] = StorePassword({
    password: passwordHash  // Store directly as bytes32
});


        emit PasswordAction("Password Added!");
        return true;
    }

    function updatePassword(string memory _resource, string memory _updatedPassword) external  onlyOwner returns (bool success) {
        require(bytes(_updatedPassword).length > 0, "Password cannot be empty");

        bytes32 resourceHash = keccak256(abi.encodePacked(_resource));
        require(storeAllPasswords[msg.sender][resourceHash].password != bytes32(0) , "Resource not found");
        // StorePassword[] memory passwords = StoreAllPasswords[msg.sender];

        storeAllPasswords[msg.sender][resourceHash].password = keccak256(abi.encodePacked(_updatedPassword));
        emit PasswordAction("Password updated!");
        return true;

    }


    function deletePassword(string memory _resource) external onlyOwner returns (bool success) {
        bytes32 resourceHash = keccak256(abi.encodePacked(_resource));
        require(storeAllPasswords[msg.sender][resourceHash].password != bytes32(0), "Resource not found");

        delete storeAllPasswords[msg.sender][resourceHash];
        emit PasswordAction("Password deleted!");
        return true;
    }



    function getPassword(string memory _resource) external view onlyOwner returns (bytes32 password){
        bytes32 resourceHash = keccak256(abi.encodePacked(_resource));
        require(storeAllPasswords[msg.sender][resourceHash].password != bytes32(0), "Resource not found");


        return storeAllPasswords[msg.sender][resourceHash].password;
    }
}