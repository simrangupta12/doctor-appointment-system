import React, { useState } from 'react';
import { bookAppointment } from '../services/api';

function AppointmentBooking() {
  const [formData, setFormData] = useState({
    doctor: '',
    date: '',
    time: '',
    reason: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      await bookAppointment(formData);
      setMessage('Appointment booked successfully!');
      setFormData({ doctor: '', date: '', time: '', reason: '' });
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error booking appointment');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Book Appointment</h2>
      {message && <p className="mb-4 text-center">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Doctor</label>
          <input
            type="text"
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
            placeholder="Doctor's name"
          />
        </div>
        <div>
          <label className="block mb-1">Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Reason (optional)</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            rows={3}
            placeholder="Reason for appointment"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default AppointmentBooking;
