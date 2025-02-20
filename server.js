const express = require("express")
const app = express()
const cors = require('cors')
const connectDB = require('./database/connectDB')

// environment variables configuration
const dotenv = require('dotenv')
dotenv.config()

// import router
const router = require('./routes/index')



app.use(cors())
app.use(express.json())

connectDB();

app.use('/', router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})