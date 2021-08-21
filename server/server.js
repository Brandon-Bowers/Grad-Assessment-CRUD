const express = require("express");
const app = express();
const path = require("path");

const messageController = require("./controllers/messageController");

//convert all incoming data to JSON
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// this will serve the index.html because it's our only static file at this point in our directory
app.use(express.static(path.join(__dirname, "../")));

// create post handler to /messages
app.post("/messages", messageController.postNewMessage, (req, res) => {
  res.status(200).send(res.locals.message);
});

// create get handler to /messages
app.get("/messages", messageController.getAllMessages, (req, res) => {
  res.status(200).send(res.locals.allMessages);
});

// create delete handler to /messages
app.delete("/messages", messageController.deleteMessage, (req, res) => {
  res.status(200).send("Delete post router working");
});

// create change (patch) handler to /messages
app.patch("/messages", messageController.editMessage, (req, res) => {
  res.status(200).send("Patch post router working");
});

// create post to /signin
app.post("/signin", (req, res) => {
  res.status(200).send("Signin router working");
});

// add a global error handler to console log an error message and return a 400 status
app.use(function (err, req, res, next) {
  console.log("An error has occured!");
  res.status(400).set("Content-Type", "json/application").json(err);
});

app.listen(3000);
