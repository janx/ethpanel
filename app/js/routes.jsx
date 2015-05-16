var React = require('react');

var { Route, DefaultRoute } = require('react-router');

var Root = require('./components/Root');
var Dashboard = require('./components/Dashboard');
var Blocks = require('./components/Blocks');

module.exports = (
  <Route name='root' path="/" handler={Root}>
    <DefaultRoute name="dashboard" handler={Dashboard} />

    <Route name='blocks' path='blocks' handler={Blocks} />
  </Route>
);
