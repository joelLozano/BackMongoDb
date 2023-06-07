import express from'express'
import {execute} from'./config/bd.mjs'
import { autosRoute, usersRoutes, makesRoutes} from'./routes/index.mjs'
import cors from 'cors';
//var express = require('express')
//const db = require('./config/bd')
//const routes = require('./routes/index')

var app = express()
app.use(express.json())

app.use(autosRoute)
app.use(usersRoutes)
app.use(makesRoutes)

execute()
app.listen(3000, () => {
    console.log("El servidor esta corriendo en el 3000")
})