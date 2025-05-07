const express = require("express");

// create an express application
const app = express();

// the callback function is known as request handler
// it takes two arguments: request and response
app.use("/test", (req, res) => {
  res.send("Its a test route!");
});

app.use("/hello", (req, res) => {
  res.send("Hello from the server!");
});

app.use("/", (req, res) => {
  res.send("Welcome to the page!");
});

// listen for incoming requests on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
