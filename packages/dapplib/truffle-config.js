require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea knife sun tooth guard render remain umbrella good ensure surge gasp'; 
let testAccounts = [
"0x5b0d353c04d16cd1e7a48ca5a2c60b43312aa1ea74339cbb111fe23816911127",
"0x6bb6c62e69a100aecba8d15b8f5118ccb550882ecc847d11f6fb7c755ac25483",
"0x020b47a2e7e5156dc5e992d88fc37a472a155eff36f863ce27f7ababb6fb36b3",
"0xea642a0e405a9bbeeca04e4c9fdba9203bd07e2b4bbf28642e9355a5c584236a",
"0xf11616b85bf43b985086807a460372776f88c3e5fdb074024da07a7b87a43fe0",
"0xc65e4a530ddce3d5ebb27c9376b295f81e99eead4fa012eb4f3b4c296f58ee19",
"0xac8156063acb56934ec5746fb19f922c5eb221e02f4a018f93df0d0c4982f0dd",
"0x311404ab12fc5426bf04565734828c39654c00436499e227be0113d57881ad7f",
"0x2c252826207c28ad7976af4da03a8ee48180e8ffc6358910876ccac93361b1a8",
"0x69d9b86090825dc18c6cd3efae14b17a4612fe03277bb78cd9c34f0a7b945334"
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

