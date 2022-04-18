const users = require("../models/users")

exports.getAllUsers = (req, res) => {
    // res.send("Showing all users profile.");
    users.find({}).then((users)=>{
        //res.json(users);
        res.render('users', {users});
    })
};

exports.createNewUser = (req, res) => {
    //res.send("Creating new user.");
    //res.json(req.body);
    users.create(req.body).then((resp)=>{
        res.redirect("/users");
    })
};

exports.updateAllUser = (req, res) => {
    res.send("PUT does not support by this route.");
};

exports.deleteAllUser = (req, res) => {
    res.redirect("/users");
};

exports.getUser = (req, res) => {
    users.findById(req.params.id).then((user)=>{
        res.json(user);
    })
};

exports.createUserById = (req, res) => {
    res.send("POST does not work for this route.");
};

exports.updateUser = (req, res) => {
    // res.send("PUT does not work for this route.");
    users.updateOne({_id : req.params.id}, req.body).then((resp)=>{
        res.send("Data updated");
    }).catch((err)=>{
        res.send(err);
    })
};

exports.deleteUser = (req, res) => {
    //res.send("User " + req.params.id + " is deleted.");
    users.findByIdAndRemove(req.params.id).then((resp)=>{
        res.redirect("/users");
    })
};