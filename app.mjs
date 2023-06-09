import express from'express'
import {execute} from'./config/bd.mjs'
import { autosRoute, usersRoutes, makesRoutes} from'./routes/index.mjs'


var app = express()
app.use(express.json())

app.use(autosRoute)
app.use(usersRoutes)
app.use(makesRoutes)
app.set('view engine', 'ejs') // indicamos que lanzara una vista con ejs

execute()
app.listen(3000, () => {
    console.log("El servidor esta corriendo en el 3000")
})