require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install inhale fresh turn bitter birth rifle unique harvest local bridge giggle'; 
let testAccounts = [
"0xee6835c9ce96b9b220008e5bacd192ef807f129cf8f6f292a2746b5679ce0ff5",
"0xb5439a0a3b70b8ae24659a2cf3418ac5c37da44b4573226ef2495e818b6bd564",
"0x20d7ddbd95912e1ed0ed51b34ea53a12b374db91e1511ffa4e119861088a4b41",
"0xe6c0c389ebaf10782a1b6259c7bd1e80089a22b9b4d4e70d6ad06064872de446",
"0x456465b6263c4020dd2f4a1c26501278065a072816ea95ef325cc2f8263be901",
"0x4202291af40af7336c32fd94648349c3e7c9a971c9b3e89319f1c1c34e4409b5",
"0x24119304242941cc26233fa4f76776f3cdceffe0996989d7c2bf695c7c9b1fbc",
"0xea7820316b870f4babd31a60cf1a60bc47a6e61e3f289efdad3531d693cfbab5",
"0x3b28f23bc55d725c2ca39f82fdf10380bdb1e2a72a3126a5f0720b134bf0793d",
"0x2a96bb8ce6d9b103f2176153c6b6aa9e23e747948d1120706ec0d84efaa7c129"
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

