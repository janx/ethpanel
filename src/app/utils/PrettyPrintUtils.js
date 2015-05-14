var web3 = require('web3');
var moment = require('moment');

module.exports = {
  fromWei: web3.fromWei,

  fullHash: function(hash) {
    return hash.slice(2);
  },

  shortHash: function(hash) {
    return hash.slice(2, 12);
  },

  hash: function(hash) {
    return hash.slice(2, 34);
  },

  time: function(timestamp) {
    return moment.unix(timestamp).format("HH:mm:ss");
  }
};
