const mongoose=require("mongoose")

//const url="mongodb://my_name:My_name@419@ac-j7dafig-shard-00-00.tuai6be.mongodb.net:27017,ac-j7dafig-shard-00-01.tuai6be.mongodb.net:27017,ac-j7dafig-shard-00-02.tuai6be.mongodb.net:27017/?ssl=true&replicaSet=atlas-byui8n-shard-0&authSource=admin&retryWrites=true&w=majority";
const url="mongodb://localhost:27017/userWhatsAppData"
mongoose.connect(url,{useUnifiedTopology:true})
 .then(()=>console.log("Database created"))
 .catch((e)=>console.log("error while creating database",e));

