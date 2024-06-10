const { json } = require("express");
const mongoose = require("mongoose");

const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`DB connected`);
  } catch (err) {
    console.log(`Error connecting to db : ${err}`);
  }
};

module.exports = mongoDB;
