var React = require('react');
var PropTypes = React.PropTypes;
var Utils = require('../services/UtilsService');

var BlockItem = React.createClass({
  propTypes: {
    number: PropTypes.number.isRequired,
    hash: PropTypes.string.isRequired,
    transactions: PropTypes.array.isRequired,
    timestamp: PropTypes.number.isRequired
  },

  render: function() {
    return (
      <tr>
        <td>{this.props.number}</td>
        <td title={Utils.fullHash(this.props.hash)}>{Utils.prettyHash(this.props.hash)}</td>
        <td>{Utils.prettyTime(this.props.timestamp)}</td>
        <td>{this.props.transactions.length}</td>
      </tr>
    );
  }
});

module.exports = BlockItem;
