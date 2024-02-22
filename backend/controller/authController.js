import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
import express from "express";

const passenger = require("../models/passengerDetails");
export const passengerrouter = express.Router();
dotenv.config();

const jwt_secret = process.env.JWT_SECRET;

// Helper function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ user: { id: userId } }, jwt_secret, {
    expiresIn: 18000,
  });
};

// Signup
export async function signup(req, res) {
  try {
    const { fullname, phone, password, cpassword } = req.body;

    let phonecheck = await User.findOne({ phone });

    if (phonecheck) {
      return res.status(400).json({ msg: 'email ID already exists' });
    }



    const user = new passenger( { fullname, phone, password });

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
export async function signin(req, res) {
  try {
    const { phone, password } = req.body;

    // Check if user exists
    const user = await passenger.findOne({ phone });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Create and return JWT
    const token = generateToken(user.id);

    res.cookie('token', token, { httpOnly: true });
    res.json({ token });
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
}


export async function profile(req, res){
  try {
    const user = await passenger.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


passengerrouter.post("/signup",signup);
passengerrouter.post("/signin",signin);
passengerrouter.get.("/profile",profile)