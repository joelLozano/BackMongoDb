//const AutosModel = require('../model/auto_model')
import autosModel from'../model/auto_model.mjs'
import makeModel from '../model/make_model.mjs'
import aws from'aws-sdk'
import multer from 'multer';
import multerS3 from 'multer-s3'

import 'dotenv/config'

const showAutos = (req, res) => {
    const consulta = autosModel.find({}).populate('make');

    consulta.exec()
    .then((autos) => {
       res.json(autos)
       // res.render('showcars', {autos})
    })
    .catch((error) => {
        res.json({'message': error})
    })
};

const showAuto = (req, res) => {
    const consulta = autosModel.find()
    .populate('make') // Populate, nos muestra el documento Relacionado

    consulta.exec()
    .then((autos) => {
        res.json(autos);
    })
    .catch((error) => {
        res.json({'message': error})
    })
};

// Configuracion de mi bucket 
aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
})

const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET_NAME,
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.originalname})
        },
        key: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
})

// muestra la vista del fomulario. 
const formAuto = async (req, res) => {
    const brands = await makeModel.find({});
    res.render('addcar',{brands} );
}

const addAuto = async (req, res) => {
    const { make, model, version, price } = req.body;
    const imagen = req.file.location

    const makeObj = await makeModel.findById({_id: make});

    if (!makeObj) return res.status(400).json({ error: 'Make no encontrado' });

    const auto = new autosModel({make: makeObj,model, version, price,imagen})

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
    const { id } = req.params

    autosModel.findByIdAndRemove(id)
    .then((resultado) => {
        res.json({"message": resultado});
    })
    .catch((error) => {
        res.json({'message': error})
    })
};

// borra un elemento por id 
const deleteAutoV2 = async (req, res) => {
    const { id } = req.params

   const result = await autosModel.deleteOne({_id: id})
   if (result.deletedCount == 1) {
    res.status(200).json({message: 'object deleted'})
   }
   if (result.deletedCount == 0) {
    res.status(400).json({message: 'Item not found'})
   }

};

// Actualiza un  item
const updateCar = (req, res) => {
    const { id } = req.params;
    const { make, model, imagen, price } = req.body
    let query = autosModel.findByIdAndUpdate(id, {make, model, imagen, price})
    query.exec()
    .then((resultado) => {
        res.json({"message": resultado});
    })
    .catch((error) => {
        res.json({'message': error})
    })
};

export { showAutos ,showAuto, addAuto, updateCar, deleteAuto ,deleteAutoV2,formAuto, upload }