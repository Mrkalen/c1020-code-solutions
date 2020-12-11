import React from 'react';
import ReactDom from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({ email: event.target.value });
  }

  handleSubmit() {
    console.log('state:', this.state.email);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Email:
        <input type='email' onChange={this.handleChange}></input>
        <button type='submit' value='submit'>Submit</button>
      </form>
    );

  }

}

ReactDom.render(
  <NewsletterForm />,
  document.querySelector('#root')
);
