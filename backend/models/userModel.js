const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  mbn: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  favs: {
    type: [{}],
  },
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
