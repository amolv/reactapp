var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function(){
      return {
        todos: [
          {
            id: 1,
            text : 'Walk',

          },
          {
            id: 2,
            text : 'Walking'
          },
          {
            id: 3,
            text : 'Keep Walking'
          }
        ]
      }
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
});

module.exports = TodoApp;
