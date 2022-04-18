const express = require("express");
const body_parser = require("body-parser");
const mobiles = require("../models/mobiles");
const { getAllMobiles, getMobile, createMobile } = require("../controllers/mobiles.controller");

const mobile = express.Router();
mobile.use(body_parser.json());
mobile.use(body_parser.urlencoded({extended:true}));

mobile.get("/", getAllMobiles);
mobile.get("/:id", getMobile);
mobile.post("/", createMobile);

module.exports = mobile;