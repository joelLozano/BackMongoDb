import { Router} from 'express';
import { createUser, login } from '../controllers/user_controller.mjs';
const router = Router()


router.post('/createUser', createUser)
router.get('/login', login)


export default router