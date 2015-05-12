var React = require('react');
var PropTypes = React.PropTypes;
var MyAccountItem = require('./MyAccountItem.react');
var Utils = require('../services/UtilsService');

var MyAccounts = React.createClass({

  propTypes: {
    default: PropTypes.string,
    accounts: PropTypes.array.isRequired
  },

  render: function() {
    var accounts = [];
    this.props.accounts.forEach(function(account) {
      accounts.push(<MyAccountItem key={account.address} default={this.props.default} {...account} />)
    }.bind(this));

    var total = this.props.accounts.reduce(function(sum, account) {
      return account.balance.plus(sum);
    }, 0);

    return (
      <div className="myAccounts">
        <h2>My Accounts</h2>
        <table className='list'>
          <thead>
            <tr>
              <th>Address</th>
              <th>Balance (ethers)</th>
            </tr>
          </thead>
          <tbody>
            {accounts}
            <tr>
              <td>Total:</td>
              <td>{Utils.fromWei(total, 'ether').toFixed(4)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

});

module.exports = MyAccounts;
