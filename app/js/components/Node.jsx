var React = require('react');
var { RouteHandler } = require('react-router');

var NavMain = require('./NavMain');
var Footer = require('./Footer');

module.exports = React.createClass({

  componentWillMount: function() {
    var node = this.props.params.id.split('@');
    this.setState({
      node: {
        host: node[0],
        port: node[1]
      }
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
