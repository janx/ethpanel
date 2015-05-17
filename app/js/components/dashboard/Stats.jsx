var React = require('react');
var PropTypes = React.PropTypes;

var { Navbar, Nav, NavItem, Row, Col } = require('react-bootstrap');

var Network = require('./Network');
var Mining = require('./Mining');

var Stats = React.createClass({

  render: function() {
    return (
      <Navbar inverse fixedBottom className='stats'>
        <Row>
          <Col md={12}>
            <Network {...this.props.network} />
            <Mining {...this.props.mining} />
          </Col>
        </Row>
      </Navbar>
    );
  }

});

module.exports = Stats;
