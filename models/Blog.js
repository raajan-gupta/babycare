const mongoose = require("mongoose")


const BlogSechma = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Field is Mendatory"]
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
}, { timestamps: true })
const Service = new mongoose.model("Blog", BlogSechma)

module.exports = Service