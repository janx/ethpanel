(function () {
  require('bootstrap/less/bootstrap.less');
  require('../css/main.less');

  var React = require('react');
  var Router = require('react-router');

  var routes = require('./routes');

  //Needed for React Developer Tools
  window.React = React;

  Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
  });

})();
