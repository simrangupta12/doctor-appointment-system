const express = require('express');
const router = express.Router();
const { bookAppointment, getMyAppointments } = require('../controllers/appointmentController');
const authMiddleware = require('../middleware/authMiddleware'); // to protect routes

// POST /api/appointments/book - Book an appointment (protected)
router.post('/appointments/book', authMiddleware, bookAppointment);

// GET /api/appointments/my - Get logged-in user's appointments (protected)
router.get('/appointments/my', authMiddleware, getMyAppointments);

module.exports = router;
