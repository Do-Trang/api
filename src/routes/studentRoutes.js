const express = require('express');
const studentController = require('../controllers/studentController');
const { authenticateToken, authorizeRoles } = require('../../auth');
const router = express.Router();

// Public routes
router.get('/', studentController.listStudents);
router.get('/:id', studentController.getStudent);

// Protected routes
router.post('/', authenticateToken, authorizeRoles(['admin']), studentController.createStudent);
router.put('/:id', authenticateToken, authorizeRoles(['admin']), studentController.updateStudent);
router.delete('/:id', authenticateToken, authorizeRoles(['admin']), studentController.deleteStudent);

module.exports = router;
