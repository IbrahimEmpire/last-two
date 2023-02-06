import { Movie, GetById, Post, Delete, EditMovie } from '../Awaits.js'
import  express from 'express'
import {auth} from '../backup/midleware/auth.js'

const router = express.Router()
router.get("/", async(req, res)=>{
  
    const { language, rating } = req.query;  
    // let filteredMovies = movies
    // if (language){
    //     filteredMovies = filteredMovies.filter((mk)=> mk.language == language)
    // }
    // if (rating){
    //     filteredMovies = filteredMovies.filter((mk)=> mk.rating == rating)
    // }  

    if(req.query.rating){
        req.query.rating = +req.query.rating
    }
    // if(!language){
    //     res.status(404).send({message: "This Lanuage Book Is not Fount"})
    // }
const movie = await Movie(req)

    res.send(movie)
  
  
    // res.send(movies.filter((mk)=> mk.language == language));
    // const moviee = movies.find((mk)=> mk.language == language)
    // res.send(moviee)
})
router.get("/:id", async (req,res)=>{
    const { id } = req.params
    // const movie = movies.find((mk)=> mk.id == id)
  const movie = await GetById(id)
  movie ? res.send(movie) : res.status(404).send({message: "Movie is not fount"})
    // res.send(movie)
})

router.post("/", async(req, res)=>{
    const newbook = req.body
    

    const result = await Post(newbook)

    res.send(result)
})

router.delete("/:id",async (req,res)=>{
    const { id } = req.params
    // const movie = movies.find((mk)=> mk.id == id)
  const movie = await Delete(id)
  movie ? res.send(movie) : res.status(404).send({message: "Movie is not fount"})
    // res.send(movie)
})

router.put("/:id",async(req, res)=>{
    const updatedMovie = req.body
    const { id } = req.params
   

    const result = await EditMovie(id, updatedMovie)

    res.send(result)
})
export const MovieRouter = router
