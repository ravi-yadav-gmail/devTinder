const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
// create an express application
const app = express();

app.post("/signup", async (req, res) => {
  // create a new user instance using the User model
  // and the userObj data
  const user = new User({
    firstName: "Meera",
    lastName: "Yadav",
    emailId: "raviyadav.2110@gmail.com",
    password: "password123",
    age: 36,
    gender: "Female",
  });

  try {
    await user.save();

    res.status(201).send({
      message: "User created successfully",
      user: user,
    });
  } catch (error) {
    res.status(400).send({
      message: "Error creating user",
      error: error.message,
    });
  }
});

// connectDB is a function that will connect to the MongoDB database
connectDB()
  .then(() => {
    console.log("MongoDB connected successfully");
    // listen for incoming requests on port 3000
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });
