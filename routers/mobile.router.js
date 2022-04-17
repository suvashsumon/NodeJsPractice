const express = require("express");
const body_parser = require("body-parser");
const mobiles = require("../models/mobiles");

const mobile = express.Router();
mobile.use(body_parser.json());
mobile.use(body_parser.urlencoded({extended:true}));

mobile.get("/", (req, res)=>{
    //res.send("all the mobile are shown.");
    mobiles.find({}).then((mobiles)=>{
        //res.json(mobiles);
        res.render("mobiles", {mobiles});
    })
});

mobile.get("/:id", (req, res)=>{
    //res.send("Mobile id "+req.params.id+" is showing.");
    mobiles.findById(req.params.id).then((mobile)=>{
        res.json(mobile);
    });
});

mobile.post("/", (req, res)=>{
    //res.send("New mobile item added");
    //res.json(req.body);
    mobiles.create(req.body).then((resp)=>{
        res.redirect("/mobiles");
    })
});

mobile.post("/:id", (req, res)=>{
    res.send("Sorry, this route does not supports post request.");
});

mobile.delete("/", (req, res)=>{
    res.send("All mobile items are deleted");
});

mobile.delete("/:id", (req, res)=>{
    res.send("Mobile item id "+req.params.id+" is deleted.");
});

mobile.put("/", (req, res)=>{
    res.send("Put does not support by this route.");
});

mobile.put("/:id", (req, res)=>{
    res.send("Put does not support by this route.");
})

module.exports = mobile;