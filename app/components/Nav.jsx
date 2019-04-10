var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function(){
      return (
        <div>
            <ul>
<li><IndexLink activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/">Weather</IndexLink></li>
<li><Link activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/map">Map</Link></li>
<li><Link activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/googlemap">GoogleMap</Link></li>
<li><Link activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/network">Networks</Link></li>
<li><Link activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/about">About</Link></li>
<li><Link activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/examples">Examples</Link></li>
<li><Link activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/todolist">Todo List</Link></li>
            </ul>
        </div>
      );
    }
});

module.exports = Nav;
