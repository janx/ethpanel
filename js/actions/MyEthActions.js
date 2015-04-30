var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var MyEthActions = {

  setupBlocks: function(blocks) {
    AppDispatcher.dispatch({
      actionType: AppConstants.MYETH_SETUP_BLOCKS,
      blocks: blocks
    });
  },

  setupNetStats: function(stats) {
    AppDispatcher.dispatch({
      actionType: AppConstants.MYETH_UPDATE_NET_STATS,
      stats: stats
    });
  },

  newBlock: function(block) {
    AppDispatcher.dispatch({
      actionType: AppConstants.MYETH_NEW_BLOCK,
      block: block
    });
  }

};

module.exports = MyEthActions;
