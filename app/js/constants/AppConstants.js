var keyMirror = require('keymirror');

module.exports = {

  BlockFetchLimit: 20,
  BlockListLimit:  20,

  ActionTypes: keyMirror({
    RECEIVE_LATEST_STATES: null,
    POLLER_START_SUCCESS: null,
    POLLER_START_ERROR: null,
    POLLER_STOPPED: null
  })

};
