import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();


const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.pdspawj.mongodb.net/AutosDB`
console.log(uri)
const options = {
    autoIndex: true,
    serverSelectionTimeoutMS: 5000,
}

const execute = () => {
    mongoose.connect(uri ,options)
.then(() => {
    console.log('Conexion ok')
})
.catch((error) => {
    console.error(error)
} )

const db = mongoose.connection;

db.on('error',console.error.bind(console, 'Error en la conexion a Mongo DB') );
db.once('open', () => {
    console.log("Me conecte ok, mongodb")
});
};

export {execute}