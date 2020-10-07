var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;
    console.log( name.length );
    if( name.length > 0 ){
      this.refs.name.value = '';
      updates.name = name;
    }
    if( message.length > 0 ){
      this.refs.message.value = '';
      updates.message = message;
    }
    this.props.onNewName(updates);
  },
  render : function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name" />
          <textarea ref="message"></textarea>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
