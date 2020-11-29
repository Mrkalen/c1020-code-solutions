const data = require('./data.json');
const write = require('./write');
const read = require('./read');
const remove = require('./delete');
const update = require('./update');

const request = process.argv[2];
const newNote = process.argv[3];
const index = process.argv[3];
const updateNote = process.argv[4];

if (request === 'read') {
  read(data.notes);
} else if (request === 'create') {
  write(newNote, data);
} else if (request === 'update') {
  update(updateNote, data, index);
} else if (request === 'delete') {
  remove(data, index);
} else {
  console.log('Invalid entry.');
}
