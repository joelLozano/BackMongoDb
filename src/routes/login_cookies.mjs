import { Router} from 'express';
import { loginCockie } from '../controllers/user_controller.mjs';
import {validateSession} from '../middleware/middleware.mjs'
const router = Router()


router.post('/loginCockie', validateSession, loginCockie)



export default router