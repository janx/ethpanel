var React = require('react');

/*
 * React Components
 */
var Blocks = require('./Blocks.react');
var NetStats = require('./NetStats.react');
var Mining = require('./Mining.react');
var MyAccounts = require('./MyAccounts.react');

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

/*
 * Top controller-view
 */
var EthPanel = React.createClass({

  getInitialState: function() {
    return {
      netStats: StatsStore.getNetStats(),
      mining: StatsStore.getMining(),
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
    var title = "EthPanel - lala";

    var githubButton = (
      <IconButton
        iconStyle={{color: '#FFF', fill: '#FFF'}}
        iconClassName="muidocs-icon-custom-github"
        href="https://github.com/janx/ethpanel"
        linkButton={true} />
    );

    return (
      <AppCanvas predefinedLayout={1}>

        <AppBar
          className="mui-dark-theme"
          onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
          title={title}
          zDepth={0}
          iconElementRight={githubButton}/>

        <div className="app-content-canvas page-with-nav">
          <div className="page-with-nav-content">
            <NetStats {...this.state.netStats} />
            <Mining {...this.state.mining} />
            <MyAccounts {...this.state.myAccounts} />
            <Blocks blocks={this.state.blocks} />
          </div>
          <div className="page-with-nav-secondary-nav">
            <h1>haha</h1>
          </div>
        </div>

        <div className="footer full-width-section mui-dark-theme">
          <p>
            A <a href='http://material-ui.com'>Material UI</a> themed page. Created by <a href="https://twitter.com/janhxie">Jan</a> with love.
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

  onBlockChange: function() {
    this.setState({
      blocks: BlockStore.getAll()
    });
  },

  onStatsChange: function() {
    this.setState({
      netStats: StatsStore.getNetStats(),
      mining: StatsStore.getMining()
    });
  },

  onMyAccountsChange: function() {
    this.setState({
      myAccounts: AccountStore.getMyAccounts()
    });
  },

  onLeftIconButtonTouchTap: function() {
    this.refs.leftNav.toggle();
  }

})

EthPanel.childContextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = EthPanel;
