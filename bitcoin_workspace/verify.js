const bitcoin = require('bitcoinjs-lib');
const bitcoin_msg = require('bitcoinjs-message');

// This is dummy Electrum bitcoin wallet address
const address = '17unP9w8vHtFrY1ku7FMogDb8dKEAiMx13';

// A message
const message = 'Bitcoin blockchain is developed by Santoshi.';

// I have signed this Txn using my private key.
// You can use below command to sign the Txn or sign a message using your wallet
// bitcoin_msg.sign(message, privateKey, keyPair.compressed)
// by wallet: tools --> sign/verify message

// Now, we have to verify who has signed the message, I have multiple 
// dummy signatures

const signature_1 = 'HJLQlDWLyb1Ef8bQKEISzFbDAKctIlaqOpGbrk3YVtRsjmC61lpE5ErkPRUFtDKtx98vHFGUWlFhsh3DiW6N0rE';
const signature_2 = 'IFn36Idac3dLo3JvQ8/+AMfgQXbj9h3WIjDXJSUO+0ZbSOVEMhQK+t6RU3CC7ECvq9QshbRtLMLThDfCxa1RkYM=';
const signature_3 = 'ICcppPF+jJ+9NlvssL+qfcZP9VRbcBq8Drpw91vo+Z5hHkBuLTy+9q70u+Roi03XUIIRw+x9TU5K6FFm6Dhu718=';
const signature_4 = 'Hw6E+IrUa+1ihj2WlI5QTKc4ON3ks8VhNq9CRpEz9JtydqtyDrInp8m/JQXpN4WpKiW1ZkwYTul88C3QYWvOtlM=';

console.log("signature_1:  " + bitcoin_msg.verify(message, address, signature_1));
console.log("signature_2:  " + bitcoin_msg.verify(message, address, signature_2));
console.log("signature_3:  " + bitcoin_msg.verify(message, address, signature_3));
console.log("signature_4:  " + bitcoin_msg.verify(message, address, signature_4));


// run the command $ run node 
