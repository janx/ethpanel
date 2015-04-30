var web3 = require('web3');
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
window.web3 = web3;

var React = require('react');
var MyEthApp = require('./components/MyEthApp.react');

React.render(
  <MyEthApp />,
  document.getElementById('myeth')
);
