const mongoose = require("mongoose");

/*
 * This code defines a Mongoose schema and model for a User in a MongoDB database.
 * The schema includes fields for first name, last name, email ID, password, age,gender, and an optional profile picture.
 */
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    // required: true,
  },
  lastName: {
    type: String,
    // required: true,
  },
  emailId: {
    type: String,
    // required: true,
    // unique: true,
  },
  password: {
    type: String,
    // required: true,
  },
  age: {
    type: Number,
    // required: true,
  },
  gender: {
    type: String,
    // required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
