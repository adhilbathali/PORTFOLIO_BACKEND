const mongoose = require("mongoose");

const ContactFormSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
    },
    phone: {
        country: {
            type: String,
            required: true,
            trim: true
        },
        number: {
            type: String,
            required: true,
            trim: true,
            match: [/^\d{10,15}$/, "Invalid phone number"]
        }
    },
    representType: {
        type: String,
        enum: ["Individual", "Business", "Organization"],
        required: true
    },
    representName: {
        type: String,
        required: true,
        trim: true
    },
    query: {
        type: String,
        required: true,
        trim: true
    },
    submittedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("ContactForm", ContactFormSchema);
