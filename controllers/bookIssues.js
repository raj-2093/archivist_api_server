const BookIssues = require("../models/BookIssues");

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const handleBookIssue = async (req, res) => {
  try {
    await BookIssues.create({
      EnrollmentNumber: req.body.EnrollmentNumber,
      BookId: req.body.BookId,
    });
    res
      .status(200)
      .json({ success: true, message: "Book issued Successfully" });
  } catch (err) {
    console.log("Add book Error -- ", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const handleGetAllIssues = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Send all the issues successfully",
      data: await BookIssues.find({}),
    });
  } catch (err) {}
};

const handleBookReturn = async (req, res) => {
  try {
    const issue = await BookIssues.findOne({ BookId: req.body.BookId });
    console.log("Issue : ", issue);
    if (issue) {
      if (
        req.body.BookId == issue.BookId &&
        req.body.EnrollmentNumber == issue.EnrollmentNumber
      ) {
        await BookIssues.deleteOne({ BookId: req.body.BookId });
        res.status(200).json({
          success: true,
          message: `Book with id ${req.body.BookId} is returned successfully by student with enr no ${req.body.EnrollmentNumber}`,
        });
      } else {
        res.status(400).json({
          success: false,
          message: `Book with id ${req.body.BookId} is not associated with enr no ${req.body.EnrollmentNumber}`,
        });
      }
    } else {
      res.status(400).json({
        success: false,
        message: `Book with id ${req.body.BookId} is not issued`,
      });
    }
  } catch (err) {
    console.log("Delete book Error -- ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  handleBookIssue,
  handleBookReturn,
  handleGetAllIssues,
};
