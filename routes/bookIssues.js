const express = require("express");
const {
  handleBookIssue,
  handleBookReturn,
  handleGetAllIssues,
} = require("../controllers/bookIssues");
const { validateIssueRequest } = require("../middlewares/bookIssues");

const router = express.Router();

router
  .route("/")
  .get(handleGetAllIssues)
  .post(validateIssueRequest, handleBookIssue)
  .delete(handleBookReturn);

module.exports = router;
