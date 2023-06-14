import makeCaddMakeontroller from '../controllers/make_controller.mjs'
import { Router} from 'express';
import verificar from '../middleware/middleware.mjs';

const route = Router() 

route.get('/getMakes', verificar, makeCaddMakeontroller.showMakes)
route.post('/postMakes', makeCaddMakeontroller.addMake)
//route.delete('/deleteMakes', makeCaddMakeontroller.addMake)

export default route