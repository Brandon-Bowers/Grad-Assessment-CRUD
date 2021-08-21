/*
TABLE messages (
username VARCHAR(50),
email VARCHAR(50),
password VARCHAR(100),
message VARCHAR(500)
*/
const db = require("../../database/pool.js");

const messageController = {};

// create middleware to handle GET/POST/DELETE/PATCH? to /messages route
// this is where we will make queries to our database and send the response back to our fetch (made in main.js)

// create middleware for GET messages upon page load
messageController.getAllMessages = (req, res, next) => {
  // declare a query string to SELECT all messages from the database
  const queryString = "SELECT username, message FROM messages;";
  console.log("messageController Middleware");
  db.query(queryString)
    //send the information back to the fetch to display
    .then((data) => {
      console.log("data : ", data);
      res.locals.allMessages = data.rows;
      // return next()
      return next();
    })
    // if theres an error, return next with the error
    .catch((err) => {
      next(err);
    });
};

// create middleware to POST a new message to the message database
messageController.postNewMessage = (req, res, next) => {
  // declare a query string to INSERT a new message into the message table and RETURNING the result/message and id after it's been added
  const queryString =
    "INSERT INTO messages (message) VALUES ($1) RETURNING message;";
  const message = [req.body.message];
  console.log("message: ", req.body);
  db.query(queryString, message)
    .then((data) => {
      // else store the message on res.locals.message
      res.locals.message = data.rows;
      // return next()
      return next();
    })
    // if theres an error, return next with the error
    .catch((err) => {
      next(err);
    });
};

// create middleware to DELETE a message from the database
messageController.deleteMessage = (req, res, next) => {
  // declare a query string to DELETE an entry from the database, where the id is equal to the id stored on the message tag?
  const queryString = "";
  const message = [req.body.message];
  db.query(queryString, message)
    .then((data) => {
      // return next()
      return next();
    })
    // if theres an error, return next with the error
    .catch((err) => {
      next(err);
    });
};

// create middleware to PATCH/edit a message in the database
messageController.editMessage = (req, res, next) => {
  // declare a query string to UPDATE a record in the table WHERE the message id is the message id? RETURNING updated message
  const queryString = "";
  const message = [req.body.message];
  db.query(queryString, message)
    .then((data) => {
      // return next()
      return next();
    })
    // if theres an error, return next with the error
    .catch((err) => {
      next(err);
    });
};

module.exports = messageController;
