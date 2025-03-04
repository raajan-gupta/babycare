const mongoose = require("mongoose")


const TeamSechma = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Field is Mendatory"]
    },
    profile: {
        type: String,
        required: [true, "Profile Field is Mendatory"]
    },
    pic: {
        type: String,
        required: [true, "Pic Feild Is Mendatory"]
    },
    facebook: {
        type: String,
        dafault: ""
    },
    instagram: {
        type: String,
        dafault: ""
    },
    twitter: {
        type: String,
        dafault: ""
    },
    linkedin: {
        type: String,
        dafault: ""
    },
    sortOrder: {
        type: Number,
        default: 10
    },
    active: {
        type: Boolean,
        dafault: true
    }
})
const Service = new mongoose.model("Team", TeamSechma)

module.exports = Service