const express = require("express")
const app = express()
const cors = require('cors')
const connectDB = require('./database/newsLetterSubscriber')

// environment variables configuration
const dotenv = require('dotenv')
dotenv.config()

// import router
const router = require('./routes/newsLetterSubscribe')



app.use(cors())
app.use(express.json())

connectDB();

app.use('/', router)

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`app is listening to http://localhost:${PORT}`)
})