var React = require('react');
var PropTypes = React.PropTypes;

var { Table } = require('react-bootstrap');

var MyAccountItem = require('./MyAccountItem');

var MyAccounts = React.createClass({

  propTypes: {
    default: PropTypes.string,
    coinbase: PropTypes.string,
    accounts: PropTypes.array.isRequired
  },

  render: function() {
    var items = this.props.accounts.map(function(account) {
      return (
        <MyAccountItem key={account.address} default={this.props.default} coinbase={this.props.coinbase} {...account} />
      );
    }.bind(this));

    if (this.props.accounts.length > 0) {
      var total = this.props.accounts.reduce(function(sum, account) {
        return account.balance.plus(sum);
      }, 0);
      items.push(
        <MyAccountItem key={'total'} default={this.props.default} coinbase={this.props.coinbase} address={'0xTotal'} balance={total} />
      );
    } else {
      items.push(
        <MyAccountItem key={'total'} default={this.props.default} coinbase={this.props.coinbase} address={'0xTotal'} balance={null} />
      );
    }

    return (
      <div className='accounts'>
        <h3>Accounts</h3>
        <Table hover>
          <thead>
            <tr>
              <th className='address'>Address</th>
              <th className='icons'></th>
              <th className='balance'>Balance (ethers)</th>
            </tr>
            <tbody>
              {items}
            </tbody>
          </thead>
        </Table>
      </div>
    );
  }

});

module.exports = MyAccounts;
