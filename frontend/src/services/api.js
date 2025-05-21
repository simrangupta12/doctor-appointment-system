import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // your backend URL
});

// Add auth token to headers automatically if present
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Appointment APIs
export const bookAppointment = (appointmentData) => API.post('/appointments/book', appointmentData);
export const getMyAppointments = () => API.get('/appointments/my');

// Export other existing APIs here...

export default API;
