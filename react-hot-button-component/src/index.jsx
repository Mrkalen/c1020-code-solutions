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
    if (count <= 3) {
      return <button onClick={this.handleClick} className="cold">Hot Button</button>;
    } else if (count <= 6) {
      return <button onClick={this.handleClick} className='cool'>Hot Button</button>;
    } else if (count <= 9) {
      return <button onClick={this.handleClick} className='warm'>Hot Button</button>;
    } else if (count <= 12) {
      return <button onClick={this.handleClick} className='hot'>Hot Button</button>;
    } else if (count <= 15) {
      return <button onClick={this.handleClick} className='hotter'>Hot Button</button>;
    } else if (count <= 18) {
      return <button onClick={this.handleClick} className='hottest'>Hot Button</button>;
    } else {
      return <button onClick={this.handleClick} className='hottest'>Hot Button</button>;
    }
  }
}

ReactDom.render(
  <HotButton />,
  document.querySelector('#root')
);
