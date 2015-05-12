var React = require('react');
var PropTypes = React.PropTypes;

var Card = require('./Card');
var Utils = require('../services/UtilsService');

var MyAccounts = React.createClass({

  propTypes: {
    default: PropTypes.string,
    accounts: PropTypes.array.isRequired
  },

  render: function() {
    var total = this.props.accounts.reduce(function(sum, account) {
      return account.balance.plus(sum);
    }, 0);

    var items = this.props.accounts.map(function(account) {
      return {
        name: Utils.fullHash(account.address),
        text: this.prettyBalance(account.balance)
      };
    }.bind(this));
    items.push({name: 'Total', text: this.prettyBalance(total)});

    return (
      <Card title={'My Accounts'} items={items} />
    );
  },

  prettyBalance: function(balance) {
    return Utils.fromWei(balance, 'ether').toFixed(4) + ' ethers';
  }

});

module.exports = MyAccounts;
