var React = require('react');

var EthPanelError = React.createClass({

  render: function() {
    var url = window.location.href;
    var arr = url.split("/");
    var domain = arr[0] + "//" + arr[2];

    return (
      <div id='myetherror'>
        <h1>出错了！无法连接到节点</h1>
        <p>如果您的节点正在运行依然无法连接，有可能是节点RPC端口设置或者RPC CORS设置的问题，请尝试用一下参数启动节点：</p>
        <pre>
          --rpc --rpcport "8545" --rpccorsdomain "{domain}"
        </pre>
      </div>
    );
  }

})

module.exports = EthPanelError;
