const BookIssues = require("../models/BookIssues");

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const handleBookIssue = async (req, res) => {
  try {
    if ((await BookIssues.find({ BookId: req.body.BookId })).toString()) {
      res
        .status(400)
        .json({ success: false, message: "Book with this id already issued" });
    } else {
      await BookIssues.create({
        EnrollmentNumber: req.body.EnrollmentNumber,
        BookId: req.body.BookId,
      });
      res
        .status(200)
        .json({ success: true, message: "Book issued Successfully" });
    }
  } catch (err) {
    console.log("Add book Error -- ", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const handleBookReturn = async (req, res) => {
  try {
    const issue = await BookIssues.findOne({ BookId: req.body.BookId });
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
  } catch (err) {
    console.log("Delete book Error -- ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  handleBookIssue,
  handleBookReturn,
};
