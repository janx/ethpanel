var React = require('react');
var { RouteHandler } = require('react-router');

module.exports = React.createClass({

  render: function() {
    return (
      <RouteHandler nodeId={this.props.params.id} />
    );
  }

});
