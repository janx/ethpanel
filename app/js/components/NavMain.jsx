var React = require('react');
var { Link } = require('react-router');
var { Navbar, Nav } = require('react-bootstrap');

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
    var brand = <Link to='root' className='navbar-brand'>EthPanel</Link>;
    var links = Object.keys(_links).map(this._renderNavItem).concat([
      <li key='stats-link'>
        <a href='https://stats.ethdev.com' target='_blank'>Stats</a>
      </li>,
      <li key='github-link'>
        <a href='https://github.com/janx/ethpanel' target='_blank'>Github</a>
      </li>
    ]);

    return (
      <Navbar componentClass='header' brand={brand} fluid inverse staticTop className='ep-navbar' role='banner' toggleNavKey={0}>
        <Nav className='ep-nav-collapse' role='navigation' eventKey={0} id='top'>
          {links}
        </Nav>
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
