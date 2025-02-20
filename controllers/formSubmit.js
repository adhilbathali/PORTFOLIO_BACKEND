// import schema
const ContactForm = require("../model/contactformSchema")

// import express validator
const { validationResult } = require("express-validator")
const NewsLetter_Subscriber = require("../model/newsletterSchema")
const { response } = require("express")

const postFormData = async (req, res)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()) return res.status(404).json({errors:errors.array()})
    
    try{
        const { firstName, lastName, email, phone, representName, query, representType } = req.body

        // check if the query has sent
        const existingQuery = await ContactForm.findOne({ email })
        if(existingQuery) return res.status(200).json({response: "You have already sent a query"})

        // create new query
        const newQuery = new ContactForm({ firstName, lastName, email, phone, representName, query, representType })
        await newQuery.save()
        res.status(201).json({"response":"ok"})
    }catch(err){
        res.status(500).json({"response":"Server error"})
    }
}

module.exports = {postFormData}