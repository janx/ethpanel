var React = require('react');
var { RouteHandler } = require('react-router');

var NavMain = require('./NavMain');
var Footer = require('./Footer');

module.exports = React.createClass({

  componentWillMount: function() {
    this.setState({
      node: this.props.params
    });
  },

  render: function() {
    return (
      <div>
        <NavMain node={this.state.node} />
        <RouteHandler node={this.state.node} />
      </div>
    );
  }

});
