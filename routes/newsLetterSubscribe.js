const express = require('express')
const { check } = require('express-validator')

// import necessary controllers
const {subscribe} = require('../controllers/newsLetterSubscribe')

const router = express.Router()

router.route('/newsletter/subscribe').post(subscribe, [
    check('email', 'Please enter a valid email').isEmail(), // Validation
  ], subscribe )


module.exports = router;
