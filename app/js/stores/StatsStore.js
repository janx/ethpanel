var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = AppConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _stats = {
  net: {
    listening: false,
    peerCount: 0
  },
  mining: {
    mining: false,
    coinbase: '',
    coinbaseBalance: null,
    hashrate: null,
    gasPrice: null
  }
};

var StatsStore = assign({}, EventEmitter.prototype, {

  getNetwork: function() {
    return _stats.net;
  },

  getMining: function() {
    return _stats.mining;
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

StatsStore.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.type) {
    case ActionTypes.RECEIVE_LATEST_STATES:
      _stats.net = action.states.network;
      _stats.mining = action.states.mining;
      StatsStore.emitChange();
      break;
    default:
      // no op
  }
});

module.exports = StatsStore;
