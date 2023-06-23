import express from'express'
import {execute} from'./config/bd.mjs'
import { autosRoute, usersRoutes, makesRoutes} from'./routes/index.mjs'
import bodyParser from'body-parser'
import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:5173', // Orígenes permitidos, puede ser un solo valor o un arreglo de valores
    methods: ['GET', 'POST'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
  };

var app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors(corsOptions))

app.use('/catalogo/autos/',autosRoute)
app.use('/catalogo/marcas',makesRoutes)
//app.use('/chat',chatRoute)
app.use(usersRoutes)

app.set('view engine', 'ejs') // indicamos que lanzara una vista con ejs
//app.set("views", "./src/views") // indicamos la ruta de las vistas

execute()
app.listen(3000, () => {
    console.log("El servidor esta corriendo en el 3000")
})