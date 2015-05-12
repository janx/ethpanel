var React = require('react');
var PropTypes = React.PropTypes;

var Card = React.createClass({

  propTypes: {
    title: PropTypes.string,
    items: PropTypes.array.isRequired
  },

  render: function() {
    var rows = this.props.items.map(function(item) {
      var body = item.body ? <p>{item.body}</p> : '';

      return (
        <tr key={item.name}>
          <td className='component-info-name'>{item.name}</td>
          <td className='component-info-desc'>
            <p className='component-info-header'>
              <span>{item.text}</span>
            </p>
            {body}
          </td>
        </tr>
      );
    });

    return (
      <div className="card component-info">
        <h3 className="mui-font-style-title">{this.props.title}</h3>
        <table>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }

});

module.exports = Card;
