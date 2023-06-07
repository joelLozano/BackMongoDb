import mongoose from 'mongoose'

const uri = "mongodb+srv://lozanojoel35:Admin1234@cluster0.pdspawj.mongodb.net/AutosDB"

const options = {
    autoIndex: true,
    serverSelectionTimeoutMS: 5000,
}

const execute = () => {
    mongoose.connect(uri,options)
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