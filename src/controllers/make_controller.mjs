import makeSchema from '../model/make_model.mjs'

const showMakes = (req, res) => {
    const consulta = makeSchema.find({});

    consulta.exec()
    .then((marcas) => {
        //res.json(marcas);
        res.render('showMakes', {marcas})
    })
    .catch((error) => {
        res.json({'message': error})
    })
};

const addMake = (req, res) => {
    const { make, sucursal, contact, address } = req.body
    //console.log(contact.phone)
    const makesObject = new makeSchema({ make, sucursal, contact, address })

    makesObject.save()
    .then((resultado) => {
        res.json({"message": resultado});
    })
    .catch((error) => {
        res.json({'message': error})
    })
};

export default {addMake,showMakes };