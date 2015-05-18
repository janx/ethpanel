var React = require('react');
var PropTypes = React.PropTypes;

var { Table } = require('react-bootstrap');

var BlockItem = require('./BlockItem');

var Blocks = React.createClass({

  getDefaultProps: function() {
    return {
      limit: 10
    };
  },

  propTypes: {
    limit: PropTypes.number,
    blocks: PropTypes.array.isRequired
  },

  render: function() {
    var items = [];
    var blocks = this.props.blocks.slice(0, this.props.limit);

    blocks.forEach(function(block) {
      items.push(<BlockItem key={block.number} {...block} />)
    });

    return (
      <div className="blocks">
        <h3>Last {this.props.limit} Blocks</h3>
        <Table hover>
          <thead>
            <tr>
              <th className='number'>Number</th>
              <th className='hash'>Hash (first 16 bytes)</th>
              <th className='time'>Time</th>
              <th className='tx'>Transactions</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </Table>
      </div>
    );
  }

});

module.exports = Blocks;
