const express = require("express");
const router = express.Router();
const issue = require("../models/contactDetails");
const { Error } = require("console");

//raise an issue
router.post("/add-issue", async (req, res) => {
  const { email, fullname, phoneNumber, description, created_at, resolved } =
    req.body;

  try {
    const contactissue = new issue({
      email,
      fullname,
      phoneNumber,
      description,
      created_at,
      resolved,
    });
    const contactUsIssue = await contactissue.save();
    res.json(contactUsIssue);
  } catch (error) {
    res.status(500).json({ error: Error.message });
  }
});

//get all issues
router.get("/get-issue", async (req, res) => {
  try {
    const contactUsIssue = await issue.find({});
    res.json(contactUsIssue);
  } catch (error) {
    res.status(500).json({ error: Error.message });
  }
});

module.exports = router;
