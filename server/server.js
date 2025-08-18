// prep-time/server/server.js
// Initializing dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { createClient } = require('@supabase/supabase-js');

// Import Routes
const mealRoutes = require('./routes/meal-routes.js');
const userRoutes = require('./routes/user-routes.js');

// Load .env file variables
dotenv.config();

// Express app creation and port configuration
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Test to see if server is running
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
