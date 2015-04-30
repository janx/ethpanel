var React = require('react');

/*
 * React Components
 */
var Blocks = require('./Blocks.react');
var NetStats = require('./NetStats.react');
var MyAccounts = require('./MyAccounts.react');

/*
 * React Stores
 */
var BlockStore = require('../stores/BlockStore');
var StatsStore = require('../stores/StatsStore');
var AccountStore = require('../stores/AccountStore');

/*
 * Top controller-view
 */
var MyEthApp = React.createClass({

  getInitialState: function() {
    return {
      netStats: StatsStore.getNetStats(),
      myAccounts: AccountStore.getMyAccounts(),
      blocks: BlockStore.getAll()
    };
  },

  componentDidMount: function() {
    BlockStore.addChangeListener(this.onBlockChange);
    StatsStore.addChangeListener(this.onStatsChange);
    AccountStore.addChangeListener(this.onMyAccountsChange);
  },

  componentWillUnmount: function() {
    BlockStore.removeChangeListener(this.onBlockChange);
    StatsStore.removeChangeListener(this.onStatsChange);
    AccountStore.removeChangeListener(this.onMyAccountsChange);
  },

  render: function() {
    return (
      <div id='myeth'>
        <NetStats {...this.state.netStats} />
        <MyAccounts {...this.state.myAccounts} />
        <Blocks blocks={this.state.blocks} />
      </div>
    );
  },

  onBlockChange: function() {
    this.setState({
      blocks: BlockStore.getAll()
    });
  },

  onStatsChange: function() {
    this.setState({
      netStats: StatsStore.getNetStats()
    });
  },

  onMyAccountsChange: function() {
    this.setState({
      myAccounts: AccountStore.getMyAccounts()
    });
  }

})

module.exports = MyEthApp;
