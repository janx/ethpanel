var React = require('react');

var EthServerActionCreators = require('../actions/EthServerActionCreators');
var EthWebAPIUtils = require('../utils/EthWebAPIUtils');

/*
 * React Components
 */
var Blocks = require('./Blocks');
var Network = require('./Network');
var Mining = require('./Mining');
var MyAccounts = require('./MyAccounts');

/*
 * React Stores
 */
var BlockStore = require('../stores/BlockStore');
var StatsStore = require('../stores/StatsStore');
var AccountStore = require('../stores/AccountStore');

var _url, _poller;

function startPolling(endpoint) {
  _url = "http://" + endpoint;
  EthServerActionCreators.receiveLatestStates(EthWebAPIUtils.getLatestStates(_url));

  _poller = window.setInterval(function() {
    EthServerActionCreators.receiveLatestStates(EthWebAPIUtils.getLatestStates(_url));
  }, 2000);
}

function stopPolling() {
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

/*
 * Top controller-view
 */
var EthPanel = React.createClass({

  getInitialState: function() {
    return null;
  },

  componentDidMount: function() {
    BlockStore.addChangeListener(this._onChange);
    StatsStore.addChangeListener(this._onChange);
    AccountStore.addChangeListener(this._onChange);

    startPolling(this.props.endpoint);
  },

  componentWillUnmount: function() {
    BlockStore.removeChangeListener(this._onChange);
    StatsStore.removeChangeListener(this._onChange);
    AccountStore.removeChangeListener(this._onChange);

    stopPolling();
  },

  render: function() {
    var title = "EthPanel @ " + this.props.endpoint;

    var body;
    if( this.state ) {
      body = (
        <div className="app-content-canvas page-with-nav">
          <div className="columns">
            <div className='col1'>
              <Network {...this.state.network} />
              <Mining {...this.state.mining} />
            </div>
            <div className='col2'>
              <MyAccounts default={this.state.defaultAccount} coinbase={this.state.mining.coinbase} accounts={this.state.accounts} />
              <div style={{clear: 'both'}} />
            </div>
            <div className='col3'>
              <Blocks blocks={this.state.blocks} />
            </div>
          </div>
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

})

module.exports = EthPanel;
