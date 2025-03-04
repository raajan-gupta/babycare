const mongoose = require("mongoose")


const ProgramSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Field is Mendatory"]
    },
    fee: {
        type: Number,
        required: [true, "fee Field is Mendatory"]
    },
    shortDescription: {
        type: String,
        required: [true, "Short Description Field is Mendatory"]
    },
    longDescription: {
        type: String,
        required: [true, "Long Description Feild Is Mendatory"]
    },
    cover: {
        type: String,
        required: [true, "Cover Pic Field is Mendatory"]
    },
    seats: {
        type: Number,
        dafault: 50
    },
    duration: {
        type: Number,
        dafault: 60
    },
    sortOrder: {
        type: Number,
        default: 10
    },
    metaTitle: {
        type: String,
        default: ""
    },
    metaDescription: {
        type: String,
        default: ""
    },
    metaKeywords: {
        type: String,
        default: ""
    },
    active: {
        type: Boolean,
        dafault: true
    }
})
const Service = new mongoose.model("Program", ProgramSchema)

module.exports = Service