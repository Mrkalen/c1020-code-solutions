function readNotes(data) {
  for (const key in data) {
    console.log(`${key}: ${data[key]}`);
  }
}

module.exports = readNotes;
