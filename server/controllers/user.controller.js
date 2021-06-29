const User = require("../models/user.model.js");
const bcrypt = require('bcrypt');
const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    const user = req.body
    if (!user) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
        user.password = hash
        User.create(user, (err, data) => {
            if (err)
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the User."
                });
            else res.send(data);
        });
    })
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Users."
            });
        else res.send(data);
    });
};

// Find a single User with a UserId
exports.findOne = (req, res) => {
    User.findById(req.params.userId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found User with id ${req.params.userId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving User with id " + req.params.userId
                });
            }
        } else {
            res.send(data);
        }
    });
};

// Find a single User with a UserId
exports.login = (req, res) => {
    // console.log(req.body)
    User.login(req.body.username, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found user with username ${req.body.username}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving user with username " + req.body.username
                });
            }
        } else {
            bcrypt.compare(req.body.password, data.password, function(err, result) {
                if (result)
                    res.send(data);
                else res.status(404).send("Incorrect password.")
            });
        }
    });
};