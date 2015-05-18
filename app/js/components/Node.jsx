var React = require('react');
var { RouteHandler } = require('react-router');

var DocumentTitle = require('react-document-title');

var PrettyPrintUtils = require('../utils/PrettyPrintUtils');

var NavMain = require('./NavMain');
var Footer = require('./Footer');

module.exports = React.createClass({

  componentWillMount: function() {
    this.setState({
      node: this.props.params
    });
  },

  render: function() {
    var title = 'EthPanel @ ' + PrettyPrintUtils.nodeName(this.state.node);
    return (
      <DocumentTitle title={title}>
        <div>
          <NavMain node={this.state.node} />
          <RouteHandler node={this.state.node} />
        </div>
      </DocumentTitle>
    );
  }

});
