var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes   = require('../constants/AppConstants').ActionTypes;

var PollerUtils = require('../utils/PollerUtils');

var PollerActionCreators = {

  startPolling: function(node, interval) {
    try {
      PollerUtils.startPolling(node, interval);

      AppDispatcher.dispatch({
        type: ActionTypes.POLLER_START_SUCCESS
      });
    } catch (e) {
      console.log(e);
      console.log(e.stack);

      AppDispatcher.dispatch({
        type: ActionTypes.POLLER_START_ERROR,
        error: e
      });
    }
  },

  stopPolling: function() {
    PollerUtils.stopPolling();

    AppDispatcher.dispatch({
      type: ActionTypes.POLLER_STOPPED
    });
  }

}

module.exports = PollerActionCreators;
