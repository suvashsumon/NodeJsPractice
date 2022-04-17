const express = require("express");
const mongoose = require("mongoose");

const mobileRouter = require("./routers/mobile.router")
const userRouter = require("./routers/users.router")

const port = 3000;
const app = express();

// database connection start here
const url = "mongodb://127.0.0.1:27017/exam_practice";
const conn = mongoose.connect(url);
conn.then((db)=>{
    console.log("Successfully connected to database server.");
}, (err)=>{
    console.log("ERROR : Cannot connect to database server.");
})
// database connection end here

app.get("/", (req, res)=>{
    res.send("Application Home Page");
});
app.use("/mobiles", mobileRouter);
app.use("/users", userRouter);

app.listen(port, ()=>{
    console.log("Server is running....");
})