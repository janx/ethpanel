var assign = require('object-assign');
var web3 = require('web3');

var AppConstants = require('../constants/AppConstants');

module.exports = {

  getLatestStates: function(url) {
    web3.setProvider(new web3.providers.HttpProvider(url));

    var last = web3.eth.blockNumber;
    var first = last - AppConstants.BlockFetchLimit + 1;

    return {
      defaultAccount: web3.eth.defaultAccount,
      accounts: this.getAccounts(),
      network: this.getNetwork(),
      mining: this.getMining(),
      blocks: this.getBlocks(first, last)
    };
  },

  getBlocks: function(current, last) {
    var blocks = [];
    for(;current <= last;current++) {
      blocks.unshift(web3.eth.getBlock(current, false));
    }
    return blocks;
  },

  getNetwork: function() {
    return {
      listening: web3.net.listening,
      peerCount: web3.net.peerCount
    };
  },

  getMining: function() {
    var result = {mining: web3.eth.mining};

    if (result.mining) {
      var coinbase = web3.eth.coinbase || '';
      var coinbaseBalance = coinbase ? web3.eth.getBalance(coinbase) : 0;

      result = assign(result, {
        coinbase: coinbase,
        coinbaseBalance: coinbaseBalance,
        hashrate: web3.eth.hashrate,
        gasPrice: web3.eth.gasPrice
      });
    }

    return result;
  },

  getAccounts: function() {
    return web3.eth.accounts.map(function(addr) {
      return {address: addr, balance: web3.eth.getBalance(addr)};
    });
  }

};
