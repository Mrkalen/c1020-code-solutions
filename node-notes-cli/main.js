const data = require('./data.json');
const write = require('./write');
const read = require('./read');
const remove = require('./delete');
const update = require('./update');
const writeNote = require('./write');

// read(data.notes);
write(process.argv[2], data);
