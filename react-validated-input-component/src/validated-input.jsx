import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({ password: event.target.value });
  }

  handleSubmit() {
    this.setState();
  }

  render() {
    let message = 'A password is required';
    const passValue = this.state.password;
    // console.log('passValue:', typeof passValue);
    if (passValue === '') {
      message = 'A password is required';
    } else if (passValue.length < 8) {
      message = 'Your password is too short';
    }
    return (
      <div className='container'>
        <label htmlFor="Password">Password</label>
        <div className='input'>
          <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="pass" />
          <i className="fas fa-times"></i>
        </div>
        <p>{message}</p>
      </div>
    );
  }
}

export default ValidatedInput;
