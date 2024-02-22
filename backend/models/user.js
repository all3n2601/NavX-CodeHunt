const mongoose = require('mongoose');

const passengerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  isDriver: {
    type: Boolean,
    default: false
  },
  vehicles: [
    {
      type: String,
      enum: ['car', 'bike']
    }
  ],
  carDetails: {
    make: String,
    model: String,
    year: Number,
    licensePlate: String,
    capacity: Number
  },
  bikeDetails: {
    make: String,
    model: String,
    year: Number,
    licensePlate: String
  },
  rating: {
    type: Number,
    default: 0
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    }
  ],
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Passenger', passengerSchema);
