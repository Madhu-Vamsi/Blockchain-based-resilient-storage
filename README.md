## Blockchain-based-resilient-storage

# Problem Statement:

This project aims towards security and prevention of any undesired manipulation of sensitive public data(such as real estate property or shareholders of a company). This is being achieved by putting such data on Blockchain to stop its manipulation, because it is almost impossible to change the blockchain.

1. Establishing a proof of concept for a distributed ledger system.
2. Developed a Blockchain based application with ‘Records of Property’ as a use-case similar as Bitcoins.

# About Blockchain:

Blockchain is the application of a technology in which a list of records, or blocks, are cryptographically linked to one another via timestamps and other attributes. 

We have created a Proof-of-Concept for a fully distributed and decentralized application. It is a transaction based system where there is no central authority and the transaction is accepted through a consensus algorithm on a peer to peer network. Each node on the p2p has a copy of the ledger and each transaction is added onto the ledger if majority of the p2p network accepts the transaction through the consensus algorithm. For our application, we have targeted the fraudulent activities in the real-estate market. Through our PoC, the users can easily buy and sell their property without worrying about fraud and about paying the middlemen for a transaction that should not include anyone other than the sellers and the  buyers.

# Goals:

1. House data be stored on ethereum block chain.
2. New houses can added.
3. House data can be updated.
4. Adding buying functionality for the houses if the buyer has sufficient amounts of money.
  
# Link to view the video for the project : 
https://youtu.be/EwQxYSbje04
 
# Steps to run the project:

Step1:
MetaMask download from chrome webstore
Make 2 accounts and mine 4 Ethers in each account.

Step2:
Download the git repository.

Step3:
Download Node JS. Check   it by command node -v

Step 4:
Npm install on the root directory of the project

Step5:
Npm install -g gulp

Step 6:
Bower install

Step 7:
Bower install web3

Step 8:
Gulp serve

Step 9:
If your default browser is not chrome, then open chrome and type “localhost:9000” in the url bar.
