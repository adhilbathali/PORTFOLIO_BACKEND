// import validation schema
const formValidationSchema = require('../utils/formValidationSchema')

// import checkSchema from express-validator
const { checkSchema } = require('express-validator')

// import post controller
const { postFormData } = require('../controllers/formSubmit')

const express = require("express")
const router = express.Router()

router.route('/contact/submitform').post(checkSchema(checkSchema), postFormData)

module.exports = router
