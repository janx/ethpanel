var web3 = require('web3');

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

console.log(web3);

document.getElementById('myeth').innerHTML = web3.eth.blockNumber;
