const express = require("express");
const Book = require("../models/Books");
const {
  handleAddBook,
  handleGetAllBooks,
  handleGetBook,
  handleDeleteBook,
} = require("../controllers/book");

const router = express.Router();

router.route("/").get(handleGetAllBooks).post(handleAddBook);
router.route("/:id").get(handleGetBook).delete(handleDeleteBook);

module.exports = router;
