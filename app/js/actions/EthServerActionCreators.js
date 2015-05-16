var AppDispatcher = require('../dispatcher/AppDispatcher');
var ActionTypes   = require('../constants/AppConstants').ActionTypes;

module.exports = {

  receiveLatestStates: function(states) {
    AppDispatcher.dispatch({
      type: ActionTypes.RECEIVE_LATEST_STATES,
      states: states
    });
  }

}
