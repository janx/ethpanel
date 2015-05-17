var React = require('react');
var { RouteHandler } = require('react-router');

var NavMain = require('./NavMain');
var Footer = require('./Footer');

var NodeUtils = require('../utils/NodeUtils');

module.exports = React.createClass({

  componentWillMount: function() {
    this.setState({
      node: NodeUtils.getNode(this.props.params.id)
    });
  },

  render: function() {
    return (
      <div>
        <NavMain node={this.state.node} />
        <RouteHandler node={this.state.node} />
        <Footer />
      </div>
    );
  }

});
