var React = require('react');
var PropTypes = React.PropTypes;
var Utils = require('../services/UtilsService');

var MyAccounts = React.createClass({

  propTypes: {
    default: PropTypes.string
  },

  render: function() {
    return (
      <div className="myAccounts">
        <div className='default'>
          <span className='name'>Default Account:</span> {this.props.default}
        </div>
      </div>
    );
  }

});

module.exports = MyAccounts;
