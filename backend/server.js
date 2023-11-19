const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const smoothiesRoute = require("./routes/smoothiesRoute");

const PORT = 5555;
const url = "mongodb://127.0.0.1:27017/dj";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome To the app.");
});

app.use("/smoothies", smoothiesRoute);

mongoose
  .connect(url)
  .then(() => {
    console.log("App connected to Database");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
