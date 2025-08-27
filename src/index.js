//require('dotenv').config({path:'./env'})
import dotenv from "dotenv"

import connnectDB from "./db/index.js";
dotenv.config({
  path:'./env'
})



connnectDB()
.then(() =>{
  app.listen(process.env.PORT || 3000,() =>{
    console.log(` server is running at port:${process.env.PORT}`);
    
  }) 
})
.catch((error) => {
  console.log("MONGO db connection failed !!!",error);
  
})



/*
import express from "express"
const app = express()
(async () => {
    try{
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.pm("error",() => {
        console.log("ERROR:",error);
        throw eroor
        
      })
      app.listen(process.env.PORT,() =>{
        console.log(`app is listening on port ${process.env.PORT}`);
          })
         } catch(error){
     console.error("ERROR",error)
     throw error
    }
})()*/