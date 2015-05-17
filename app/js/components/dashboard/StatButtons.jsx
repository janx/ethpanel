var React = require('react');
var PropTypes = React.PropTypes;

var { Badge, ButtonToolbar, Button } = require('react-bootstrap');

var StatButtons = React.createClass({

  propTypes: {
    title: PropTypes.string,
    items: PropTypes.array.isRequired
  },

  render: function() {
    var title = (
      <Button key='title'>
        {this.props.title}
      </Button>
    );

    var items = this.props.items.map(function(item) {
      return (
        <Button key={item.name} bsStyle={this.props.buttonStyle}>
          {item.name}
          &nbsp;
          <Badge>{item.text}</Badge>
        </Button>
      );
    }.bind(this));

    return (
      <ButtonToolbar className='stat-buttons'>
        {items}
      </ButtonToolbar>
    );
  }

});

module.exports = StatButtons;
