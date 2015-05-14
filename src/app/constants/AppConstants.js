var keyMirror = require('keymirror');

module.exports = {

  BlockFetchLimit: 20,
  BlockListLimit:  20,

  ActionTypes: keyMirror({
    RECEIVE_LATEST_STATES: null
  })

};
