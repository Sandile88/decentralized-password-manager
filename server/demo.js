const NodeRsa = require('node-rsa');

const key = new NodeRsa({b: 1024});
let secret = "Non-readable secret";

var encryptedString = key.encrypt(secret, 'base64');
console.log(encryptedString);