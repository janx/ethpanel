var React = require('react');
var PropTypes = React.PropTypes;

var Card = require('./Card');
var PrettyPrint = require('../../utils/PrettyPrintUtils');

var Mining = React.createClass({

  propTypes: {
    mining: PropTypes.bool.isRequired,
    coinbase: PropTypes.string,
    hashrate: PropTypes.number
  },

  render: function() {
    var coinbase = this.props.coinbase ? PrettyPrint.fullHash(this.props.coinbase) :  'n/a';

    var detailStyle = {display: this.props.mining ? 'block' : 'none'};

    var items = [
      {name: 'Coinbase', text: coinbase},
      {name: 'Balance', text: PrettyPrint.fromWei(this.props.coinbaseBalance, 'ether').toString() + ' ethers'},
      {name: 'Hashrate', text: this.props.hashrate + " hashes/s"},
      {name: 'Gas Price', text: PrettyPrint.fromWei(this.props.gasPrice, 'szabo').toString() + ' szabo'}
    ];

    return (
      <Card title={'Mining'} items={items} />
    );
  }

});

module.exports = Mining;
