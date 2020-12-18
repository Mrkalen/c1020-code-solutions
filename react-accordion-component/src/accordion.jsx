import React from 'react';
const accordionData = [
  {
    isToggled: false,
    name: 'Hypertext Markup Language',
    text: 'HyperText Markup Language (HTML) is the set of markup symbols or codes inserted into a file intended for display on the Internet. The markup tells web browsers how to display a web page\'s words and images'
  },
  {
    isToggled: false,
    name: 'Cascading Style Sheets',
    text: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
  },
  {
    isToggled: false,
    name: 'JavaScript',
    text: 'JavaScript, often abbreviated as JS, is a high-level interpreted programming language that conforms to the ECMAScript specification. JavaScript has a curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first class functions.'
  }
];

class SubjectData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stuff: [] };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log(event.target);
  }

  render() {
    return (
      <React.Fragment>
        <div className='subjectName' onClick={this.handleClick}>{this.props.name}</div>
        <div className='subjectText hidden'>{this.props.text}</div>
      </React.Fragment>
    );
  }
}

class Accordion extends React.Component {

  render() {
    return (
      <div className='container'>
        {
          accordionData.map((subject, index) => {
            return <SubjectData key={index} name={subject.name} text={subject.text}/>;
          })
        }
      </div>
    );
  }
}

export default Accordion;
