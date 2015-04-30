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
  for(var i=0; i < this.options.blocksLimit; i++) {
    this.blocks.push( this.web3.eth.getBlock(number-i, false) );
  }

  MyEthActions.setupBlocks(this.blocks);

  var callback = function() {
    var number = this.getNumber();
    for(var i=this.blocks[0].number+1; i <= number; i++) {
      this.blocks.unshift(this.web3.eth.getBlock(i, false))
      MyEthActions.newBlock(this.blocks[0]);
    }
  };
  this.watcher = window.setInterval(callback.bind(this), 2000);
};

EthService.prototype.stop = function() {
  window.clearInterval(this.watcher);
};

module.exports = EthService;
