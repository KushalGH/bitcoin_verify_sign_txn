#bitcoin_verify_sign_txn
Verify and Sign Bitcoin Txn

# Scope
    - Sign a Bitcoin Txn
        - Private Key + Message  ---> Uses Signing Algorithm ---> Signature
        - bitcoin_msg.sign(message, privateKey, keyPair.compressed)
  
    - Verify that Txn
        - wallet address + signature + message ---> uses Verification Algorithm ---> Verifying that the given message is signed by given user

# To get a Bitcoin wallet
    - Download any wallet from google. 
    - For POC purpose, I have installed https://electrum.org/#home on ubuntu [ Before doing any real Bitcoin txn, review the wallet online, I have just picked one for my POC ]


# Configure and Develop
        - $ create a new folder bitcoin_workshop
        
          Run below comments at bitcoin_workshop folder level
        - $ npm install --prefix ./ node
        - $ npm install --prefix ./ bitcoinjs-lib
        - $ npm install --prefix ./ bitcoinjs-message

        - Create a JS file[verify.js] at bitcoin_workshop folder level
        - Update the content 
        - to run the script $ run node

