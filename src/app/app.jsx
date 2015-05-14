(function () {
  var React = require('react');
  var EthPanel = require('./components/EthPanel');
  var EthPanelError = require('./components/EthPanelError');
  var EthWebAPIUtils = require('./utils/EthWebAPIUtils');
  var injectTapEventPlugin = require("react-tap-event-plugin");

  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  React.render(
    <EthPanel endpoint={'localhost:8545'} />,
    document.body
  );
})();
