 const userCollection=require('../model/userData');
 //const createUserData=require("../helper/helper")
 const addUser=async(req,res)=>{
    try{
        const exist= await userCollection.findOne({sub:req.body.sub});
        if(exist)
        return res.status(200).json("user already exist");  
        const user=new userCollection(req.body);
        await user.save();
        return res.status(200).json(user);
    }
    catch(e){
        console.log("Error",e.message);
    }

}


 const getUser=async(req,res)=>{
    try{
        const result= await userCollection.find({});
        if(result)
        return res.status(200).json(result);
        else
        return res.status(200).json("User Not Found");
    }
    catch(e){
        console.log("Error",e.message);
    }

}

 const addUsr=(req,res)=>{
    try{

    }
    catch(e){
        console.log("Error",e.message);
    }

}

module.exports={addUser,getUser}