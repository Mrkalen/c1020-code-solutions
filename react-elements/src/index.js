import React from 'react';
import ReactDom from 'react-dom';
const root = document.querySelector('#root');

const reactElement = React.createElement('h1', null, 'Hello, React!');

ReactDom.render(reactElement, root);
