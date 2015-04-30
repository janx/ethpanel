var React = require('react');
var MyEthApp = require('./components/MyEthApp.react');
var EthService = require('./services/EthService');

var service = new EthService('http://localhost:8545');
service.start();

React.render(
  <MyEthApp />,
  document.getElementById('myeth')
);
