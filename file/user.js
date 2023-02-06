import express from 'express'
import { getPassword, creatUser,getUser } from '../Awaits.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


   
const router = express.Router()  

// router.post("/signup", async(req, res)=>{
//     const {userName, password} = req.body
//     console.log(userName, password)
//     const isUser = await getUser(userName)
//     if(isUser){
//         res.status(400).send({message : "user already taken"})
//         return
//     }
//     if(!/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/g.test(password)){
//       res.status(400).send({message: "Password doesnt not match"})
//         return
//     }
//     const hasedPassword = await getPassword(password)
//     const creat = await creatUser(userName,hasedPassword )

router.get("/", async(req, res)=>{
  
  
const user = await user(req)

  res.send(user)


  // res.send(movies.filter((mk)=> mk.language == language));
  // const moviee = movies.find((mk)=> mk.language == language)
  // res.send(moviee)
})

router.post("/login", async(req, res)=>{
    const {userName, password} = req.body
    console.log(userName, password)
    const userFromDB = await getUser(userName)
    if(!userFromDB){
        res.status(400).send({message : "involid credential"})
        return
    }
  const passwordFromDB = userFromDB.password
  const matchPassword = await bcrypt.compare(password , passwordFromDB)
  if(!matchPassword){
    res.status(400).send({message : "involid credential"})
        return
  }

  const token = jwt.sign({id : userFromDB._id},process.env.secredKey )
  res.send({message: "login succesfull",token: token})
    res.send(token)
})

export const userRouter = router