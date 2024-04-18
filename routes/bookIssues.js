const express = require("express");
const {
  handleBookIssue,
  handleBookReturn,
} = require("../controllers/bookIssues");

const router = express.Router();

router.route("/").post(handleBookIssue).delete(handleBookReturn);
