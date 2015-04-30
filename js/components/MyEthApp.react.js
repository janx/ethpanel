var React = require('react');
var Stats = require('./Stats.react');
var ChainStore = require('../stores/ChainStore');

function getStats() {
  return {
    blockNumber: ChainStore.getBlockNumber()
  };
}

var MyEthApp = React.createClass({

  getInitialState: function() {
    return {
      stats: getStats()
    };
  },

  render: function() {
    return (
      <div id='myeth'>
        <Stats {...this.state.stats} />
      </div>
    );
  }

})

module.exports = MyEthApp;
