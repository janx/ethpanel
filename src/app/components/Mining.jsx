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
    var detailStyle = {display: this.props.mining ? 'block' : 'none'};

    var items = [
      {name: 'Mining', text: this.props.mining.toString()},
      {name: 'Hashrate', text: this.props.hashrate + " hashes/s"},
      {name: 'Gas Price', text: Utils.fromWei(this.props.gasPrice, 'szabo').toString() + ' szabo'}
    ];

    return (
      <Card title={'Mining'} items={items} />
    );
  }

});

module.exports = Mining;
