/* exported Student */
function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

Student.prototype.getFullName = function () {
  var fullName = this.firstName + ' ' + this.lastName;
  return fullName;
};
Student.prototype.getIntroduction = function () {
  var greeting = 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' And I am studying ' + this.subject;
  return greeting;
};
