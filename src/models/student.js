const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  gender: String,
  university: String,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
