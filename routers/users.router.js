const express = require("express");
const body_parser = require("body-parser");

const userRouter = express.Router();
userRouter.use(body_parser.json());

userRouter.route("/")
    .get((req, res) => {
        res.send("Showing all users profile.");
    })
    .post((req, res) => {
        //res.send("Creating new user.");
        res.json(req.body);
    })
    .put((req, res) => {
        res.send("PUT does not support by this route.");
    })
    .delete((req, res) => {
        res.send("All the users are deleted.");
    });

userRouter.route("/:id")
    .get((req, res) => {
        res.send("Showing user id : " + req.params.id);
    })
    .post((req, res) => {
        res.send("POST does not work for this route.");
    })
    .put((req, res) => {
        res.send("PUT does not work for this route.");
    })
    .delete((req, res) => {
        res.send("User " + req.params.id + " is deleted.");
    });

module.exports = userRouter;