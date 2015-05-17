var React = require('react');
var { RouteHandler } = require('react-router');

var { Grid, Row, Col } = require('react-bootstrap');

/*
 * React Helpers
 */
var EthServerActionCreators = require('../actions/EthServerActionCreators');
var EthWebAPIUtils = require('../utils/EthWebAPIUtils');

/*
 * React Components
 */
var Blocks = require('./dashboard/Blocks');
var MyAccounts = require('./dashboard/MyAccounts');
var Stats = require('./dashboard/Stats');

/*
 * React Stores
 */
var BlockStore = require('../stores/BlockStore');
var StatsStore = require('../stores/StatsStore');
var AccountStore = require('../stores/AccountStore');

var _url, _poller;

function startPolling(node) {
  console.log("start watching ...");

  _url = "http://" + node.host + ':' + node.port;
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

    startPolling(this.props.node);
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
        <Grid className='dashboard'>
          <Row>
            <Col md={6}>
              <MyAccounts default={this.state.defaultAccount} coinbase={this.state.mining.coinbase} accounts={this.state.accounts} />
            </Col>
            <Col md={6}>
              <Blocks blocks={this.state.blocks} />
            </Col>
          </Row>
          <Stats network={this.state.network} mining={this.state.mining} />
        </Grid>
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
