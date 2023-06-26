import User from "../model/user_model.mjs"
import session from "express-session"
import cookieParser from "cookie-parser"

const loginCockie = async (req, res) => {
    // Verficar las credenciales del usuario 
      const userFound = await User.findOne({email: req.body.email})
      if (!userFound) return res.status(400).json({message: "user not found"})
    
      const passwordCompare = await comparePassword(req.body.password, userFound.password)
      if (!passwordCompare) return res.status(401).json({message: 'invalid password'})
  
      // crear uba session y la cookie 
      req.session.loggedIn = true
      res.cookie('username', userFound._id)

      res.render('showcar') // en caso exito me manda a una vista 
}

const logout = async (req, res) => {
    // borrar la sesion y la cookie
    req.session.destroy();
    res.clearCookie('username');
    res.render('login'); // vista previa - login 
}