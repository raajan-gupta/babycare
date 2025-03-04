const mongoose = require("mongoose")


const EventSechma = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Field is Mendatory"]
    },
    date: {
        type: String,
        required: [true, "Event Date Field is Mendatory"]
    },
    time: {
        type: String,
        required: [true, "Event Time Field is Mendatory"]
    },
    location: {
        type: String,
        required: [true, "Event Location Field is Mendatory"]
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
const Service = new mongoose.model("Event", EventSechma)

module.exports = Service