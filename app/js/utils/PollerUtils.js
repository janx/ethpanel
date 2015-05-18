var EthServerActionCreators = require('../actions/EthServerActionCreators');
var EthWebAPIUtils = require('../utils/EthWebAPIUtils');

var _url, _poller;

var PollerUtils = {

  startPolling: function(node, interval) {
    console.log("start watching ...");

    if(_poller) {
      throw "there's already a running watcher!";
    } else {
      _url = "http://" + node.host + ':' + node.port;
      EthServerActionCreators.receiveLatestStates(EthWebAPIUtils.getLatestStates(_url));

      _poller = window.setInterval(function() {
        EthServerActionCreators.receiveLatestStates(EthWebAPIUtils.getLatestStates(_url));
      }, interval);
    }
  },

  stopPolling: function() {
    console.log("stop watching ...");

    if(_poller) {
      window.clearInterval(_poller);
      _poller = _url = undefined;
    }
  }

};

module.exports = PollerUtils;
