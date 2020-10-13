/* eslint-disable no-console, no-unused-vars, dot-notation */
var student = {
  firstName: 'Kalen',
  lastName: 'Cobb',
  age: 34
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'Entertainment Technician';

console.log('value of student.livesInIrvine:', student.livesInIrvine);

console.log('value of student.previousOccupation:', student.previousOccupation);

console.log('value of student:', student);

var vehicle = {
  make: 'Jeep',
  model: 'Wrangler',
  year: 2013
};

vehicle['color'] = 'Green';

vehicle['isConvertable'] = true;

console.log('value of vehicle["color"]:', vehicle['color']);

console.log('value of vehicle["isConvertible"]:', vehicle['isConvertable']);

console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Sandor',
  type: 'Hound'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
