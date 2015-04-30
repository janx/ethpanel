var assign = require('object-assign');
var MyEthActions = require('../actions/MyEthActions');

function EthService(url, options) {
  this.options = assign({
    blocksLimit: 20
  }, options||{});

  this.web3 = require('web3');
  this.web3.setProvider(new this.web3.providers.HttpProvider(url));
}

EthService.prototype.getNumber = function() {
  return this.web3.eth.blockNumber;
};

EthService.prototype.getBlocks = function() {
  return this.blocks;
};

EthService.prototype.start = function() {
  var number = this.getNumber();

  this.blocks = [];
  for(var i=0; i<this.options.blocksLimit; i++) {
    this.blocks.push( this.web3.eth.getBlock(number-i, true) );
  }

  MyEthActions.setupBlocks(this.blocks);
};

module.exports = EthService;
