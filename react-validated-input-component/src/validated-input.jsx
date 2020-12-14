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

  digitValidation(pass) {
    const digit = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 1; i < digit.length; i++) {
      if (pass.includes(i)) {
        return true;
      }
    }
    return false;
  }

  capValidation(pass) {
    const caps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let i = 0; i < caps.length; i++) {
      if (pass.includes(i)) {
        return true;
      }
    }
    return false;
  }

  // passValidation() {
  //   const message = 'A password is required';
  //   const errorClass = 'red';
  //   const passValue = this.state.password;
  //   // console.log('passValue:', typeof passValue);

  // }

  render() {
    const passValue = this.state.password;
    const errorClass = 'red';
    let message = 'banana';
    if (passValue === '') {
      message = 'A password is required';
    } else if (passValue.length < 8) {
      message = 'Your password is too short';
    } else if (!this.digitValidation(passValue)) {
      console.log('digit failed');
    } else if (this.capValidation(passValue)) {
      console.log('Cap failed');
    }
    return (
      <div className='container'>
        <label htmlFor="Password">Password</label>
        <div className='input'>
          <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="pass" />
          <i className={`fas fa-times ${errorClass}`}></i>
        </div>
        <p className={`message ${errorClass}`}>{message}</p>
      </div>
    );
  }
}

export default ValidatedInput;
