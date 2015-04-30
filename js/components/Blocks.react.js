var React = require('react');
var PropTypes = React.PropTypes;
var BlockItem = require('./BlockItem.react');

var Blocks = React.createClass({

  propTypes: {
    blocks: PropTypes.array.isRequired
  },

  render: function() {
    var items = [];
    this.props.blocks.forEach(function(block) {
      items.push(<BlockItem key={block.number} {...block} />)
    });

    return (
      <div className="blocks">
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Hash</th>
              <th>Age</th>
              <th>Transactions</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </div>
    );
  }

});

module.exports = Blocks;
