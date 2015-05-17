var React = require('react');
var PropTypes = React.PropTypes;

var StatButtons = require('./StatButtons');

var Network = React.createClass({

  propTypes: {
    listening: PropTypes.bool.isRequired,
    peerCount: PropTypes.number.isRequired
  },

  render: function() {
    var items = [
      {name: 'Listening', text: this.props.listening.toString()},
      {name: 'Peer Count', text: this.props.peerCount}
    ];

    return (
      <StatButtons title={'Network'} items={items} buttonStyle='info' />
    );
  }

});

module.exports = Network;
