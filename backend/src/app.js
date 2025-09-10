const express = require('express');
const mongoose = require('mongoose');
const logger = require('./middleware/logger');
const orderRoutes = require('./routes/orderRoutes');

const app = express();

app.use(express.json());
app.use(logger);

app.use('/api/orders', orderRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB!'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = app;
