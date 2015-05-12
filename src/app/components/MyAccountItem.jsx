var React = require('react');
var PropTypes = React.PropTypes;
var Utils = require('../services/UtilsService');

var MyAccountItem = React.createClass({
  propTypes: {
    address: PropTypes.string.isRequired,
    balance: PropTypes.object.isRequired,
    default: PropTypes.string
  },

  render: function() {
    return (
      <tr>
        <td>{Utils.fullHash(this.props.address)}</td>
        <td>{this.icons()}</td>
        <td>{Utils.fromWei(this.props.balance, 'ether').toFixed(4)}</td>
      </tr>
    );
  },

  icons: function() {
    var icons = [];
    if (this.props.default === this.props.address) {
      icons.push(<span title='This is the default address.' className='muidocs-icon-action-home' />);
    }
    if (this.props.coinbase === this.props.address) {
      icons.push(<span title='This is the coinbase address.' className='muidocs-icon-action-stars' />);
    }
    return icons;
  }
});

module.exports = MyAccountItem;
