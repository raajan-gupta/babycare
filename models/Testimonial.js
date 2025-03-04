const mongoose = require("mongoose")


const TestimonialSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Field is Mendatory"]
    },
    profession: {
        type: String,
        required: [true, "Profession Field is Mendatory"]
    },
    message: {
        type: String,
        required: [true, "Message Field is Mendatory"]
    },
    sortOrder: {
        type: Number,
        default: 10
    },
    pic: {
        type: String,
        required: [true, "Pic Field is Mendatory"]
    },
    active: {
        type: Boolean,
        dafault: true
    }
})
const Testimonial = new mongoose.model("Testimonial", TestimonialSchema)

module.exports = Testimonial