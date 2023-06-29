import Jwt from "jsonwebtoken";
import User from "../model/user_model.mjs";
import { encryptPassword, comparePassword } from "../model/user_model.mjs";
import RoleModel from "../model/roles_model.mjs"
import 'dotenv/config'

const loginview = (req, res) =>{
    res.render('index')
}

const userRegister = async (req, res ) => {
    const { username, email, password, nombre, apePaterno, roles} = req.body

    const newUser = new User({
        username,
        email,
        password: await encryptPassword(password),
        nombre,
        apePaterno
    })

    // comprobar si mandan un rol
    if( roles) {
        const foundRole = await RoleModel.find({name: {$in: roles} })
        newUser.roles = foundRole.map (role => role._id)
    } else {
        const role = await RoleModel.findOne({name: 'user'})
        newUser.roles = [role._id]
    }
    const saveUser = await newUser.save()
    const token = Jwt.sign({id: saveUser._id}, process.env.SECRET, {
        expiresIn: 50000
    })
    res.json({token})
}


// controller para regustrar usuarios como administrador
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

    const token = Jwt.sign({id: saveuser._id}, process.env.SECRET, {
        expiresIn: 50000
    })

    res.status(200).json({token})
   
};

const login = async (req, res) => {
     // buscar el usuario en BD
     console.log("......");
    const userFound = await User.findOne({email: req.body.email})
    //if (!userFound) return res.status(401).json({message: 'user not found'})
    let error = { message:'user not found'}
    if (!userFound) return res.status(400).json({message: "user not found"})
    //res.render("404error", {error})

    // comparar el password 

    const passwordCompare = await comparePassword(req.body.password, userFound.password)
    if (!passwordCompare) return res.status(401).json({message: 'invalid password'})

    // Generar un Token 
    const token = Jwt.sign({id: userFound._id}, process.env.SECRET, {
        expiresIn: 50000
    })
    //res.redirect('/catalogo/autos/')
    res.json({token})
}

export {loginview, createUser, login}