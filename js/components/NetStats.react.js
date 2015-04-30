var React = require('react');
var PropTypes = React.PropTypes;

var NetStats = React.createClass({

  propTypes: {
    listening: PropTypes.bool.isRequired,
    peerCount: PropTypes.number.isRequired
  },

  render: function() {
    return (
      <div className="netStats">
        <div className='listening'>
          <span className='name'>Listening:</span> {this.props.listening.toString()}
        </div>
        <div className='peerCount'>
          <span className='name'>Peer Count:</span> {this.props.peerCount}
        </div>
      </div>
    );
  }

});

module.exports = NetStats;
