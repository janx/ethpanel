var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var _blockchain = {};

function update() {
  _blockchain.blockNumber = web3.eth.blockNumber;
}

update();

var ChainStore = assign({}, EventEmitter.prototype, {

  /*
   * Get current (last mined) block number.
   */
  getBlockNumber: function() {
    return _blockchain.blockNumber;
  }

});

module.exports = ChainStore;
