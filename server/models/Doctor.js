const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  experience: {
    type: Number, // years of experience
    required: true,
  },
  availableTimings: {
    type: [String], // e.g. ["10:00 AM - 12:00 PM", "3:00 PM - 5:00 PM"]
    required: true,
  },
});

module.exports = mongoose.model('Doctor', doctorSchema);
