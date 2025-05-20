const Doctor = require('../models/Doctor');

// Create doctor
exports.createDoctor = async (req, res) => {
  try {
    const { name, specialization, experience, availableTimings } = req.body;
    const doctor = new Doctor({ name, specialization, experience, availableTimings });
    await doctor.save();
    res.status(201).json({ message: 'Doctor added successfully', doctor });
  } catch (err) {
    res.status(500).json({ message: 'Error adding doctor', error: err });
  }
};

// Get all doctors
exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching doctors', error: err });
  }
};
