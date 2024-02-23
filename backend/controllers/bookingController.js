const booking = require("../models/bookingDetails");
const express = require("express");
const router = express.Router();
const { Error } = require("console");


router.post("/add-booking", async (req, res) => {
  const {
    passengerId,
    start_destination,
    end_destination,
    co_passengersID,
    created_at,
  } = req.body;
  try {
    const Booking = new booking({
      passengerId,
      start_destination,
      end_destination,
      co_passengersID,
      created_at,
    });
    const Bookings = await Booking.save();
    res.json(Bookings);
  } catch (error) {
    res.status(500).json({ error: Error.message });
  }
});

module.exports = router;
