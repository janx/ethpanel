var AppConstants = require('../constants/AppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

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

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case AppConstants.MYETH_SETUP_BLOCKS:
      _blocks = action.blocks;
      BlockStore.emitChange();
      break;
    default:
      // no op
  }
});

module.exports = BlockStore;