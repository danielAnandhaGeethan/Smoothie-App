const express = require("express");
const User = require("../models/userModel");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const check = await User.find({ mbn: req.body.mbn });

    if (check.length > 0) {
      return res.status(500).send({
        message: "User Already Exists",
      });
    }

    const newUser = {
      mbn: req.body.mbn,
      username: req.body.username,
      password: req.body.password,
      favs: [],
    };

    const user = await User.create(newUser);

    return res.status(201).json(user);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

router.get("/:data", async (req, res) => {
  try {
    const data = req.params.data.split(",");

    const mbn = data[0];
    const password = data[1];

    const user = await User.find({ mbn, password });

    if (user.length === 1) {
      return res.status(200).json(user);
    } else {
      return res.status(400).send({ message: "No such user" });
    }
  } catch (err) {
    return res.status(500).send({
      message: err.message,
    });
  }
});

router.post("/:user", async (req, res) => {
  try {
    const { favs } = req.body;
    const user = req.params.user.split(",");

    const mbn = user[0];
    const password = user[1];

    const updatedUser = await User.findOneAndUpdate(
      { mbn, password },
      { $set: { favs } },
      { new: true }
    );

    return res.status(201).send(favs);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

module.exports = router;
