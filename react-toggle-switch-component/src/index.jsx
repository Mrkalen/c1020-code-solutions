import React from 'react';
import ReactDom from 'react-dom';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({ isToggled: !state.isToggled }));
  }

  render() {
    const toggled = this.state.isToggled;
    let toggleClassName;
    let divClassName;
    if (toggled) {
      toggleClassName = 'toggled';
      divClassName = 'container isToggled';
    } else {
      toggleClassName = 'notToggled';
      divClassName = 'container isNotToggled';
    }
    return (
      <div className={divClassName}>
        <div onClick={this.handleClick} className={toggleClassName}></div>
      </div>
    );
  }

}

ReactDom.render(
  <ToggleSwitch />,
  document.querySelector('#root')
);
