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

  digitValidation(pass) {
    const digit = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < digit.length; i++) {
      if (pass.includes(digit[i].toString())) {
        return true;
      }
    }
    return false;
  }

  capValidation(pass) {
    const caps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let i = 0; i < caps.length; i++) {
      if (pass.includes(caps[i])) {
        return true;
      }
    }
    return false;
  }

  specialValidation(pass) {
    const special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    for (let i = 0; i < special.length; i++) {
      if (pass.includes(special[i])) {
        return true;
      }
    }
    return false;
  }

  render() {
    const passValue = this.state.password;
    let passMark = 'fas fa-times';
    let passError = 'red';
    let lengthMark = 'fas fa-times';
    let lengthError = 'red';
    let capMark = 'fas fa-times';
    let capError = 'red';
    let digitMark = 'fas fa-times';
    let digitError = 'red';
    let specialMark = 'fas fa-times';
    let specialError = 'red';
    if (passValue !== '') {
      passError = 'green';
      passMark = 'fas fa-check';
    }
    if (passValue.length > 8) {
      lengthError = 'green';
      lengthMark = 'fas fa-check';
    }
    if (this.digitValidation(passValue)) {
      digitError = 'green';
      digitMark = 'fas fa-check';
    }
    if (this.capValidation(passValue)) {
      capError = 'green';
      capMark = 'fas fa-check';
    }
    if (this.specialValidation(passValue)) {
      specialError = 'green';
      specialMark = 'fas fa-check';
    }
    return (
      <div className='container'>
        <label htmlFor="Password">Password</label>
        <div className='input'>
          <input onChange={this.handleChange} type="password" name="password" id="pass"/>
        </div>
        <div className={`errorText ${passError}`}>
          <i className={`${passMark}`}></i>
          <p className={'passReq'}>Password Required</p>
        </div>
        <div className={`errorText ${lengthError}`}>
          <i className={`${lengthMark}`}></i>
          <p className={'passReq'}>Password must be more than 8 characters.</p>
        </div>
        <div className={`errorText ${capError}`}>
          <i className={`${capMark}`}></i>
          <p className={'passReq'}>Password must contain a capitalized character.</p>
        </div>
        <div className={`errorText ${digitError}`}>
          <i className={`${digitMark}`}></i>
          <p className={'passReq'}>Password must contain a number.</p>
        </div>
        <div className={`errorText ${specialError}`}>
          <i className={`${specialMark}`}></i>
          <p className={'passReq'}>Password must contain a special character [!, @, #, $, %, ^, &, *, (, )]</p>
        </div>
      </div>
    );
  }
}

export default ValidatedInput;
