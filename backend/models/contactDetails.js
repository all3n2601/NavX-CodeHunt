const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    required: true,
    type: String,
  },
  description: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  resolved: {
    type: String,
    enum: ["Yes", "No"],
  },
});

// DB_URI=mongodb+srv://allen:allen123@navxcluster.xmtvylz.mongodb.net/?retryWrites=true&w=majority&appName=NavXCluster
// PORT=4000

module.exports = mongoose.model("Contact", contactSchema);
