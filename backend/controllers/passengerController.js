const passenger = require("../models/passengerDetails");
//create a passenger
const createPassenger = async (req, res) => {
  const { email, fullname, phoneNumber, password, created_at, location } =
    req.body;
  try {
    const passengerDetail = new passenger({
      email,
      fullname,
      phoneNumber,
      password,
      created_at,
      location,
    });
    const passengerdetail = await passengerDetail.save();
    res.status(201).json(passengerdetail);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the Passenger" });
  }
};
//get all passengers
const getAllPassengers = async (req, res) => {
  try {
    const passengerDetail = await passenger.find({});
    res.json(passengerDetail);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the Passenger" });
  }
};

//get specific issue
const getContactIssuebyId = async (req, res) => {
  const issueId = req.params.id;
  try {
    const contactissue = await issue.findById({ issueId });
    if (!contactissue) {
      return res.status(404).json({ error: "issue not found" });
    }
    res.json(contactissue);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the issue" });
  }
};

//delete issue
const deleteissue = async (req, res) => {
  const issueId = req.params.id;
  try {
    const deletedissue = await issue.findByIdAndRemove({ issueId });
    if (!deletedissue) {
      return res.status(404).json({ error: "issue not found" });
    }
    res.json(deletedissue);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the issue" });
  }
};
export default contactControllers = {
  createContactIssue,
  getAllContactIssue,
  getContactIssuebyId,
  deleteissue,
};
