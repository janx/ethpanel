(function () {
  var React = require('react');
  var EthPanel = require('./components/EthPanel');
  var EthPanelError = require('./components/EthPanelError');
  var EthService = require('./services/EthService');
  var injectTapEventPlugin = require("react-tap-event-plugin");

  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  try {
    var endpoint = 'localhost:8545';
    var service = new EthService('http://' + endpoint);
    service.start();

    React.render(
      <EthPanel endpoint={endpoint} />,
      document.body
    );
  } catch(error) {
    React.render(
      <EthPanelError />,
      document.body
    );
    throw error;
  }
})();
