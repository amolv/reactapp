var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory} = require('react-router');

import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';
import TodoApp from 'TodoApp';
import LeaftletMap from "Map";
import GoogleMap from "GoogleMap";
import Network from "Network";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="map" component={LeaftletMap} />
      <Route path="googlemap" component={GoogleMap} />
      <Route path="network" component={Network} />
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <Route path="todolist" component={TodoApp} />
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
