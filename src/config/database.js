const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://raviyadav2110:JhIEj4Os3mpZE1lA@learnnodejs.uyispur.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
