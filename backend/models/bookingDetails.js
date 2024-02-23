const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  passengerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "passengerSchema",
    unique: true,
  },
  start_destination: {
    type: String,
    required: true,
  },
  end_destination: {
    type: String,
    required: true,
  },
  co_passengersID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "passengerSchema",
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Booking", bookingSchema, "bookings");
