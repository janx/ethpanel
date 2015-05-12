(function () {
  var React = require('react');
  var EthPanel = require('./components/EthPanel.react');
  var EthPanelError = require('./components/EthPanelError.react');
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
    var service = new EthService('http://localhost:8545');
    service.start();

    React.render(
      <EthPanel />,
      document.body
    );
  } catch(error) {
    React.render(
      <EthPanelError />,
      document.body
    );
  }
})();
