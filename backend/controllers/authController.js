const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv/config");

const passenger = require("../models/passengerDetails");
const authenticate = require('../middlewares/auth');
const router = express.Router();


const jwt_secret = process.env.JWT_SECRET;

// Helper function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ user: { id: userId } }, jwt_secret, {
    expiresIn: 18000,
  });
};

// Signup
 async function signup(req, res) {
  try {
    const { fullname, phone, gender, password, cpassword } = req.body;

    let phonecheck = await passenger.findOne({ phoneNumber:phone });

    if (phonecheck) {
      return res.status(400).json({ msg: 'Phone already exists' });
    }



    const user = new passenger( { fullName:fullname, phoneNumber:phone, gender, password });

    await user.save();

    const token = generateToken(user.id);

    res.cookie('token', token, { httpOnly: true });

    res.status(201).json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
}

// Signin
 async function signin(req, res) {
  try {
    const { phone, password } = req.body;

    const user = await passenger.findOne({ phoneNumber:phone });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = generateToken(user.id);

    res.cookie('token', token, { httpOnly: true });
    res.json({ token, message: 'Success'});
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
}


 async function profile(req, res){
  try {
    const user = await passenger.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


router.post("/signup",signup);
router.post("/signin",signin);
router.get("/profile",authenticate,profile);

module.exports = router;