import { useEffect, useState } from 'react';

function PatientDashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Dummy data for now
    const dummyAppointments = [
      {
        id: 1,
        doctor: 'Dr. Mehta',
        date: '2025-05-22',
        time: '10:00 AM',
        status: 'Confirmed',
      },
      {
        id: 2,
        doctor: 'Dr. Sharma',
        date: '2025-05-24',
        time: '02:30 PM',
        status: 'Pending',
      },
    ];
    setAppointments(dummyAppointments);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Appointments</h2>
      <div className="space-y-4">
        {appointments.map((appt) => (
          <div
            key={appt.id}
            className="p-4 border rounded-lg shadow-md bg-white flex flex-col gap-1"
          >
            <p><strong>Doctor:</strong> {appt.doctor}</p>
            <p><strong>Date:</strong> {appt.date}</p>
            <p><strong>Time:</strong> {appt.time}</p>
            <p>
              <strong>Status:</strong>{' '}
              <span className={appt.status === 'Confirmed' ? 'text-green-600' : 'text-yellow-600'}>
                {appt.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PatientDashboard;
