const Users = require("../models/Users");

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const handleCreateUser = async (req, res) => {
  try {
    await Users.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ success: true });
  } catch (err) {
    console.log("Create user Error ------------------------ ", err);
    console.log("Body", req.body);
    res.json({ success: false });
  }
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const handleLoginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const creds = await Users.findOne({ email: email });
    console.log(
      "login creds ------------------------------------------ ",
      creds
    );
    if (creds.length == 0) {
      res.status(400).json({ success: false }).send();
    } else {
      res.json({ success: true });
    }
  } catch (err) {
    console.log("login err -- ", err);
    res.json({ success: false });
  }
};

module.exports = {
  handleCreateUser,
  handleLoginUser,
};
