const db = require("../../database/pool.js");

const authController = {};

module.exports = authController;

// create middleware to handle POST and GET request to /signin page
// this is where we will make queries to our database on click from our front end

// create verifyUser middleware
// declare a query string
// store variables with user information taken from the req.body
// make a db query with the query string and parameters(variables)
// upon success, redirect to /message page ? do we add this here or in the route handlers on server.js ?
// else return next with an error
