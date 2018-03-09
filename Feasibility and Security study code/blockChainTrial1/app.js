'use strict';
const SHA256 = require('crypto-js/sha256');
class Block {
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    calculateHash() {
        return SHA256(this.index + this.timestamp + this.previousHash + JSON.stringify(this.data) + this.nonce).toString();
    }
    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Mined Block Hash :", this.hash);
    }
}

class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 2;
    }
    createGenesisBlock() {
        return new Block(0, "01/20/2018", "Genesis Block", "0");
    }
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }
    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            if (currentBlock.hash !== currentBlock.calculateHash())
                return false;
            if (currentBlock.previousHash !== previousBlock.hash)
                return false;
        }
        return true;
    }
}

let coin = new BlockChain();
console.log("Mining block 1.....");
coin.addBlock(new Block(1, "01/21/2018", { amount: 4 }));
console.log("Mining block 2.....");
coin.addBlock(new Block(2, "01/22/2018", { amount: 10 }));

console.log("Is the block chain valid:", coin.isChainValid());
console.log(JSON.stringify(coin, null, 4));
coin.chain[1].data = { amount: 100 };
//coin.chain[1].hash = coin.chain[1].calculateHash();
console.log("Initially it showed that the block chain is valid. Scroll up and have a look. But after we changed the amount of a block maliciously, it show us that the block chain isnt valid.");
console.log("Is the block chain valid:", coin.isChainValid());
console.log("Now go into the code and play with the difficulty in the BLockChain class to see the magic. Bitcoin uses a difficulty of 16 to mine its blocks. Now you can imagine how tough it would be to crack this!");