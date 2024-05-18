const Book = require("../models/Books");

/**
 * Handle Add New Book
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const handleAddBook = async (req, res) => {
  try {
    await Book.create({
      BookName: req.body.BookName,
      BookId: req.body.BookId,
      BookAuthor: req.body.BookAuthor,
    });
    res.status(200).json({ success: true, message: "Book added Successfully" });
  } catch (err) {
    console.log("Add book Error -- ", err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

/**
 * Handle Delete Book By Its Id
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const handleDeleteBook = async (req, res) => {
  try {
    await Book.deleteOne({ BookId: Number(req.params.id) });
    res.status(200).json({
      success: true,
      message: `Book with id ${req.params.id} is deleted successfully`,
    });
  } catch (err) {
    console.log("Delete book Error -- ", err);
    res.status(500).json({ success: false });
  }
};

/**
 * Handle get book by its id
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const handleGetBook = async (req, res) => {
  try {
    const bookData = await Book.find({ BookId: req.params.id });
    if (!bookData.toString()) {
      res.status(400).json({ success: false, data: "not found" });
    } else {
      res.status(200).json({
        success: true,
        data: bookData,
      });
    }
  } catch (err) {
    console.log("Add book Error -- ", err);
    res.status(500).json({ success: false });
  }
};

/**
 * Handle get all the books
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const handleGetAllBooks = async (req, res) => {
  try {
    const bookData = await Book.find({});
    if (!bookData.toString()) {
      res.status(400).json({ success: false, data: "not found" });
    } else {
      res.status(200).json({
        success: true,
        data: bookData,
      });
    }
  } catch (err) {
    console.log("Add book Error -- ", err);
    res.status(500).json({ success: false });
  }
};

module.exports = {
  handleAddBook,
  handleGetAllBooks,
  handleGetBook,
  handleDeleteBook,
};
