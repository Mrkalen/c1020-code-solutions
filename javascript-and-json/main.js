var books = [
  {
    isbn: 789456423,
    title: 'Hickory Dickory Dock',
    author: 'Batman'
  },
  {
    isbn: 987654321,
    title: "Who's on first",
    author: 'Whatson Second'
  },
  {
    isbn: 654321987,
    title: 'Three Little Pigs',
    author: 'Ina Blanket'
  }
];

console.log('Array of books:', books);
console.log('TypeOf books:', typeof books);

var stringify = JSON.stringify(books);
console.log('Stringify:', stringify);
console.log('TypeOf Stringify:', typeof stringify);

var string = '{"numberId": 456, "name": "Bill Murray"}';
console.log('TypeOf JSON string:', typeof string);

var parsed = JSON.parse('{"numberId": 456, "name": "Bill Murray"}');
console.log('Parsed JSON:', parsed);
console.log('TypeOf parsed:', typeof parsed);
