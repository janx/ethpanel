var React = require('react');
var PropTypes = React.PropTypes;

var Stats = React.createClass({

  prototype: {
    blockNumber: PropTypes.number.isRequired
  },

  render: function() {
    return (
      <section id="stats">
        <div className='blockNumber'>{this.props.blockNumber}</div>
      </section>
    );
  }

});

module.exports = Stats;
