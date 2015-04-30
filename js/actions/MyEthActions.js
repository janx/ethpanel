var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var MyEthActions = {

  setupBlocks: function(blocks) {
    AppDispatcher.dispatch({
      actionType: AppConstants.MYETH_SETUP_BLOCKS,
      blocks: blocks
    });
  }

};

module.exports = MyEthActions;
