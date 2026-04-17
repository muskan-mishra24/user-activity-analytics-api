const express = require('express');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const logRoutes = require('./routes/logRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');

const app = express();

// Middleware
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/logs', logRoutes);
app.use('/api/analytics', analyticsRoutes);

module.exports = app;