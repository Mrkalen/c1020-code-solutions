function ExampleConstructor() {}

console.log('value of prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor prototype:', typeof ExampleConstructor.prototype);

var AnExampleConstructor = new ExampleConstructor();
console.log('value of AnExampleConstructor:', AnExampleConstructor);
console.log('is AnexampleConstructor instanceof ExampleConstructor:', AnExampleConstructor instanceof ExampleConstructor);
