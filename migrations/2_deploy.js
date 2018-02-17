var Adoption = artifacts.require('./Adoptions.sol');

module.exports = function (deployer) {
    deployer.deploy(Adoption);
};