var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _accounts = {
  my: {}
};

var AccountStore = assign({}, EventEmitter.prototype, {

  getMyAccounts: function() {
    return _accounts.my;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case AppConstants.MYETH_UPDATE_MY_ACCOUNTS:
      _accounts.my = action.accounts;
      break;
    default:
      // no op
  }
});

module.exports = AccountStore;
