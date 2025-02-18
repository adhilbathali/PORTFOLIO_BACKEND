// import the subscriber schema
const NewsLetter_Subscriber = require('../model/newsletterSchema')

// import express validator
const { validationResult } = require('express-validator')


const subscribe = async (req, res)=>{

    const errors = validationResult(req)

    if(!errors.isEmpty()) return res.status(404).json({errors:errors.array()})

    try{
        const { email } = req.body;

        // check if the email already exists in the database
        const existingSubscriber = await NewsLetter_Subscriber.findOne({email})
        if(existingSubscriber) return res.status(200).json({"response":"Email already exists"})

        // create new subscriber
        const newSubscriber = new NewsLetter_Subscriber({ email })
        await newSubscriber.save();
        res.status(201).json({"response":"ok"})
    
    }catch(err){
        res.status(500).json({"response":"Server error"})
    }
}

module.exports = {subscribe}