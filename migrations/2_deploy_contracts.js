var SafeMath = artifacts.require("./SafeMath.sol");
var AccountModifiers = artifacts.require("./AccountModifiers.sol");
var TokenTemplate = artifacts.require("./TokenTemplate.sol");
var TokenStore = artifacts.require("./TokenStore.sol");

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.deploy(AccountModifiers);
  deployer.deploy(TokenTemplate);
  deployer.deploy(TokenStore);
};