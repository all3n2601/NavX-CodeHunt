const issue = require("../models/contactDetails");
//raise an issue
const createContactIssue = async (req, res) => {
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
    res.status(201).json(contactUsIssue);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the contactIssue" });
  }
};
//get all issues
const getAllContactIssue = async (req, res) => {
  try {
    const contactUsIssue = await issue.find({});
    res.json(contactUsIssue);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching contactIssue" });
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
