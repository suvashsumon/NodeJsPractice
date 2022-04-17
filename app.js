const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const mobileRouter = require("./routers/mobile.router")
const userRouter = require("./routers/users.router")

const port = process.env.PORT;
const app = express();

// database connection start here
const url = "mongodb+srv://suvashkumar:MTHSlowsd3scc6d8@cluster0.dzm1b.mongodb.net/testdb?retryWrites=true&w=majority";
const conn = mongoose.connect(url);
conn.then((db)=>{
    console.log("Successfully connected to database server.");
}, (err)=>{
    console.log("ERROR : Cannot connect to database server.");
})
// database connection end here

app.get("/", (req, res)=>{
    res.render("home");
});

app.set("view engine", "ejs");

app.use("/mobiles", mobileRouter);
app.use("/users", userRouter);

app.listen(port, ()=>{
    console.log("Server is running....");
})