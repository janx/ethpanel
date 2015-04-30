var React = require('react');
var Blocks = require('./Blocks.react');
var BlockStore = require('../stores/BlockStore');

var MyEthApp = React.createClass({

  getInitialState: function() {
    return {
      blocks: BlockStore.getAll()
    };
  },

  render: function() {
    return (
      <div id='myeth'>
        <Blocks blocks={this.state.blocks} />
      </div>
    );
  }

})

module.exports = MyEthApp;
