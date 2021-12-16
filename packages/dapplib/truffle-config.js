require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena forward turtle crazy rival soap attitude give kiwi tattoo ghost'; 
let testAccounts = [
"0x81c95a4a90886a2ca868aad6199f10e4618e326a7b8f9c899617cfead3ab8673",
"0xc8092cc2843245dedfbe4b12586239a705d129830cbce1fb6e627b17496def4d",
"0x145b72acbdf56e17ec27502cc3241017e4c16a3e157e5cd2627bb3dc81fc58d8",
"0x782d36341b82d698dd49555fdd48a52296224b4edcda323029a35d82c84a9bb0",
"0x90e75822880aab31ee64c1a091c76655a9e242d38f61662315d46006ec94b096",
"0xeb9abbb30c91687354c3020f3807d238ef61519fa3c2cabc6e47bc6d3a5ce189",
"0xffde6c407c4010d3682ab3efd1b9630a0fc85cc749bca8985a7abc5c7fa15469",
"0x2a22f20eba35955314e4d82dabc76e2b1623aa686a1aaaecce4460e86a5064de",
"0x40bda5869e91ba1db499ed6e76f00be946550b3c9a429cfd27d3806b0560e1b3",
"0x25361a228b0e52ad534dbcd391b70384d9132d241373038d13684ab98eece18b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

