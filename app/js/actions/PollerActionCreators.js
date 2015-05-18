var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes   = require('../constants/AppConstants').ActionTypes;

var EthServerActionCreators = require('../actions/EthServerActionCreators');
var EthWebAPIUtils = require('../utils/EthWebAPIUtils');

var _url, _poller;

function _poll() {
  try {
    EthServerActionCreators.receiveLatestStates(EthWebAPIUtils.getLatestStates(_url));

    AppDispatcher.dispatch({
      type: ActionTypes.POLLER_RECEIVED_SUCCESS
    });
  } catch(e) {
    console.log(e);

    AppDispatcher.dispatch({
      type: ActionTypes.POLLER_RECEIVED_FAILURE,
      error: e
    });
  }
}

var PollerActionCreators = {

  startPolling: function(node, interval) {
    console.log("start watching ...");

    if(_poller) {
      throw "there's already a running watcher!";
    } else {
      _url = "http://" + node.host + ':' + node.port;
      _poll()
      _poller = window.setInterval(_poll, interval);
    }
  },

  stopPolling: function() {
    console.log("stop watching ...");

    if(_poller) {
      window.clearInterval(_poller);
      _poller = _url = undefined;
    }

    AppDispatcher.dispatch({
      type: ActionTypes.POLLER_STOPPED
    });
  }

}

module.exports = PollerActionCreators;
