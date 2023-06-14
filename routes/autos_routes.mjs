import { showAutos ,showAuto, addAuto, updateCar, deleteAuto, deleteAutoV2 } from'../controllers/autos_controller.mjs';
import { Router} from 'express';
import verificar from '../middleware/middleware.mjs';

const router = Router()

router.get('/',  showAutos)
router.get('/showCar', showAuto)
router.post('/addcar', verificar, addAuto)
router.delete('/deleteCar/:id', deleteAuto)
router.delete('/deleteAutoV2/:id', deleteAutoV2)
router.patch('/updateCar/:id', updateCar)

export default router