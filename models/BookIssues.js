const mongoose = require("mongoose");

const { Schema } = mongoose;

const BookIssueSchema = new Schema({
  EnrollmentNumber: {
    type: String,
    required: true,
  },
  BookId: {
    type: Number,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("bookIssue", BookIssueSchema);
