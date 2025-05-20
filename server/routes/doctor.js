const express = require('express');
const router = express.Router();
const { createDoctor, getAllDoctors } = require('../controllers/doctorController');

// POST /api/doctors - Add new doctor
router.post('/doctors', createDoctor);

// GET /api/doctors - Get all doctors
router.get('/doctors', getAllDoctors);

module.exports = router;
