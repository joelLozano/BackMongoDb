import { showAutos ,addAuto, updateCar, deleteAuto } from'../controllers/autos_controller.mjs';
import { Router} from 'express';

const router = Router()

router.get('/', showAutos)
router.post('/addcard', addAuto)
router.delete('/deleteCar', deleteAuto)
router.patch('/updateCar', updateCar)

export default router