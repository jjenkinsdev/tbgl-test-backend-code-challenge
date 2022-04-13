//load dependencies
const mongoose = require("mongoose");

// User Model to interface with the database
const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  dob: {
    type: String,
  },
  address: {
      type: String,
  },
  description: {
      type: String
  },
  createdAt: {
      type: String,
      default: Date.now()
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;