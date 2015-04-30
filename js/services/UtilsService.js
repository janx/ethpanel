var moment = require('moment');

var Utils = {
  prettyHash: function(hash) {
    return hash.slice(2, 34);
  },

  prettyTime: function(timestamp) {
    return moment.unix(timestamp).format("HH:mm:ss");
  }
};

module.exports = Utils;
