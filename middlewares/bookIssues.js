const { default: mongoose } = require("mongoose");
const BookIssues = require("../models/BookIssues");
const Books = require("../models/Books");

const verifyBookId = async (bookId) => {
  try {
    if (!(await Books.find({ BookId: bookId })).toString()) {
      return {
        success: false,
        message: "Book with this id doesn't exist",
      };
    } else if ((await BookIssues.find({ BookId: bookId })).toString()) {
      return {
        success: false,
        message: "Book with this id already issued",
      };
    } else {
      return { success: true };
    }
  } catch (err) {}
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const validateIssueRequest = async (req, res, next) => {
  try {
    const bookIdVerificationResult = await verifyBookId(req.body.BookId);
    if (!bookIdVerificationResult.success) {
      res.status(400).json({
        success: bookIdVerificationResult.success,
        message: bookIdVerificationResult.message,
      });
    } else {
      next();
    }
  } catch (err) {
    console.log("Validate issue request : ", err);
    next();
  }
};

module.exports = {
  validateIssueRequest,
};
