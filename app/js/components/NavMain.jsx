var React = require('react');
var { Link } = require('react-router');
var { Navbar, CollapsibleNav, Nav, NavItem } = require('react-bootstrap');

var PrettyPrintUtils = require('../utils/PrettyPrintUtils');

var _links = {
  'blocks': {
    link: 'blocks',
    title: 'Blocks'
  }
};

module.exports = React.createClass({
  propTypes: {
    activePage: React.PropTypes.string
  },

  render: function() {
    var brand = <Link to='dashboard' params={this.props.node} className='navbar-brand'>{PrettyPrintUtils.nodeName(this.props.node)}</Link>;

    var leftLinks = Object.keys(_links).map(this._renderNavItem)
    var rightLinks = [
      <li key='stats-link'>
        <a href='https://stats.ethdev.com' target='_blank'>Stats</a>
      </li>,
      <li key='github-link'>
        <a href='https://github.com/janx/ethpanel' target='_blank'>EthPanel</a>
      </li>
    ];

    return (
      <Navbar brand={brand} inverse fixedTop toggleNavKey={0}>
        <CollapsibleNav eventKey={0}>
          <Nav navbar>
            {leftLinks}
          </Nav>
          <Nav navbar right>
            {rightLinks}
          </Nav>
        </CollapsibleNav>
      </Navbar>
    );
  },

  _renderNavItem: function(name) {
    var link = _links[name];

    return (
      <li className={this.props.activePage === name ? 'active' : null} key={name}>
        <Link to={link.link}>{link.title}</Link>
      </li>
    );
  }

});
