const { checkSchema } = require("express-validator");

const contactFormValidation = checkSchema({
    firstName: {
        trim: true,
        notEmpty: {
            errorMessage: "First name is required",
        },
        isLength: {
            options: { min: 3, max:18 },
            errorMessage: "First name must be at least 2 characters",
        },
    },
    lastName: {
        trim: true,
        notEmpty: {
            errorMessage: "Last name is required",
        },
        isLength: {
            options: { min: 3, max:18 },
            errorMessage: "Last name must be at least 2 characters",
        },
    },
    email: {
        trim: true,
        notEmpty: {
            errorMessage: "Email is required",
        },
        isEmail: {
            errorMessage: "Invalid email format",
        },
    },
    "phone.country": {
        trim: true,
        notEmpty: {
            errorMessage: "Country code is required",
        },
        isString: {
            errorMessage: "Country code must be a string",
        },
        isLength: {
            options: { min: 1, max: 5 },
            errorMessage: "Country code must be between 1 to 5 characters",
        },
    },
    "phone.number": {
        trim: true,
        notEmpty: {
            errorMessage: "Phone number is required",
        },
        matches: {
            options: [/^\d{10,15}$/],
            errorMessage: "Phone number must be between 10 to 15 digits",
        },
    },
    representType: {
        notEmpty: {
            errorMessage: "You must select a category (Individual, Business, or Organization)",
        },
        isIn: {
            options: [["Individual", "Business", "Organization"]],
            errorMessage: "Invalid category selected",
        },
    },
    representName: {
        trim: true,
        notEmpty: {
            errorMessage: "This field is required",
        },
    },
    query: {
        trim: true,
        notEmpty: {
            errorMessage: "Query field is required",
        },
        isLength: {
            options: { min: 10 },
            errorMessage: "Query must be at least 10 characters",
        },
    },
});

module.exports = contactFormValidation;