var React = require('react');
var EthPanel = require('./components/EthPanel.react');
var EthService = require('./services/EthService');

var service = new EthService('http://localhost:8545');
service.start();

React.render(
  <EthPanel />,
  document.getElementById('ethpanel')
);
