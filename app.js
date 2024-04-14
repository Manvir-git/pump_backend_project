// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB (make sure MongoDB is running on your machine)
mongoose.connect('mongodb://localhost/orderApp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Create Order schema
const orderSchema = new mongoose.Schema({
    customerName: String,
    productName: String,
    quantity: Number
});

const Order = mongoose.model('Order', orderSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // Set EJS as the templating engine

// Serve order form
app.get('/', (req, res) => {
    res.render('orderForm');
});

// Handle form submission
app.post('/submitOrder', (req, res) => {
    const { customerName, productName, quantity } = req.body;

    // Create a new Order instance
    const newOrder = new Order({
        customerName,
        productName,
        quantity
    });

    // Save the order to the database
    newOrder.save()
        .then(() => {
            res.send('Order placed successfully!');
        })
        .catch(err => {
            res.status(500).send('Error placing order');
        });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
