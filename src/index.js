import React from 'react';
import ReactDOM from 'react-dom';

// const el = React.createElement(
//   'h1',
//   null,
//   'Hello World, React.js!'
// );

const el = <h1>Hello World!</h1>

ReactDOM.render(el, document.getElementById('root'));