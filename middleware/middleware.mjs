
const verificar = (req, res, next) => {

    let token = req.headers['x-access-token'];
    if (!token) return res.status(403).json({message: ' no hay token'})

    console.log(token)
}
export default verificar 