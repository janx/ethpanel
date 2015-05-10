var React = require('react');
var EthPanel = require('./components/EthPanel.react');
var EthPanelError = require('./components/EthPanelError.react');
var EthService = require('./services/EthService');

try {
  var service = new EthService('http://localhost:8545');
  service.start();

  React.render(
    <EthPanel />,
    document.getElementById('ethpanel')
  );
} catch(error) {
  React.render(
    <EthPanelError />,
    document.getElementById('ethpanel')
  );
}

