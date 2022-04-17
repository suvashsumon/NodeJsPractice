const express = require("express");

const mobileRouter = require("./routers/mobile.router")
const userRouter = require("./routers/users.router")

const port = 3000

const app = express();
app.get("/", (req, res)=>{
    res.send("Application Home Page");
});
app.use("/mobiles", mobileRouter);
app.use("/users", userRouter);

app.listen(port, ()=>{
    console.log("Server is running....");
})