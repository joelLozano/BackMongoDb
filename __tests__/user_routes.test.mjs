import  request from'supertest'
import app from'../app.mjs'


//const  {showAutos}  = require('../controllers/autos_controller.mjs');
// const  { Router} = require('express');


const showAutos = (res, req) => {
    res.status(200)
}

// app.use(express.urlencoded({extended: true}))
// app.use(express.json())

// router.get('/',  showAutos)


describe('Pruebas de rutas de autos' , () =>{

    test('Probando ruta get 200', async () => {
        const response = await request(app).get('/')
        expect(response.status).toBe(200)
    })
})