var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
    getDefaultProps: function(){
      return {
        name : 'Amol3',
        message : 'This is inside component! works!'
      }
    },
    getInitialState(){
      return{
        name: this.props.name,
        message : this.props.message
      }
    },
    handleNewData: function (updates) {
        this.setState({
            name : updates.name,
            message : updates.message
        });
    },
    render: function(){
      var name = this.state.name;
      var message = this.state.message;
      return (
        <div>
            <GreeterMessage name={name} message={message}></GreeterMessage>
            <GreeterForm onNewName={this.handleNewData} ></GreeterForm>
        </div>
      );
    }
});

module.exports = Greeter;
