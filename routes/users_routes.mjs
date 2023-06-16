import { Router} from 'express';
import {loginview, createUser, login } from '../controllers/user_controller.mjs';
const router = Router()


router.post('/createUser', createUser)
router.get('/', loginview)
router.post('/login', login)


export default router