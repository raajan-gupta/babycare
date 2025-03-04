const mongoose = require("mongoose")


const ContactUsSechma = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Field is Mendatory"]
    },
    email: {
        type: String,
        required: [true, "Email Address Field is Mendatory"]
    },
    phone: {
        type: String,
        required: [true, "Phone Number Feild Is Mendatory"]
    },
    subject: {
        type: String,
        required: [true, "Subject Field is Mendatory"]
    },
    message: {
        type: String,
        required: [true, "Message Field is Mendatory"]
    },
    active: {
        type: Boolean,
        dafault: true
    }
}, { timestamps: true })
const ContactUs = new mongoose.model("ContactUs", ContactUsSechma)

module.exports = ContactUs