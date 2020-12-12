import React from 'react';
import ReactDom from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isToggledOn: false
    };

    this.buttonClick = this.buttonClick.bind(this);
    this.faceClick = this.faceClick.bind(this);
  }

  tick() {
    this.setState(state => ({ time: state.time + 1 }));
  }

  buttonClick() {
    const toggle = this.state.isToggledOn;
    if (!toggle) {
      this.timerID = setInterval(() => this.tick(), 1000);
      this.setState({ isToggledOn: true });
    } else {
      clearInterval(this.timerID);
      this.setState({ isToggledOn: false });
    }
  }

  faceClick() {
    this.setState({ time: 0 });
  }

  render() {
    const toggle = this.state.isToggledOn;
    let click;
    let button = 'fas fa-play';
    if (toggle) {
      click = undefined;
      button = 'fas fa-pause';
    } else {
      click = this.faceClick;
      button = 'fas fa-play';
    }
    return (
      <div className='container'>
        <div onClick={click} className='timer'>
          <p>{this.state.time}</p>
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
