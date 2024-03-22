// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define a route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, world! This is my Node.js server.');
});

// Specify the port number
const port = process.env.PORT || 5000;

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
