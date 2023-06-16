import express from'express'
import {execute} from'./config/bd.mjs'
import { autosRoute, usersRoutes, makesRoutes, chatRoute} from'./routes/index.mjs'
import bodyParser from'body-parser'

var app = express()
app.use(bodyParser.json())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/catalogo/autos/',autosRoute)
app.use('/catalogo/marcas',makesRoutes)
app.use('/chat',chatRoute)
app.use(usersRoutes)

app.set('view engine', 'ejs') // indicamos que lanzara una vista con ejs
//app.set("views", "./src/views") // indicamos la ruta de las vistas

execute()
app.listen(3000, () => {
    console.log("El servidor esta corriendo en el 3000")
})