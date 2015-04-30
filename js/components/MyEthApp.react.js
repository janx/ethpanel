var React = require('react');
var Blocks = require('./Blocks.react');
var NetStats = require('./NetStats.react');
var BlockStore = require('../stores/BlockStore');
var StatsStore = require('../stores/StatsStore');

var MyEthApp = React.createClass({

  getInitialState: function() {
    return {
      netStats: StatsStore.getNetStats(),
      blocks: BlockStore.getAll()
    };
  },

  componentDidMount: function() {
    BlockStore.addChangeListener(this._onBlockChange);
    StatsStore.addChangeListener(this._onStatsChange);
  },

  componentWillUnmount: function() {
    BlockStore.removeChangeListener(this._onBlockChange);
    StatsStore.removeChangeListener(this._onStatsChange);
  },

  render: function() {
    return (
      <div id='myeth'>
        <NetStats {...this.state.netStats} />
        <Blocks blocks={this.state.blocks} />
      </div>
    );
  },

  _onBlockChange: function() {
    this.setState({
      blocks: BlockStore.getAll()
    });
  },

  _onStatsChange: function() {
    this.setState({
      netStats: StatsStore.getNetStats()
    });
  }

})

module.exports = MyEthApp;
