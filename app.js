const express = require('express');
const app = express();
const PORT = 3000; // Choose your desired port number

// Middleware to parse incoming form data
app.use(express.urlencoded({ extended: true }));

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
  const formData = req.body;
  console.log('Form data received:', formData);
  res.send('Form data received successfully!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on https://lallytradingcompany.netlify.app/form`);
});
