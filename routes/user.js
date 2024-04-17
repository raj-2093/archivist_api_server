const express = require("express");
const User = require("../models/Users");
const mongoose = require("mongoose");
const { handleCreateUser, handleLoginUser } = require("../controllers/user");

const router = express.Router();

router.post("/createUser", handleCreateUser);

router.post("/login", handleLoginUser);

module.exports = router;
