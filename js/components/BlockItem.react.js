var React = require('react');
var PropTypes = React.PropTypes;
var moment = require('moment');

function prettyHash(hash) {
  return hash.slice(2, 34);
}

function prettyTime(timestamp) {
  return moment.unix(timestamp).format("HH:mm:ss");
}

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
        <td>{prettyHash(this.props.hash)}</td>
        <td>{prettyTime(this.props.timestamp)}</td>
        <td>{this.props.transactions.length}</td>
      </tr>
    );
  }
});

module.exports = BlockItem;
