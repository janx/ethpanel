var React = require('react');

var { Route, DefaultRoute } = require('react-router');

var Root = require('./components/Root');
var Node = require('./components/Node');
var Dashboard = require('./components/Dashboard');
var Blocks = require('./components/Dashboard');

module.exports = (
  <Route name='root' path="/" handler={Root}>
    <Route name='nodes' path="nodes" handler={Node}>
      <Route name='blocks' path='blocks' handler={Blocks} />
      <Route name='dashboard' path=':id' handler={Dashboard} />
    </Route>
  </Route>
);
