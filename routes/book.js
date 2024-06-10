const express = require("express");
const Book = require("../models/Books");
const {
  handleAddBook,
  handleGetAllBooks,
  handleGetBook,
  handleDeleteBook,
} = require("../controllers/book");
const {
  validateAddBookRequest,
  validateDeleteBookRequest,
} = require("../middlewares/book");

const router = express.Router();

router
  .route("/")
  .get(handleGetAllBooks)
  .post(validateAddBookRequest, handleAddBook);
router
  .route("/:id")
  .get(handleGetBook)
  .delete(validateDeleteBookRequest, handleDeleteBook);

module.exports = router;
