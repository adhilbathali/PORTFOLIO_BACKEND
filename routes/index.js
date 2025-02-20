const router = require('express').Router()

const formRouter = require('./formSubmit')
const subscribeRouter = require('./newsLetterSubscribe')

router.use('/', formRouter)
router.use('/', subscribeRouter)

module.exports = router
