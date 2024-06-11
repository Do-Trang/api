const express = require('express');
const studentController = require('../controllers/studentController');
const { authenticateToken, authorizeRoles } = require('../../auth');
const router = express.Router();

router.get('/', authenticateToken, studentController.listStudents);
router.post('/', authenticateToken, authorizeRoles(['admin']), studentController.createStudent);
router.get('/:id', authenticateToken, studentController.getStudent);
router.put('/:id', authenticateToken, authorizeRoles(['admin']), studentController.updateStudent);
router.delete('/:id', authenticateToken, authorizeRoles(['admin']), studentController.deleteStudent);

module.exports = router;
