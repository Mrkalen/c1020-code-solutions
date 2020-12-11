import React from 'react';
import ReactDom from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggledOn: false };
    this.counter = 0;

    this.buttonClick = this.buttonClick.bind(this);
    this.faceClick = this.faceClick.bind(this);
  }

  tick() {
    this.counter++;
  }

  buttonClick() {
    this.setState(state => ({ isToggledOn: !state.isToggledOn }));
    const timerID = setInterval(
      () => this.tick(),
      1000);
  }

  faceClick() {
    this.counter = 0;
  }

  render() {
    const toggle = this.state.isToggledOn;
    let button;
    let click;
    if (toggle) {
      button = 'fas fa-pause';
    } else {
      button = 'fas fa-play';
      click = this.faceClick;
    }
    return (
      <div className='container'>
        <div onClick={click} className='timer'>
          <p>{this.counter}</p>
        </div>
        <i onClick={this.buttonClick} className={button}></i>
      </div>
    );
  }
}

ReactDom.render(
  <Stopwatch />,
  document.querySelector('#root')
);
