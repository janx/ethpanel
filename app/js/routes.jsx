var React = require('react');

var { Route, DefaultRoute, Redirect } = require('react-router');

var Root = require('./components/Root');
var Node = require('./components/Node');
var Dashboard = require('./components/Dashboard');
var Blocks = require('./components/Dashboard');

module.exports = (
  <Route name='root' path="/" handler={Root}>
    <Route name='nodes' path="nodes" handler={Node}>
      <Route name='blocks' path='blocks' handler={Blocks} />
      <Route name='dashboard' path=':host/:port' handler={Dashboard} />
    </Route>

    <Redirect from='/' to='/nodes/localhost/8545' />
  </Route>
);
