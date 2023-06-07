import makeSchema from '../model/make_model.mjs'

const showMakes = (req, res) => {
    const consulta = makeSchema.find({});

    consulta.exec()
    .then((marcas) => {
        res.json(marcas);
    })
    .catch((error) => {
        res.json({'message': error})
    })
};

const addMake = (req, res) => {
    const { make, sucursal, contacto, address } = req.body
    console.log(contacto.phone)
    const makesObject = new makeSchema({ make, sucursal, contacto, address })

    makesObject.save()
    .then((resultado) => {
        res.json({"message": resultado});
    })
    .catch((error) => {
        res.json({'message': error})
    })
};

export default {addMake,showMakes };