var React = require('react');
var { Link } = require('react-router');
var { Navbar, CollapsibleNav, Nav, NavItem } = require('react-bootstrap');

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
      <Navbar brand={brand} fluid inverse fixedTop toggleNavKey={0}>
        <CollapsibleNav eventKey={0}>
          <Nav navbar>
            {links}
          </Nav>
          <Nav navbar right>
            <li>
              <Link to='dashboard' params={this.props.node}>
                {this._nodeName(this.props.node)}
              </Link>
            </li>
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
  },

  _nodeName: function(node) {
    if(node) {
      return node.host + ':' + node.port;
    } else {
      return '';
    }
  }

});
