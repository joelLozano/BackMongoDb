import express from'express'
import {execute} from'./config/bd.mjs'
import { autosRoute, usersRoutes} from'./routes/index.mjs'
//var express = require('express')
//const db = require('./config/bd')
//const routes = require('./routes/index')

var app = express()
app.use(express.json())
app.use(autosRoute)
app.use(usersRoutes)
execute()
app.listen(3000, () => {
    console.log("El servidor esta corriendo en el 3000")
})