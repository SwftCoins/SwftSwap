const SwftSwap = artifacts.require('SwftSwap');
const ehters = require('ethers');

module.exports = function (deployer, network, accounts) {
	return deployer.deploy(SwftSwap).then(res => {
		console.log('accounts[0]: ' + accounts[0]);
	});
};