var React = require('react');
var PropTypes = React.PropTypes;

var { Alert } = require('react-bootstrap');

var PrettyPrintUtils = require('../../utils/PrettyPrintUtils');

var ConnectionStatus = React.createClass({

  propTypes: {
    node: PropTypes.object.isRequired,
    poller: PropTypes.object.isRequired
  },

  render: function() {
    var url = window.location.href;
    var arr = url.split("/");
    var domain = arr[0] + "//" + arr[2];

    var body;
    if(this.props.poller.status === 'failure') {
      body = (
        <Alert bsStyle='danger'>
          <h4>Connecton Error</h4>
          <p>Please check if your node is running, rpc is enabled, and <a href='http://en.wikipedia.org/wiki/Cross-origin_resource_sharing'>cross-origin resource sharing</a> is set correctly.</p>
          <p>If you're not sure, try the following parameters:</p>
          <p>&gt; geth --rpc --rpcport "{this.props.node.port}" --rpccorsdomain "{domain}"</p>
          <p>Error: {this.props.poller.error.message}</p>
        </Alert>
      );
    } else {
      body = <div />;
    }

    return body;
  }

});

module.exports = ConnectionStatus;
