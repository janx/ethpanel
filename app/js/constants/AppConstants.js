var keyMirror = require('keymirror');

module.exports = {

  BlockFetchLimit: 20,
  BlockListLimit:  20,

  ActionTypes: keyMirror({
    RECEIVE_LATEST_STATES: null,
    POLLER_RECEIVED_SUCCESS: null,
    POLLER_RECEIVED_FAILURE: null,
    POLLER_STOPPED: null
  })

};
