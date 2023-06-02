//const AutosModel = require('../model/auto_model')
import AutosModel from'../model/auto_model.mjs'

const showAutos = (req, res) => {
    const consulta = AutosModel.find({});

    consulta.exec()
    .then((autos) => {
        res.json(autos);
    })
    .catch((error) => {
        res.json({'message': error})
    })
};

const addAuto =(req, res) => {
    const { make, model, version, price } = req.body
    const auto = new AutosModel({make, model, version, price})

    auto.save()
    .then((resultado) => {
        res.json({"message": resultado});
    })
    .catch((error) => {
        res.json({'message': error})
    })
};

// borra un elemento por id 
const deleteAuto = (req, res) => {
    const { id } = req.body

    AutosModel.findByIdAndRemove(id)
    .then((resultado) => {
        res.json({"message": resultado});
    })
    .catch((error) => {
        res.json({'message': error})
    })
};

// Actualiza un  item
const updateCar = (req, res) => {
    const { _id, make, model, imagen, price } = req.body

    AutosModel.findByIdAndUpdate(_id, {make, model, imagen, price})
    .then((resultado) => {
        res.json({"message": resultado});
    })
    .catch((error) => {
        res.json({'message': error})
    })
};

export { showAutos , addAuto, updateCar, deleteAuto }