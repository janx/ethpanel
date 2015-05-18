var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = AppConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _status = 'init', _error = null;

var PollerStore = assign({}, EventEmitter.prototype, {

  getStatus: function() {
    return {status: _status, error: _error};
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

PollerStore.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.type) {
    case ActionTypes.POLLER_RECEIVED_SUCCESS:
      _status = 'success';
      _error = null;
      PollerStore.emitChange();
      break;
    case ActionTypes.POLLER_RECEIVED_FAILURE:
      _status = 'failure';
      _error = action.error;
      PollerStore.emitChange();
      break;
    case ActionTypes.POLLER_STOPPED:
      _status = 'stopped';
      _error = null;
      PollerStore.emitChange();
      break;
    default:
      // no op
  }
});

module.exports = PollerStore;
