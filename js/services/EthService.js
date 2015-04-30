var assign = require('object-assign');
var MyEthActions = require('../actions/MyEthActions');

function EthService(url, options) {
  this.options = assign({
    blocksLimit: 20
  }, options||{});

  this.web3 = require('web3');
  this.web3.setProvider(new this.web3.providers.HttpProvider(url));

  this.watchers = {};
}

assign(EthService.prototype, {
  getNumber: function() {
    return this.web3.eth.blockNumber;
  },

  getBlocks: function() {
    return this.blocks;
  },

  getNetStats: function() {
    return {
      listening: this.web3.net.listening,
      peerCount: this.web3.net.peerCount
    };
  },

  start: function() {
    var number = this.getNumber();

    this.blocks = [];
    for(var i=0; i < this.options.blocksLimit; i++) {
      this.blocks.push( this.web3.eth.getBlock(number-i, false) );
    }

    MyEthActions.setupBlocks(this.blocks);
    //MyEthActions.setupNetStats(this.getNetStats());

    this.watchers['blocks'] = window.setInterval(this._onNewBlock.bind(this), 2000);
  },

  stop: function() {
    for(var name in this.watchers) {
      window.clearInterval(this.watchers[name]);
    }
  },

  _onNewBlock: function() {
    var number = this.getNumber();
    for(var i=this.blocks[0].number+1; i <= number; i++) {
      this.blocks.unshift(this.web3.eth.getBlock(i, false))
      MyEthActions.newBlock(this.blocks[0]);
    }
  }
});

module.exports = EthService;
