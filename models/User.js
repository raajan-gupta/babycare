const mongoose = require("mongoose")


const UserSechma = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Field is Mendatory"]
    },
    username: {
        type: String,
        required: [true, "Name Field is Mendatory"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email Address Field is Mendatory"],
        unique: true,
    },
    phone: {
        type: String,
        required: [true, "Phone Number Feild Is Mendatory"]
    },
    password: {
        type: String,
        required: [true, "Password Field is Mendatory"]
    },
    role: {
        type: String,
        default: "Admin"
    },
    otp: {
        type: Number,
        default: -498791144
    },
    active: {
        type: Boolean,
        dafault: true
    }
}, { timestamps: true })
const User = new mongoose.model("User", UserSechma)

module.exports = User