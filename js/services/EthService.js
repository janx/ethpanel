var assign = require('object-assign');
var MyEthActions = require('../actions/MyEthActions');

function EthService(url, options) {
  this.options = assign({
    blocksLimit: 20
  }, options||{});

  this.web3 = require('web3');
  this.web3.setProvider(new this.web3.providers.HttpProvider(url));

  this.pollers = {};
}

assign(EthService.prototype, {
  getNumber: function() {
    return this.web3.eth.blockNumber;
  },

  getBlocks: function() {
    return this.blocks;
  },

  getNetStats: function() {
  },

  getMyAccounts: function() {
  },

  start: function() {
    var number = this.getNumber();
    this.lastNumber = number - this.options.blocksLimit;

    this.blocks = [];
    this.netStats = {};
    this.myAccounts = {};

    this.slowCallback();
    this.fastCallback();

    this.pollers.slow = window.setInterval(this.slowCallback.bind(this), 10000);
    this.pollers.fast = window.setInterval(this.fastCallback.bind(this), 2000);
  },

  stop: function() {
    for(var name in this.pollers) {
      window.clearInterval(this.pollers[name]);
    }
  },

  fastCallback: function() {
    this.updateBlocks();
    this.updateMyAccounts();
    this.updateMining();

    MyEthActions.ethServiceUpdate({
      lastNumber: this.lastNumber,
      blocks:     this.blocks,
      netStats:   this.netStats,
      mining:     this.mining,
      myAccounts: this.myAccounts
    });
  },

  slowCallback: function() {
    this.updateNetStats();
  },

  updateBlocks: function() {
    var number = this.getNumber();
    while(this.lastNumber <= number) {
      this.blocks.unshift(this.web3.eth.getBlock(this.lastNumber, false))
      this.lastNumber++;
    }
    this.blocks = this.blocks.slice(0, this.options.blocksLimit);
  },

  updateNetStats: function() {
    this.netStats = {
      listening: this.web3.net.listening,
      peerCount: this.web3.net.peerCount
    };
  },

  updateMyAccounts: function() {
    this.myAccounts = {
      default: this.web3.eth.defaultAccount
    };
  },

  updateMining: function() {
    this.mining = {
      fromWei: this.web3.fromWei,
      mining: this.web3.eth.mining
    };

    if(this.mining.mining) {
      assign(this.mining, {
        coinbase: this.web3.eth.coinbase,
        hashrate: this.web3.eth.hashrate,
        gasPrice: this.web3.eth.gasPrice
      });
    };
  }

});

module.exports = EthService;
