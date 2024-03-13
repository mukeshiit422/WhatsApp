const mongoose=require("mongoose")
const validator=require("validator")

//student schema
const userSchema=new mongoose.Schema({

    name:{
        type:String
    },
    email:{
        type:String,
    },
    sub:{
        type:String,
    },
    picture:{
        type:String,
    },
    email_verified:{
        type:Boolean,
    }  
})

//student collection or table
const userCollection=new mongoose.model("userCollection",userSchema)

module.exports=userCollection;