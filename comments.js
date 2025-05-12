// Create web server
// Import the required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create an instance of the Express app
const app = express();

// Use middleware
app.use(cors());
app.use(bodyParser.json());

// Define a port number
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
