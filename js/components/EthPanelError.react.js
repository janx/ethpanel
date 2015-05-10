var React = require('react');

var EthPanelError = React.createClass({

  render: function() {
    var url = window.location.href;
    var arr = url.split("/");
    var domain = arr[0] + "//" + arr[2];

    return (
      <div id='myetherror'>
        <h1>EthPanel无法连接到你的节点</h1>
        <p>如果你的节点正在运行依然无法连接，有可能是节点RPC端口设置或者RPC CORS设置的问题，请尝试用以下参数启动节点：</p>
        <pre style={{margin: 30}}>
          --rpc --rpcport "8545" --rpccorsdomain "{domain}"
        </pre>
        <p>'--rpccorsdomain'参数将会允许此页面通过RPC访问您的节点。此页面完全在客户端（也就是你的浏览器之内）运行，通过AJAX请求与你的节点交换数据，不会保存任何数据到服务器。提供此页面的服务器也不会访问您的节点。</p>
        <p>如果你对安全有洁癖，可以将该页面保存到本地打开，或者从开源代码自行编译。</p>
        <p>此项目代码完全开源，地址在下面。作者写这个纯属好玩，没有不可告人的目的。为什么好玩？因为React很屌有没有！</p>
      </div>
    );
  }

})

module.exports = EthPanelError;
