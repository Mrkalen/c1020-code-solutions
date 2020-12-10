import React from 'react';
import ReactDom from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    if (this.state.isClicked) {
      return (
        <button onClick={this.handleClick}>I am clicked</button>
      );
    }
    return (
      <button onClick={this.handleClick}>I am not clicked</button>
    );
  }
}

ReactDom.render(
  <CustomButton />,
  document.querySelector('#root')
);
