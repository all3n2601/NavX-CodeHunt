const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const passengerSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    required: true,
    type: String,
  },
  gender: {
    required: true,
    type: String,
    enum: ["Male", "Female", "Others"],
  },
  location: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

passengerSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

module.exports = mongoose.model("Passenger", passengerSchema);
