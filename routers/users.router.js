const express = require("express");
const body_parser = require("body-parser");
const users = require("../models/users");

const userRouter = express.Router();
userRouter.use(body_parser.json());
userRouter.use(body_parser.urlencoded({extended:true}));

userRouter.route("/")
    .get((req, res) => {
        // res.send("Showing all users profile.");
        users.find({}).then((users)=>{
            //res.json(users);
            res.render('users', {users});
        })
    })
    .post((req, res) => {
        //res.send("Creating new user.");
        //res.json(req.body);
        users.create(req.body).then((resp)=>{
            res.redirect("/users");
        })
    })
    .put((req, res) => {
        res.send("PUT does not support by this route.");
    })
    .delete((req, res) => {
        res.send("All the users are deleted.");
    });

userRouter.route("/:id")
    .get((req, res) => {
        users.findById(req.params.id).then((user)=>{
            res.json(user);
        })
    })
    .post((req, res) => {
        res.send("POST does not work for this route.");
    })
    .put((req, res) => {
        // res.send("PUT does not work for this route.");
        users.updateOne({_id : req.params.id}, req.body).then((resp)=>{
            res.send("Data updated");
        }).catch((err)=>{
            res.send(err);
        })
    })
    .delete((req, res) => {
        res.send("User " + req.params.id + " is deleted.");
    });

module.exports = userRouter;