const Books = require("../models/Books");

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const validateAddBookRequest = async (req, res, next) => {
  try {
    if ((await Books.find({ BookId: req.body.BookId })).toString()) {
      res
        .status(400)
        .json({ success: false, message: "Book with this id already exist" });
    } else {
      next();
    }
  } catch (err) {
    console.log("Validate add book --- ", err);
  }
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
const validateDeleteBookRequest = async (req, res, next) => {
  try {
    if (!(await Books.find({ BookId: req.params.id })).toString()) {
      res.status(400).json({
        success: false,
        message: `Book with id ${req.params.id} doesn't exist`,
      });
    } else {
      next();
    }
  } catch (err) {
    console.log("validate delete book --- ", err);
  }
};

module.exports = {
  validateAddBookRequest,
  validateDeleteBookRequest,
};
