var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = AppConstants.ActionTypes;

var CHANGE_EVENT = 'change';

var _blocks = null;

var BlockStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _blocks;
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

BlockStore.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.type) {
    case ActionTypes.RECEIVE_LATEST_STATES:
      _blocks = action.states.blocks.slice(0, AppConstants.BlockListLimit);
      BlockStore.emitChange();
      break;
    default:
      // no op
  }
});

module.exports = BlockStore;
