import Jwt from "jsonwebtoken";
import User from "../model/user_model.mjs";
import { encryptPassword, comparePassword } from "../model/user_model.mjs";
import { SECRET } from "../config/config.mjs";

const createUser = async (req, res) => {
    const { username, email, password, nombre,apePaterno, rol } = req.body

    const newUser = new User({
        username,
        email,
        password: await encryptPassword(password),
        nombre,
        apePaterno,
        rol
    })

    const saveuser =  await newUser.save()

    const token = Jwt.sign({id: saveuser._id}, SECRET, {
        expiresIn: 50000
    })

    res.status(200).json({token})
   
};

const login = async (req, res) => {
    // buscar el usuario en BD
    const userFound = await User.findOne({email: req.body.email})
    if (!userFound) return res.status(401).json({message: 'user not found'})

    // comparar el password 

    const passwordCompare = await comparePassword(req.body.password, userFound.password)
    if (!passwordCompare) return res.status(401).json({message: 'invalid password'})

    // Generar un Token 
    const token = Jwt.sign({id: userFound._id}, SECRET, {
        expiresIn: 50000
    })

    res.json({token})
}

export {createUser, login}