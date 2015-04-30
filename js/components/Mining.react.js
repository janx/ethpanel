var React = require('react');
var PropTypes = React.PropTypes;
var Utils = require('../services/UtilsService');

var Mining = React.createClass({

  propTypes: {
    mining: PropTypes.bool.isRequired,
    coinbase: PropTypes.string,
    hashrate: PropTypes.number,
    fromWei: PropTypes.func
  },

  render: function() {
    var detailStyle = {display: this.props.mining ? 'block' : 'none'};

    return (
      <div className="mining">
        <div className='enabled'>
          <span className='name'>Mining:</span> {this.props.mining.toString()}
        </div>
        <div className='coinbase' style={detailStyle}>
          <span className='name'>Coinbase:</span> {Utils.prettyHash(this.props.coinbase)}
        </div>
        <div className='hashrate' style={detailStyle}>
          <span className='name'>Hashrate:</span> {this.props.hashrate} hashes/s
        </div>
        <div className='gasPrice' style={detailStyle}>
          <span className='name'>Gas Price:</span> {this.props.fromWei(this.props.gasPrice, 'szabo').toString()} szabo
        </div>
      </div>
    );
  }

});

module.exports = Mining;
