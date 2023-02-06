import { client } from './new.js';
import bcrypt from 'bcrypt'

export async function Movie(req) {
    return await client.db("mickey").collection("movies").find(req.query).toArray();
}
export async function GetById(id) {
    return await client.db("mickey").collection("movies").findOne({ id: id });
}  
export async function Post(newbook) {
    return await client.db("mickey")
        .collection("movies").insertMany(newbook);
}
export async function Delete(id) {
    return await client.db("mickey").collection("movies").deleteOne({ id: id });
}
export async function EditMovie(id, updatedMovie) {
    return await client.db("mickey")
        .collection("movies").updateOne({ id: id }, { $set: updatedMovie });
}
export async function getPassword(password){
    const salt = await bcrypt.genSalt(10)
    console.log(salt)
    const hashed = await bcrypt.hash(password,salt)
    console.log(hashed)
    return hashed
}
 
export async function creatUser(userName,hasedPassword ){
    return await client.db("mickey")
    .collection("user").insertOne({ userName: userName ,  password: hasedPassword });

}  
export async function getUser(userName){
    return await client.db("mickey")
    .collection("user").findOne({ userName: userName});

}
