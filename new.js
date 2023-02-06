// const express = require("express")
// import * as dotenv from 'dotenv'
// import  express  from "express"
// import { MongoClient } from "mongodb"
// import { MovieRouter } from './file/Movie.js'
// import { userRouter } from './file/user.js'


import * as dotenv from 'dotenv'
import  express  from "express"
import { MongoClient } from "mongodb"
import { MovieRouter } from './file/Movie.js'
import { userRouter } from './file/user.js'


dotenv.config()
const app = express()     
const port = process.env.PORT 

 
   const mongo_url = "mongodb+srv://ibrahim:3998786@cluster0.vyrjjl0.mongodb.net/?retrywrites=true&w=majority"


 
async function createConnection(){
    const client = new MongoClient(mongo_url)
    await client.connect() 
    console.log("mongo is connected")
    return client;
}
 export const client = await createConnection(); 
 app.use(express.json())

 app.get("/", (req,res)=>{
    res.send("happy pongal again and again")
})


app.use("/movie", MovieRouter)
app.use("/user", userRouter)



app.listen(port, ()=>{console.log("port is start :",port)})







