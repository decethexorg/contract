# TokenStore contracts and test suite

## Contracts
1. TokenStore.sol - key exchange contract with helpers
2. AccountModifiers.sol - a simple contract to hold fee/rebate modifiers
3. TokenTemplate.sol - a sample ERC20 token contract to be used in testing only

## Install Contracts

## Testing
- `$ npm install -g truffle@3.4.6`
- `$ npm install -g ganache-cli`
- `$ npm install`
- Launch ganache-cli, unlocking first several accounts with `ganache-cli --secure -u 0 -u 1 -u 2 -u 3 -u 4`
- Launch `truffle test` from command line
- Look for this and copy it:
```
////////////////////////
////////////////////////
////////////////////////
TOKEN_ADDRESS
0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
////////////////////////
////////////////////////
////////////////////////
```
- Put this address in `tokenstore/api/src/lib/config.js` so that this line is updated:
```
localConfig.contract = mainNet ? '0x1cE7AE555139c5EF5A57CC8d814a867ee6Ee33D8' : '0xXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
```

- !!Important!! Each time you run `truffle test` you must update the contract address you get from this output into `tokenstore/api/src/lib/config.js`

- `$ cp -R contracts /privatenet`
- `$ cd /privatenet`
- `$ truffle init`
- `$ truffle compile`

## Contact
Email us at tokendotstore@gmail.com with any questions and feedback!
