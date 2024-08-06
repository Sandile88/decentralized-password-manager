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

    function updatePassword(string memory _resource, string memory _updatedPassword) external  onlyOwner returns (bool success) {
        require(bytes(_updatedPassword).length > 0, "Password cannot be empty");

        StorePassword[] memory passwords = StoreAllPasswords[msg.sender];

        for (uint256 i = 0; i < passwords.length; i++) {
            if (keccak256(bytes(passwords[i].resource)) == keccak256(bytes(_resource))) {
                passwords[i].password = bytes32ToString(keccak256(abi.encodePacked(_updatedPassword)));
                emit PasswordAction("Password updated!");
                        return true;
            }
        }
        revert("Password not found for the given resource");
        // StoreAllPasswords[msg.sender].password = _password;
    }


    function deletePassword(string memory _password) external onlyOwner returns (bool success) {
        StorePassword[] storage passwords = StoreAllPasswords[msg.sender];
        bool passwordFound = false;


        for(uint i = 0; i < passwords.length; i++) {
            if(keccak256(abi.encodePacked(passwords[i].password)) == keccak256(abi.encodePacked(_password))) {
                for (uint256 j = i; j < passwords.length -1; j++) {
                    passwords[j] = passwords[j + 1];
                }
                // changed passwords modifications from memory to storage to allowing popping
                passwords.pop();    
                passwordFound = true;
                break  ;  
                // delete StoreAllPasswords[i];
            }
        }
        emit PasswordAction("Password deleted!");
        return true;
    }



    function getPassword(string memory _resource) external view onlyOwner returns (string memory, string memory resource){
        require(StoreAllPasswords[msg.sender].length > 0, "No passwords stored yet!");

        StorePassword[] memory  passwords = StoreAllPasswords[msg.sender];
        for (uint256 i = 0; i < passwords.length; i++) {
            if (keccak256(bytes(passwords[i].resource)) == keccak256(bytes(_resource)))
                return (passwords[i].password, passwords[i].resource);
        }
        revert("Password not found for give  resource");
    }

       
    function getAllPasswords() external view onlyOwner returns  (StorePassword[] memory){
        return StoreAllPasswords[msg.sender];
    }


}