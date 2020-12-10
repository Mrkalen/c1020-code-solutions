import React from 'react';
import ReactDom from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 1 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ clickCount: state.clickCount + 1 }));
  }

  render() {
    const count = this.state.clickCount;
    let className;
    if (count <= 3) {
      className = 'cold';
    } else if (count <= 6) {
      className = 'cool';
    } else if (count <= 9) {
      className = 'warm';
    } else if (count <= 12) {
      className = 'hot';
    } else if (count <= 15) {
      className = 'hotter';
    } else if (count <= 18) {
      className = 'hottest';
    } else {
      className = 'hottest';
    }
    return <button onClick={this.handleClick} className={className}>Hot Button</button>;
  }
}

ReactDom.render(
  <HotButton />,
  document.querySelector('#root')
);
