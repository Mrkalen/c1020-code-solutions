function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var conversionResult = convertMinutesToSeconds(5);

console.log('conversionResult:', conversionResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetResult = greet('Beavis');

console.log('greetResult:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 42);

console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  var findFirstName = person.firstName;
  return findFirstName;
}

var foundFirstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamprouge' });

console.log('foundFirstName:', foundFirstName);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var theLastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('theLastElement:', theLastElement);
