/* exported getStudentNames */
function getStudentNames(students) {
  var studentNames = [];
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    studentNames.push(student.name);
  }
  return studentNames;
}
