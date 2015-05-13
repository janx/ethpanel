var React = require('react');
var PropTypes = React.PropTypes;

var Card = require('./Card');
var Utils = require('../services/UtilsService');

var Mining = React.createClass({

  propTypes: {
    mining: PropTypes.bool.isRequired,
    coinbase: PropTypes.string,
    hashrate: PropTypes.number
  },

  render: function() {
    var coinbase = Utils.fullHash(this.props.coinbase);

    var detailStyle = {display: this.props.mining ? 'block' : 'none'};

    var items = [
      {name: 'Coinbase', text: coinbase},
      {name: 'Balance', text: Utils.fromWei(this.props.coinbaseBalance, 'ether').toString() + ' ethers'},
      {name: 'Hashrate', text: this.props.hashrate + " hashes/s"},
      {name: 'Gas Price', text: Utils.fromWei(this.props.gasPrice, 'szabo').toString() + ' szabo'}
    ];

    return (
      <Card title={'Mining'} items={items} />
    );
  }

});

module.exports = Mining;
