const express = require('express');
const mongoose = require('mongoose');
const orderRoutes = require('./routes/orderRoutes');
const logger = require('./middleware/logger');

const app = express();
app.use(express.json());
app.use(logger);
app.use('/api', orderRoutes);

mongoose.connect('mongodb://localhost:27017/home_decor_orders', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

module.exports = app;
