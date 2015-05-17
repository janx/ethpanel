var React = require('react');
var { RouteHandler } = require('react-router');

/*
 * React Helpers
 */
var EthServerActionCreators = require('../actions/EthServerActionCreators');
var EthWebAPIUtils = require('../utils/EthWebAPIUtils');

/*
 * React Components
 */
var Blocks = require('./dashboard/Blocks');
var Network = require('./dashboard/Network');
var Mining = require('./dashboard/Mining');
var MyAccounts = require('./dashboard/MyAccounts');

/*
 * React Stores
 */
var BlockStore = require('../stores/BlockStore');
var StatsStore = require('../stores/StatsStore');
var AccountStore = require('../stores/AccountStore');

var _url, _poller;

function startPolling(host, port) {
  console.log("start watching ...");

  _url = "http://" + host + ':' + port;
  EthServerActionCreators.receiveLatestStates(EthWebAPIUtils.getLatestStates(_url));

  _poller = window.setInterval(function() {
    EthServerActionCreators.receiveLatestStates(EthWebAPIUtils.getLatestStates(_url));
  }, 2000);
}

function stopPolling() {
  console.log("stop watching ...");

  window.clearInterval(_poller);
  _poller = _url = undefined;
}

function getStatesFromStores() {
  return {
    defaultAccount: AccountStore.getDefault(),
    accounts: AccountStore.getAll(),
    blocks: BlockStore.getAll(),
    network: StatsStore.getNetwork(),
    mining: StatsStore.getMining()
  };
}

module.exports = React.createClass({

  getInitialState: function() {
    return null;
  },

  componentDidMount: function() {
    BlockStore.addChangeListener(this._onChange);
    StatsStore.addChangeListener(this._onChange);
    AccountStore.addChangeListener(this._onChange);

    startPolling.apply(this, this.props.nodeId.split('@'));
  },

  componentWillUnmount: function() {
    BlockStore.removeChangeListener(this._onChange);
    StatsStore.removeChangeListener(this._onChange);
    AccountStore.removeChangeListener(this._onChange);

    stopPolling();
  },

  render: function() {
    var body;
    if( this.state ) {
      body = (
        <div>
          <Network {...this.state.network} />
          <Mining {...this.state.mining} />
          <MyAccounts default={this.state.defaultAccount} coinbase={this.state.mining.coinbase} accounts={this.state.accounts} />
          <Blocks blocks={this.state.blocks} />
        </div>
      );
    } else {
      body = (
        <h1>Loading ...</h1>
      );
    }

    return body;
  },

  _onChange: function() {
    this.setState(getStatesFromStores());
  }

});
