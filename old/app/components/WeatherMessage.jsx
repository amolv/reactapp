var React = require('react');

var WeatherMessage = React.createClass({
    render: function(){
      var name = this.props.name;
      var message = this.props.message;
      return (
        <div>
          <h5>Its 30 in Pne asasas</h5>
          <p>{message}</p>
        </div>
      );
    }
});

module.exports = WeatherMessage;
