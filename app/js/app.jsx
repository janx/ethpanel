(function () {
  require('bootstrap/less/bootstrap.less');
  require('../css/main.less');

  var React = require('react');
  var Router = require('react-router');

  var routes = require('./routes');

  //var EthPanel = require('./components/EthPanel');
  //var EthPanelError = require('./components/EthPanelError');

  //Needed for React Developer Tools
  window.React = React;

  Router.run(routes, function(Handler) {
    React.render(<Handler />, document.body);
  });

  /*
  try {
    React.render(
      <EthPanel endpoint={'localhost:8545'} />,
        document.body
    )
  } catch(error) {
    React.render(
      <EthPanelError />,
      document.body
    );
    throw error;
  }
  */

})();
