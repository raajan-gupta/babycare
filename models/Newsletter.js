const mongoose = require("mongoose")


const NewsletterSechma = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email Field is Mendatory"],
        unique: true
    },
    active: {
        type: Boolean,
        dafault: true
    }
}, { timestamps: true })
const Newsletter = new mongoose.model("Newsletter", NewsletterSechma)

module.exports = Newsletter