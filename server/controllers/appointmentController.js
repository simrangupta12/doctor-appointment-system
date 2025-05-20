const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');

// Book an appointment
exports.bookAppointment = async (req, res) => {
  try {
    const { doctorId, date, time } = req.body;
    const patientId = req.user.userId; // Comes from the auth middleware

    // Check if the doctor exists
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

    // Optional: check for double booking
    const existing = await Appointment.findOne({ doctor: doctorId, date, time });
    if (existing) {
      return res.status(400).json({ message: 'Slot already booked' });
    }

    const appointment = new Appointment({
      patient: patientId,
      doctor: doctorId,
      date,
      time,
    });

    await appointment.save();
    res.status(201).json({ message: 'Appointment booked successfully', appointment });
  } catch (err) {
    res.status(500).json({ message: 'Error booking appointment', error: err });
  }
};

// Get appointments for the logged-in user (patient)
exports.getMyAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ patient: req.user.userId })
      .populate('doctor', 'name specialization')
      .sort({ date: 1 });

    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching appointments', error: err });
  }
};
