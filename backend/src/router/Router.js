const express=require("express");
const router=new express.Router();

const {addUser,getUser}=require('../controller/Controller');

router.post('/addUser',addUser);
router.get('/getAllUsers',getUser)
router.put('',)
router.delete('',)

module.exports=router;