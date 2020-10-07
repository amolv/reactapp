var React = require('react');
var ReactDOM = require('react-dom');

import Greeter from 'Greeter';


var firstName = 'Amol';
ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
