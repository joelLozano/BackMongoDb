import { Schema as _Schema, model as _model } from "mongoose";
import bcrypt from 'bcrypt';

const Schema = _Schema

const user = new Schema ({
    username: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        validate: function(value) {
            const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return mail.test(value)
        }, 
        message: 'Formato de correo no valido'
    },
    password: String,
    nombre: String,
    apePaterno: String,
    rol: {
        type: String,
        enum: ['user', 'admin', 'cliente'],
        default: 'cliente'
    }
})

export const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

export const comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}


const User = _model('users',user );

export default User;