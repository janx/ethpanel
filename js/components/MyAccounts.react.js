var React = require('react');
var PropTypes = React.PropTypes;

var MyAccounts = React.createClass({

  propTypes: {
    default: PropTypes.string,
    coinbase: PropTypes.string
  },

  render: function() {
    return (
      <div className="myAccounts">
        <div className='default'>
          <span className='name'>Default Account:</span> {this.props.default}
        </div>
        <div className='coinbase'>
          <span className='name'>Coinbase:</span> {this.props.coinbase}
        </div>
      </div>
    );
  }

});

module.exports = MyAccounts;
