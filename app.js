const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const mobileRouter = require("./routers/mobile.router")
const userRouter = require("./routers/users.router")

const port = process.env.PORT;
const app = express();

// database connection start here
const conn = mongoose.connect(process.env.REMOTE_DATABASE_URL);
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