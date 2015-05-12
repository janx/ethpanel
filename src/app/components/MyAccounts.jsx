var React = require('react');
var PropTypes = React.PropTypes;

var MyAccountItem = require('./MyAccountItem');
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
      return (
        <MyAccountItem key={account.address} default={this.props.default} {...account} />
      );
    }.bind(this));

    return (
      <div className="card component-info accounts">
        <h3 className='mui-font-style-title'>My Accounts</h3>
        <table className='table'>
          <thead>
            <tr>
              <th className='address'>Address</th>
              <th className='mark'></th>
              <th className='balance'>Balance (ethers)</th>
            </tr>
          </thead>
          <tbody>
            {items}
            <MyAccountItem key={'total'} address={'0xTotal'} balance={total} />
          </tbody>
        </table>
      </div>
    );
  }

});

module.exports = MyAccounts;
