var React = require('react');
var PropTypes = React.PropTypes;

var Paper = require('material-ui').Paper;

var NetStats = React.createClass({

  propTypes: {
    listening: PropTypes.bool.isRequired,
    peerCount: PropTypes.number.isRequired
  },

  render: function() {
    return (
      <Paper zDepth={3}>
        <div className="netStats">
          <div className='listening'>
            <span className='name'>Listening:</span> {this.props.listening.toString()}
          </div>
          <div className='peerCount'>
            <span className='name'>Peer Count:</span> {this.props.peerCount}
          </div>
        </div>
      </Paper>
    );
  }

});

module.exports = NetStats;
