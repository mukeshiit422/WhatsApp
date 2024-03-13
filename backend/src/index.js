const express=require('express')
const cors=require('cors');
//we can use type:"module" in package.json to use import like import express from express
require("./db/conn");
const router=require('./router/Router')
const app=express();
app.use(cors());
app.use(express.json()) 
app.use(express.urlencoded({extended:false})) 
app.use(router);
const PORT=process.env.PORT || 8000;
app.listen( PORT,()=>{console.log("Listen on port", PORT)});




