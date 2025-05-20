const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected'); // ✅ new line
const doctorRoutes = require('./routes/doctor');
const appointmentRoutes = require('./routes/appointment');


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
  res.send('API is working 🎉');
});

// 👇 Registering your routes
app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes); // ✅ Register protected route
app.use('/api', doctorRoutes);
app.use('/api', appointmentRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
  );
})
.catch((err) => console.error('MongoDB connection error:', err));
