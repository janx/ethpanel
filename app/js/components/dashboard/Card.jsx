var React = require('react');
var PropTypes = React.PropTypes;

var { Panel, ListGroup, ListGroupItem } = require('react-bootstrap');

var Card = React.createClass({

  propTypes: {
    title: PropTypes.string,
    items: PropTypes.array.isRequired
  },

  render: function() {
    var items = this.props.items.map(function(item) {
      return (
        <ListGroupItem key={item.name} header={item.text}>{item.name}</ListGroupItem>
      );
    });

    return (
      <Panel collapsible defaultExpanded header={this.props.title}>
        <ListGroup fill>
          {items}
        </ListGroup>
      </Panel>
    );
  }

});

module.exports = Card;
