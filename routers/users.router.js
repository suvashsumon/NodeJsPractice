const express = require("express");
const body_parser = require("body-parser");
const users = require("../models/users");
const { getAllUsers, createNewUser, updateAllUser, deleteAllUser, getUser, createUserById, updateUser, deleteUser } = require("../controllers/users.controller");

const userRouter = express.Router();
userRouter.use(body_parser.json());
userRouter.use(body_parser.urlencoded({ extended: true }));

userRouter.route("/")
    .get(getAllUsers)
    .post(createNewUser)
    .put(updateAllUser)
    .delete(deleteAllUser);

userRouter.route("/:id")
    .get(getUser)
    .post(createUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = userRouter;