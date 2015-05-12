var React = require('react');
var PropTypes = React.PropTypes;
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

  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.blocks[0].number > this.props.blocks[0].number;
  },

  render: function() {
    var items = [];
    var blocks = this.props.blocks.slice(0, this.props.limit);

    blocks.forEach(function(block) {
      items.push(<BlockItem key={block.number} {...block} />)
    });

    return (
      <div className="card component-info blocks">
        <h3 className='mui-font-style-title'>Last {this.props.limit} Blocks</h3>
        <table className='table'>
          <thead>
            <tr>
              <th className='number'>Number</th>
              <th className='hash'>Hash</th>
              <th className='time'>Time</th>
              <th className='tx'>Transactions</th>
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
