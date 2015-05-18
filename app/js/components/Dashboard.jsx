var React = require('react');
var { RouteHandler } = require('react-router');

var { Grid, Row, Col } = require('react-bootstrap');

/*
 * React Helpers
 */
var EthServerActionCreators = require('../actions/EthServerActionCreators');
var PollerActionCreators = require('../actions/PollerActionCreators');
var EthWebAPIUtils = require('../utils/EthWebAPIUtils');

/*
 * React Components
 */
var ConnectionStatus = require('./dashboard/ConnectionStatus');
var Blocks = require('./dashboard/Blocks');
var MyAccounts = require('./dashboard/MyAccounts');
var Stats = require('./dashboard/Stats');

/*
 * React Stores
 */
var BlockStore = require('../stores/BlockStore');
var StatsStore = require('../stores/StatsStore');
var AccountStore = require('../stores/AccountStore');
var PollerStore = require('../stores/PollerStore');

function getStatesFromStores() {
  return {
    defaultAccount: AccountStore.getDefault(),
    accounts: AccountStore.getAll(),
    blocks: BlockStore.getAll(),
    network: StatsStore.getNetwork(),
    mining: StatsStore.getMining(),
    poller: PollerStore.getStatus()
  };
}

module.exports = React.createClass({

  getInitialState: function() {
    return getStatesFromStores();
  },

  componentDidMount: function() {
    BlockStore.addChangeListener(this._onChange);
    StatsStore.addChangeListener(this._onChange);
    AccountStore.addChangeListener(this._onChange);
    PollerStore.addChangeListener(this._onChange);

    PollerActionCreators.startPolling(this.props.node, 2000);
  },

  componentWillUnmount: function() {
    BlockStore.removeChangeListener(this._onChange);
    StatsStore.removeChangeListener(this._onChange);
    AccountStore.removeChangeListener(this._onChange);
    PollerStore.removeChangeListener(this._onChange);

    PollerActionCreators.stopPolling();
  },

  render: function() {
    return (
      <Grid className='dashboard'>
        <ConnectionStatus node={this.props.node} poller={this.state.poller} />
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
  },

  _onChange: function() {
    this.setState(getStatesFromStores());
  }

});
