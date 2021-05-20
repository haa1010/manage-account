const User = require("../models/user.model.js");

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    console.log("req :", req.body)
    const user = req.body
    if (!user) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a User
    const newUser = new User({
        username: user.username,
        fullname: user.fullname,
        password: user.password,
        address: user.address,
        dob: user.dob,
        job: user.job
    });

    // Save User in the database
    User.create(newUser, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        else res.send(data);
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Users."
            });
        else res.send(data);
    });
};

// Find a single User with a UserId
exports.findOne = (req, res) => {
    console.log("req: ", req)
    User.findById(req.params.UserId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.UserId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User with id " + req.params.UserId
                });
            }
        } else res.send(data);
    });
};