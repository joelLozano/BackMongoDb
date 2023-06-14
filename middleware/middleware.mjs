import Jwt  from "jsonwebtoken";
import { SECRET } from "../config/config.mjs";
import User from "../model/user_model.mjs";
import { json } from "express";
const verificar = async (req, res, next) => {
 try {
    
    let token = req.headers['x-access-token'];
    if (!token) return res.status(403).json({message: ' no hay token'})

    // jwt Verificar el token
    const decoded = Jwt.verify(token, SECRET)
    console.log(decoded.id)

    // crear una consulta por ID 
    const user = await User.findById(decoded.id, {password: 0})
    if (!user) return res.status(404).json({message: 'User not found'})

    console.log(user);
    next();
 } catch (error) {
    res.json({message: 'token no valido'})
 }
}

export default verificar 