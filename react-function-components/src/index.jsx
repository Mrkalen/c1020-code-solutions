import React from 'react';
import ReactDom from 'react-dom';

function CustomButtom(props) {
  return <button>Click Me!</button>;
}

const element = <CustomButtom />;

ReactDom.render(
  element,
  document.getElementById('root')
);
