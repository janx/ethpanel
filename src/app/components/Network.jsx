var React = require('react');
var PropTypes = React.PropTypes;

var Card = require('./Card');

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
      <Card title={'Network'} items={items} />
    );
  }

});

module.exports = Network;
