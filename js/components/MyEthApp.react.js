var React = require('react');
var Blocks = require('./Blocks.react');
var BlockStore = require('../stores/BlockStore');

function getEthState() {
  return {
    blocks: BlockStore.getAll()
  };
}

var MyEthApp = React.createClass({

  getInitialState: function() {
    return getEthState();
  },

  componentDidMount: function() {
    BlockStore.addChangeListener(this._onBlockChange);
  },

  componentWillUnmount: function() {
    BlockStore.removeChangeListener(this._onBlockChange);
  },

  render: function() {
    return (
      <div id='myeth'>
        <Blocks blocks={this.state.blocks} />
      </div>
    );
  },

  _onBlockChange: function() {
    this.setState(getEthState());
  }

})

module.exports = MyEthApp;
