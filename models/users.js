const mongoose = require("mongoose")

const Schema = mongoose.Schema;

userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    isAdmin: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        require: true,
    }
}, {
    timestamps: true
});

let users = mongoose.model("users", userSchema)

module.exports = users