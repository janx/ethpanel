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

/*
 * material-ui
 */
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var { AppBar, AppCanvas, Menu, IconButton } = mui;

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

    var githubButton = (
      <IconButton
        iconStyle={{color: '#FFF', fill: '#FFF'}}
        iconClassName="muidocs-icon-custom-github"
        href="https://github.com/janx/ethpanel"
        linkButton={true} />
    );

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
        <div className="app-content-canvas page-with-nav" style={{height: 640}}>
          <h1>Loading ...</h1>
        </div>
      );
    }

    return (
      <AppCanvas predefinedLayout={1}>

        <AppBar
          className="mui-dark-theme"
          onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
          title={title}
          zDepth={0}
          iconElementRight={githubButton}/>

        {body}

        <div className="footer full-width-section mui-dark-theme">
          <p>
            <a href='http://material-ui.com'>Material UI</a> theme &amp; created by <a href="https://twitter.com/janhxie">Jan</a>.
          </p>
          {githubButton}
        </div>

      </AppCanvas>
    );
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  },

  _onChange: function() {
    this.setState(getStatesFromStores());
  },

  onLeftIconButtonTouchTap: function() {
    this.refs.leftNav.toggle();
  }

})

EthPanel.childContextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = EthPanel;
