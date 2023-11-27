//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getallContact = (req,res)=>{
    res.status(200).json({message:"Get all Contacts"});
}

//@desc create contacts
//@route POST /api/contacts
//@access public

const createContact = (req,res)=>{
    console.log("The new contact is:",req.body);
    const {name , email , phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({message:"Create Contact"});
}

//@desc update contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req,res)=>{
    
    res.status(200).json({message:`Update Contact for ${req.params.id}`});
}

//@desc update contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req,res)=>{
    res.status(200).json({message:`Delete Contact for ${req.params.id}`});
}

//@desc update contacts
//@route GET /api/contacts/:id
//@access public

const getContact = (req,res)=>{
    res.status(200).json({message:`get Contact for ${req.params.id}`});
}


module.exports = {getallContact,createContact,updateContact,deleteContact,getContact}