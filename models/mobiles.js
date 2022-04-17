const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mobileSchema = new Schema({
    name : {
        type : String,
        require : true
    },
    description : {
        type : String,
        require : true
    },
    isavilable : {
        type : Boolean,
        default : true
    },
    price : {
        type : Number,
        default : 0
    }
},
{
    timestamps : true
});

let mobiles = mongoose.model('mobiles', mobileSchema);

module.exports = mobiles;