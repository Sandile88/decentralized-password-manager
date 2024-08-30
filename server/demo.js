const NodeRsa = require('node-rsa');

// const key = new NodeRsa({b: 1024}); //how many bytes we want
let secret = "Non-readable secret"; //secret text to be encrypted

// vcfbVjG4UkOhi0r6hO5uqXcTLbMkUGu3wH/jUVia8ufVvsrIfyeZ9cY7c8hVaY1PlTXragDWgIQofxZqdfSrWMQDPn6SkqFdqwc2KzAodjfD0fzIjENphpbPNo74zQb2Vbh46K9TAoFWmXS1f5mRmOtAUkZU4ZvCuIey2kSqD5s=
// var encryptedString = key.encrypt(secret, 'base64'); //public key
// console.log(encryptedString); //view the response


// var dencryptedString = key.decrypt(encryptedString, 'utf8'); //private key
// console.log(dencryptedString);

//extract public and private key:

var public_key = key.exportKey('public');
var private_key = key.exportKey('private');

// console.log(public_key + '\n' + private_key);

let key_private = new NodeRsa(private_key);
let key_public = new NodeRsa(public_key);

//  public key for encryption
// var encryptedString = key_public.encrypt(secret, 'base64');
// console.log(encryptedString);



// private key for decryption

// var dencryptedString = key_private.decrypt(encryptedString, 'utf8');
// console.log(dencryptedString);

// decrpt using public key

// console.log(key_public.decrypt(encryptedString, 'utf8'));

// vice versa

var encryptedString = key_private.encrypt(secret, 'base64');
console.log(encryptedString);

var dencryptedString = key_public.decrypt(encryptedString, 'utf8');
console.log(dencryptedString);
