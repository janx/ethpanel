var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var EthPanelActions = {

  ethServiceUpdate: function(data) {
    AppDispatcher.dispatch({
      actionType: AppConstants.MYETH_SERVICE_UPDATE,
      data: data
    });
  }

};

module.exports = EthPanelActions;
