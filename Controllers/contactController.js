const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getallContact = asyncHandler(async (req,res)=>{
    const contacts = await Contact.find();
    res.status(200).json({contacts});
});

//@desc create contacts
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req,res)=>{
    console.log("The new contact is:",req.body);
    const {name , email , phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contacts = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contacts);
});

//@desc update contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updateContact =  Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    
    res.status(200).json(updateContact);
});

//@desc update contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Delete Contact for ${req.params.id}`});
});

//@desc update contacts
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});


module.exports = {getallContact,createContact,updateContact,deleteContact,getContact};