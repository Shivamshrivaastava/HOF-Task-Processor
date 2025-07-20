const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/hof-tasks')

// Import and use the routes
const taskRoutes = require('./routes/tasks');
app.use('/api/tasks', taskRoutes);

// Start server
app.listen(3001, () => console.log('Server running on port 3001'));
