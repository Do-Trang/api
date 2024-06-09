const Student = require('../models/student');

exports.listStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.createStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const student = await newStudent.save();
    res.status(201).json(student.toObject()); 
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).send('Student not found');
    res.json(student);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!student) return res.status(404).send('Student not found');
    res.json(student);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).send('Student not found');
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};
