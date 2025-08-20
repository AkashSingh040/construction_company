const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./db/quoteModel');

const app = express();
app.use(cors());
app.use(bodyParser.json());

//  Connect to MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
  .then(() => console.log('MongoDB Connected to mydatabase'))
  .catch(err => console.log('Connection Error:', err));

app.post('/api/quote', async (req, res) => {
  try {
    console.log('Incoming request body:', req.body);

    const { name, email, phone, project } = req.body;

    const newUser = new User({
      name,
      email,
      phone,
      project
    });

    await newUser.save(); 
    res.status(200).json({ message: 'Quote submitted successfully!' });
  } catch (err) {
    console.error('Error saving quote:', err); 
    res.status(500).json({ message: 'Server error while saving quote,it seems you have entered dublicate data' });
  }
});


//  Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
