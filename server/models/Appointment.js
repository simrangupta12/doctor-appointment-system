const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true,
  },
  date: {
    type: String, // We'll keep it simple as a string like '2025-05-21'
    required: true,
  },
  time: {
    type: String, // E.g. '10:00 AM - 11:00 AM'
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
    default: 'Pending',
  },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
