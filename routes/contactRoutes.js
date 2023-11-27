const express = require("express");
const router = express.Router();
const {getallContact,createContact,updateContact,deleteContact,getContact} = require("../Controllers/contactController");

router.route("/").get(getallContact).post(createContact);
router.route("/:id").put(updateContact).delete(deleteContact).get(getContact);

// as these methods are following common routes we can share with other definitions to reduce the number of lines
// router.route("/").post(createContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);
// router.route("/:id").get(getContact);


// export router
module.exports = router;
 
