const mongoose = require("mongoose")

const subscriberSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            required:true,
            unique:true
        }},
        {timestamps:true}

)

const NewsLetter_Subscriber = mongoose.model("NewsLetter_Subscriber", subscriberSchema)
module.exports = NewsLetter_Subscriber;  //exporting the model to use in other files.  //export+