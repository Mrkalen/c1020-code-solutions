const React = require('react');
const ReactDom = require('react-dom');
const root = document.querySelector('#root');

const reactElement = React.createElement('h1', null, 'Hello, React!');

ReactDom.render(reactElement, root);
