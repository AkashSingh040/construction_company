const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  project: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', quoteSchema, 'users'); // use existing collection
