const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Create the Express app (Core of backend, every route and middleware will be attached to this app object)
const app = express();

// Middleware
// - Registers the CORS middleware. Every incoming request passes through this, and it adds headers that tell the browser "yes, the React app on port 3000 is allowed to talk to me."
app.use(cors())

// - (CRITICAL) By default, Express doesn't understand JSON request bodies. This middleware parses incoming JSON so that when your React app sends { "name": "Read daily" }, your
//   route handler can access it as req.body.name (w/o this middleware, req.body would be undefined).
app.use(express.json());

// Test route -> When you visit localhost:5000/api/health in your browser, you should see a JSON response indicating that the server is running
app.get('/api/health', (req, res) => {
    res.json({status: 'Server is running'});
});

// Start listerning on the specified port. If not defined in .env, falls back to 5000.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});