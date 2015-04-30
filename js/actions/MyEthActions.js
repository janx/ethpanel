var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var MyEthActions = {

  setupBlocks: function(blocks) {
    AppDispatcher.dispatch({
      actionType: AppConstants.MYETH_SETUP_BLOCKS,
      blocks: blocks
    });
  },

  newBlock: function(block) {
    AppDispatcher.dispatch({
      actionType: AppConstants.MYETH_NEW_BLOCK,
      block: block
    });
  },

  updateNetStats: function(stats) {
    AppDispatcher.dispatch({
      actionType: AppConstants.MYETH_UPDATE_NET_STATS,
      stats: stats
    });
  }

};

module.exports = MyEthActions;
