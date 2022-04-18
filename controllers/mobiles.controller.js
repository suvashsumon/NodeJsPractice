const mobiles = require("../models/mobiles");

exports.getAllMobiles = (req, res)=>{
    //res.send("all the mobile are shown.");
    mobiles.find({}).then((mobiles)=>{
        //res.json(mobiles);
        res.render("mobiles", {mobiles});
    })
};


exports.getMobile = (req, res)=>{
    //res.send("Mobile id "+req.params.id+" is showing.");
    mobiles.findById(req.params.id).then((mobile)=>{
        res.json(mobile);
    });
};

exports.createMobile = (req, res)=>{
    //res.send("New mobile item added");
    //res.json(req.body);
    mobiles.create(req.body).then((resp)=>{
        res.redirect("/mobiles");
    })
};