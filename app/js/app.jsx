(function () {
  var React = require('react');
  var EthPanel = require('./components/EthPanel');
  var EthPanelError = require('./components/EthPanelError');
  var EthWebAPIUtils = require('./utils/EthWebAPIUtils');

  //Needed for React Developer Tools
  window.React = React;

  try {
    React.render(
      <EthPanel endpoint={'localhost:8545'} />,
        document.body
    )
  } catch(error) {
    React.render(
      <EthPanelError />,
      document.body
    );
    throw error;
  }

})();
