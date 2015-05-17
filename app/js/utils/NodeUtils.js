module.exports = {
  getNode: function(id) {
    var data = id.split('@');
    return {
      host: data[0],
      port: data[1]
    };

  },

  getName: function(node) {
    if(node) {
      return node.host + ':' + node.port;
    } else {
      return '';
    }
  },

  getId: function(node) {
    if(node) {
      return node.host + '@' + node.port;
    } else {
      return '';
    }
  }
};
