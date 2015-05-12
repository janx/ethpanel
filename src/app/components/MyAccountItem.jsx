var React = require('react');
var PropTypes = React.PropTypes;
var cx = require('classnames');
var Utils = require('../services/UtilsService');

var MyAccountItem = React.createClass({
  propTypes: {
    address: PropTypes.string.isRequired,
    balance: PropTypes.object.isRequired,
    default: PropTypes.string
  },

  render: function() {
    var classes = cx({default: (this.props.default === this.props.address)});
    return (
      <tr className={classes}>
        <td>{Utils.fullHash(this.props.address)}</td>
        <td>{Utils.fromWei(this.props.balance, 'ether').toFixed(4)}</td>
      </tr>
    );
  }
});

module.exports = MyAccountItem;
