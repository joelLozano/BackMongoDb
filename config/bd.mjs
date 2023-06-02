import mongoose from 'mongoose'

const uri = "Aqui va tu URI"

const options = {
    autoIndex: true,
    serverSelectionTimeoutMS: 5000
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