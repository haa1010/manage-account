module.exports = app => {
  const users = require("../controllers/user.controller.js");

  // Create a new user
  app.post("/user", users.create);

  // Retrieve all users
  app.get("/users", users.findAll);

  // Retrieve a single user with userId
  app.get("/users/:userId", users.findOne);
};
