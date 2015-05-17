var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = AppConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _default;
var _accounts = [];

var AccountStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _accounts;
  },

  getDefault: function() {
    return _default;
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

AccountStore.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.type) {
    case ActionTypes.RECEIVE_LATEST_STATES:
      _default  = action.states.defaultAccount;
      _accounts = action.states.accounts;
      break;
    default:
      // no op
  }
});

module.exports = AccountStore;
