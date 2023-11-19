const express = require("express");
const Smoothie = require("../models/smoothieModel");
const router = express.Router();

router.get("/:tags", async (req, res) => {
  try {
    const { tags } = req.params;

    const smoothies = await Smoothie.find({
      keywords: { $all: tags.split(",") },
    });

    if (!smoothies || !smoothies.length) {
      return res.status(200).send({
        message: "No Smoothie Found",
      });
    }

    return res.status(200).json(smoothies);
  } catch (err) {
    res.status(500).send("Error in database");
  }
});

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.description ||
      !req.body.preptime ||
      !req.body.rating ||
      !req.body.ingredients ||
      !req.body.keywords
    ) {
      return res.status(400).send({ message: "Invalid Data" });
    }

    const newSmoothie = {
      title: req.body.title,
      description: req.body.description,
      preptime: req.body.preptime,
      rating: req.body.rating,
      ingredients: req.body.ingredients,
      keywords: req.body.keywords,
    };

    const smoothie = await Smoothie.create(newSmoothie);

    return res.status(201).json(smoothie);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

module.exports = router;
