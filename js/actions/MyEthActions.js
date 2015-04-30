var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var MyEthActions = {

  ethServiceUpdate: function(data) {
    AppDispatcher.dispatch({
      actionType: AppConstants.MYETH_SERVICE_UPDATE,
      data: data
    });
  }

};

module.exports = MyEthActions;
