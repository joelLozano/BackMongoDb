import User from "../model/user_model.mjs";
import { encryptPassword, comparePassword } from "../model/user_model.mjs";

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

    await newUser.save()
    .then((resultado) => {
        res.json({message: resultado})
    }).catch((error) => {
        res.json({message: error})
    })
};

const login = async (req, res) => {
    // buscar el usuario en BD
    const userFound = await User.findOne({email: req.body.email})
    if (!userFound) return res.status(401).json({message: 'user not found'})

    // comparar el password 

    const passwordCompare = await comparePassword(req.body.password, userFound.password)
    console.log("retorno BD = ",passwordCompare);
    if (!passwordCompare) return res.status(401).json({message: 'invalid password'})

    res.json({message: 'WElcome '+ userFound.nombre})

}

export {createUser, login}