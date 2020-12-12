import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggledOn: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isToggledOn: !this.state.isToggledOn });
  }

  render() {
    const toggle = this.state.isToggledOn;
    let menu = 'hidden';
    let drawer = 'open';
    if (toggle) {
      drawer = 'hidden';
      menu = 'open';
    } else {
      drawer = 'open';
      menu = 'hidden';
    }
    return (
      <div className='container'>
        <div className={`drawer ${drawer}`}>
          <i onClick={this.handleClick} className="fas fa-bars"></i>
        </div>
        <div className={`menu ${menu}`}>
          <h1 onClick={this.handleClick}>Menu</h1>
          <h2 onClick={this.handleClick}>About</h2>
          <h2 onClick={this.handleClick}>Get Started</h2>
          <h2 onClick={this.handleClick}>Sign In</h2>
        </div>
        <div onClick={this.handleClick} className={`theShade ${menu}`}></div>
      </div>
    );
  }
}

export default AppDrawer;
