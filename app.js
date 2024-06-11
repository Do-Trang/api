require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./src/routes/studentRoutes');

const app = express();
app.use(express.json());

const corsOptions = {
  origin: 'http://192.168.56.10:32135',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
