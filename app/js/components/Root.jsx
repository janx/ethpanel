var React = require('react');
var { RouteHandler } = require('react-router');

var NavMain = require('./NavMain');
var Footer = require('./Footer');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <NavMain />

        <RouteHandler />

        <Footer />
      </div>
    );
  }

});
