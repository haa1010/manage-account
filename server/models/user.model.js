const sql = require("../db/db.connection.js");

// constructor
const User = function(user) {
    this.username = user.username;
    this.fullname = user.fullname;
    this.password = user.password;
    this.address = user.address;
    this.dob = user.dob;
    this.job = user.job
};

User.create = (newUser, result) => {
    sql.query("INSERT INTO Users SET ?", newUser, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        // console.log("created User: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};

User.findById = (userId, result) => {
    sql.query(`SELECT * FROM Users WHERE id = ${userId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            result(null, res[0]);
            return;
        }

        // not found User with the id
        result({ kind: "not_found" }, null);
    });
};

User.getAll = result => {
    sql.query("SELECT * FROM Users", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        // console.log("Users: ", res);
        result(null, res);
    });
};


User.login = (username, result) => {
    sql.query(`SELECT * FROM Users WHERE username = "${username}"`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            // console.log("found User: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found User with the username
        result({ kind: "not_found" }, null);
    });
};

module.exports = User;